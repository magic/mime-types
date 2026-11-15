import { deep } from '@magic/test'

import mimedb from 'mime-db'

// Type declaration for mime-db entries with extensions
interface MimeDbEntry {
  extensions?: string[]
  source?: string
  compressible?: boolean
  charset?: string
  filename?: string
  description?: string
  [key: string]: unknown
}

// Type declaration for the full mime-db map
interface MimeDbMap {
  [key: string]: MimeDbEntry
}

// Type assertion for the imported module
const mimedbTyped: MimeDbMap = mimedb as unknown as MimeDbMap

import mimes from '../src/index.js'

import overwrites from '../bin/overwrites.js'
import additions from '../bin/additions.js'

const tests = Object.entries(mimedbTyped)
  .filter(([_, val]) => val.extensions && val.extensions.length)
  .map(([_, val]) =>
    val.extensions.map(ext => {
      let m = mimes[ext]
      if (overwrites[ext]) {
        m = overwrites[ext]
      }

      return { fn: mimes[ext], expect: m, info: `${ext} has correct mime type` }
    }),
  )

const additionTests = Object.entries(additions).map(([key, val]) => ({
  fn: mimes[key] === val || mimes[key] === val.value,
  expect: true,
  info: `addition ${key} exists and is correctly assigned.}`,
}))

export default deep.flatten(tests, additionTests)
