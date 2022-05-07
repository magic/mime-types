#!/usr/bin/env node

import path from 'path'

import fs from '@magic/fs'
import log from '@magic/log'
import is from '@magic/types'

import overwrites from './overwrites.mjs'
import additions from './additions.mjs'

import { default as mimes } from 'mime-db'

const sortByKey = ([extA], [extB]) => (extA > extB ? 1 : -1)

const mimeTypeFilePath = path.join(process.cwd(), 'src', 'mimes.mjs')
const compressFilePath = path.join(process.cwd(), 'src', 'compressibles.mjs')

const overwriteKeys = Object.keys(overwrites)

const run = async () => {
  const mimeTypes = {}
  const docMimeTypes = []
  const compressibles = {}

  Object.entries(additions).forEach(([key, value]) => {
    if (is.objectNative(value)) {
      mimeTypes[key] = value.value
      compressibles[key] = value.compressible
      docMimeTypes.push([key, value.value])
    } else {
      mimeTypes[key] = value
      docMimeTypes.push([key, value])
    }
  })

  Object.entries(mimes)
    .filter(([_, { extensions = [] }]) => extensions.length)
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

  const sortedDocMimeTypes = docMimeTypes.sort(sortByKey)

  const sortedMimeTypes = Object.fromEntries(Object.entries(mimeTypes).sort(sortByKey))

  const mimeTypeString = `export const mimes = ${JSON.stringify(sortedMimeTypes, null, 2)}`
  const sortedCompressibles = Object.fromEntries(Object.entries(compressibles).sort(sortByKey))
  const compStringified = JSON.stringify(sortedCompressibles, null, 2)
  const compressibleString = `export const compressibles = ${compStringified}`

  const docMimeTypeString = sortedDocMimeTypes
    .map(([key, ext]) => `mimes.${key} === '${ext}'`)
    .join('\n')

  let [docContent, jsDocContent] = await Promise.all([
    fs.readFile(path.join(process.cwd(), 'bin', './README-template.md'), 'utf8'),
    fs.readFile(path.join(process.cwd(), 'bin', './MAGIC-doc-template.mjs'), 'utf8'),
  ])

  docContent = docContent.replace('||::mime-db-content::||', docMimeTypeString)

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
