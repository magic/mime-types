import { deep } from '@magic/test'

import mimedb from 'mime-db'

import mimes from '../src/index.js'

import overwrites from '../bin/overwrites.js'
import additions from '../bin/additions.js'

const mimesMap: Record<string, string> = mimes
const overwritesMap: Record<string, string> = overwrites

interface Test {
  fn: string
  expect: string
  info: string
}

const tests: Test[] = Object.entries(mimedb).flatMap(([, val]) =>
  (val.extensions ?? []).map(ext => {
    let m = mimesMap[ext]
    if (overwritesMap[ext]) {
      m = overwritesMap[ext]
    }

    return { fn: mimesMap[ext], expect: m, info: `${ext} has correct mime type` }
  }),
)

const additionTests: Test[] = Object.entries(additions).map(([key, val]) => ({
  fn: mimesMap[key],
  expect: val.value,
  info: `addition ${key} exists and is correctly assigned.`,
}))

export default deep.flatten(tests, additionTests)
