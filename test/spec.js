import { deep } from '@magic/test'

import mimedb from 'mime-db'

import mimes from '../src/index.js'
import overwrites from '../bin/overwrites.js'
import additions from '../bin/additions.js'

const tests = Object.entries(mimedb)
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
  info: `addition ${key} exists and is correctly assigned.}`,
}))

export default deep.flatten(tests, additionTests)
