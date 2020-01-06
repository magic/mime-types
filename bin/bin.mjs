#!/usr/bin/env node

import path from 'path'

import cli from '@magic/cli'
import fs from '@magic/fs'

import overwrites from './overwrites.mjs'

const filePath = path.join(process.cwd(), 'src', 'index.mjs')

const args = {
  options: [['--help', '-help', 'help', '--h', '-h']],
  commands: ['build', 'docs'],
  help: {
    name: 'magic-mime-types',
    header:
      'generates a list of key => values from mime-db. keys are extensions, values are mime/types',
    commands: {
      docs: 'build README.md and the html documentation from mime-db data',
      build: 'build from mime-db to src/index.mjs',
    },
    example: `
# build src/index.mjs from mime-db:
./bin/bin.mjs build

# recreate README.md and example/pages/index.mjs
bin/bin.mjs docs
`,
  },
}

import { default as mimes } from 'mime-db'

const overwriteKeys = Object.keys(overwrites)

const run = async () => {
  const { commands } = cli(args)

  if (commands.build) {
    let keyValues = `export default {\n`

    Object.entries(mimes)
      .filter(([key, val]) => val.extensions && val.extensions.length)
      .forEach(([key, val]) => {
        val.extensions.forEach(ext => {
          if (overwriteKeys.includes(ext)) {
            keyValues += `  '${ext}': '${overwrites[ext]}',\n`
          } else {
            keyValues += `  '${ext}': '${key}',\n`
          }
        })
      })

    keyValues += '}\n'

    await fs.writeFile(filePath, keyValues)
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
