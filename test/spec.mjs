import { deep } from '@magic/test'

import mimedb from 'mime-db'

import mimes from '../src/index.mjs'

import overwrites from '../bin/overwrites.mjs'

const tests = Object.entries(mimedb)
  .filter(([key, val]) => val.extensions && val.extensions.length)
  .map(([key, val]) =>
    val.extensions.map(ext => {
      let m = mimes[ext]
      if (overwrites[ext]) {
        m = overwrites[ext]
      }

      return { fn: mimes[ext], expect: m, info: `${ext} has correct mime type` }
    }),
  )

export default deep.flatten(tests)
