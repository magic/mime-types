#!/usr/bin/env node

import path from 'path'

import cli from '@magic/cli'
import fs from '@magic/fs'
import deep from '@magic/deep'

import overwrites from './overwrites.mjs'

const mimeTypeFilePath = path.join(process.cwd(), 'src', 'mimes.mjs')
const compressFilePath = path.join(process.cwd(), 'src', 'compressibles.mjs')

const args = {
  options: [['--help', '-help', 'help', '--h', '-h']],
  commands: ['build', 'docs'],
  help: {
    name: 'magic-mime-types',
    header: 'mime-db, sorted by file extension.',
    commands: {
      docs: 'build README.md and the html documentation from mime-db data. will also change src.',
      build: 'build from mime-db to src',
    },
    example: `
# build src/ index.mjs from mime- db:
./bin/bin.mjs build

# recreate README.md and example / pages / index.mjs
./bin/bin.mjs docs

# create array of compressible extensions.
./bin/bin.mjs compressible

# run all tasks
./bin/bin.mjs all
  `,
  },
}

import { default as mimes } from 'mime-db'

const overwriteKeys = Object.keys(overwrites)

const run = async () => {
  const { commands } = cli(args)
  const mimeTypes = {}
  const compressibles = {}

  if (commands.build) {
    Object.entries(mimes)
      .filter(([key, val]) => val.extensions?.length)
      .forEach(([key, val]) => {
        val.extensions.forEach(ext => {
          if (overwriteKeys.includes(ext)) {
            mimeTypes[ext] = overwrites[ext]
          } else {
            mimeTypes[ext] = key
          }

          if (val.compressible === true || val.compressible === false) {
            compressibles[ext] = val.compressible
          }
        })
      })

    await Promise.all([
      fs.writeFile(mimeTypeFilePath, `export const mimes = ${JSON.stringify(mimeTypes, null, 2)}`),
      fs.writeFile(
        compressFilePath,
        `export const compressibles = ${JSON.stringify(compressibles, null, 2)}`,
      ),
    ])
  }

  if (commands.docs) {
    let keyValues = ''

    Object.entries(mimes)
      .filter(([key, val]) => val.extensions && val.extensions.length)
      .forEach(([key, val]) => {
        val.extensions.forEach(ext => {
          if (overwriteKeys.includes(ext)) {
            keyValues += `
console.log(mimes.${ext})
// logs ${overwrites[ext]}
`
          } else {
            keyValues += `
console.log(mimes.${ext})
// logs ${key}
`
          }
        })
      })

    let docContent = await fs.readFile(
      path.join(process.cwd(), 'bin', './README-template.md'),
      'utf8',
    )

    docContent = docContent.replace('||::mime-db-content::||', keyValues)
    await fs.writeFile(path.join(process.cwd(), 'README.md'), docContent)

    let jsDocContent = await fs.readFile(
      path.join(process.cwd(), 'bin', './MAGIC-doc-template.mjs'),
      'utf8',
    )

    jsDocContent = jsDocContent.replace('||::mime-db-content::||', keyValues)

    await fs.writeFile(path.join(process.cwd(), 'docsrc', 'pages', 'index.mjs'), jsDocContent)
  }
}

run()
