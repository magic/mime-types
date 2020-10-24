#!/usr/bin/env node

import path from 'path'

import cli from '@magic/cli'
import fs from '@magic/fs'
import log from '@magic/log'

import overwrites from './overwrites.mjs'

const mimeTypeFilePath = path.join(process.cwd(), 'src', 'mimes.mjs')
const compressFilePath = path.join(process.cwd(), 'src', 'compressibles.mjs')

const args = {
  options: [['--help', '-help', 'help', '--h', '-h']],
  help: {
    name: 'magic-mime-types',
    header: 'mime-db, sorted by file extension.',
    example: `
# build files in src, build documentation
./bin/bin.mjs 
`,
  },
}

import { default as mimes } from 'mime-db'

const overwriteKeys = Object.keys(overwrites)

const run = async () => {
  const mimeTypes = {}
  const docMimeTypes = []
  const compressibles = {}

  Object.entries(mimes)
    .filter(([key, val]) => val.extensions?.length)
    .forEach(([key, val]) => {
      val.extensions.forEach(ext => {
        if (overwriteKeys.includes(ext)) {
          mimeTypes[ext] = overwrites[ext]

          docMimeTypes.push([ext, overwrites[ext]])
        } else {
          mimeTypes[ext] = key
          docMimeTypes.push([ext, key])
        }

        if (val.compressible === true || val.compressible === false) {
          compressibles[ext] = val.compressible
        }
      })
    })

  const mimeTypeString = `export const mimes = ${JSON.stringify(mimeTypes, null, 2)}`
  const compStringified = JSON.stringify(compressibles, null, 2)
  const compressibleString = `export const compressibles = ${compStringified}`

  const docMimeTypeString = docMimeTypes
    .map(([key, ext]) => `mimes.${key} === '${ext}'`)
    .join('\n\n')

  let docContent = await fs.readFile(
    path.join(process.cwd(), 'bin', './README-template.md'),
    'utf8',
  )

  docContent = docContent.replace('||::mime-db-content::||', docMimeTypeString)

  let jsDocContent = await fs.readFile(
    path.join(process.cwd(), 'bin', './MAGIC-doc-template.mjs'),
    'utf8',
  )

  jsDocContent = jsDocContent.replace('||::mime-db-content::||', docMimeTypeString)

  await Promise.all([
    fs.writeFile(mimeTypeFilePath, mimeTypeString),
    fs.writeFile(compressFilePath, compressibleString),
    fs.writeFile(path.join(process.cwd(), 'README.md'), docContent),
    fs.writeFile(path.join(process.cwd(), 'docsrc', 'pages', 'index.mjs'), jsDocContent),
  ])

  log.success('build done')
}

run()
