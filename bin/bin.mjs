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

/** @type {(str: string) => boolean} */
export const startsWithNumber = str => /^[0-9]/.test(str) && `${parseInt(str)}` !== str

/** @type {(str: string) => boolean} */
export const isStringObjectKey = str => startsWithNumber(str) || str.includes('-')

export const isNumericKey = str => /^[0-9]/.test(str) || str.includes('-')

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

  const sortedMimeTypes = Object.entries(mimeTypes).sort(sortByKey)

  const mimeTypeString = `
export const mimes = /** @type {const} */ ({
  ${sortedMimeTypes.map(([k, v]) => `  ${isStringObjectKey(k) ? `'${k}'` : k}: '${v}'`).join(',\n')}
})
`
  const sortedCompressibles = Object.entries(compressibles).sort(sortByKey)

  const compressibleString = `
export const compressibles = /** @type {const} */ ({
  ${sortedCompressibles.map(([k, v]) => `  ${isStringObjectKey(k) ? `'${k}'` : k}: ${v}`).join(',\n')}
})
`

  const docMimeTypeString = sortedDocMimeTypes
    .map(([key, ext]) => `mimes${isNumericKey(key) ? `['${key}']` : `.${key}`} === '${ext}'`)
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
