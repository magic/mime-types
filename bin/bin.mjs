import path from 'path'

import { cli } from '@magic/cli/src/index.mjs'

import fs from '@magic/fs'

import overwrites from './overwrites.mjs'

const filePath = path.join(process.cwd(), 'src', 'index.mjs')

const args = {
  options: [['--help', '-help', 'help', '--h', '-h']],
  commands: ['build'],
  help: {
    name: 'magic-mime-types',
    header:
      'generates a list of key => values from mime-db. keys are extensions, values are mime/types',
    commands: {
      build: 'build from mime-db to src/index.mjs',
    },
    example: `
production:
src/bin/bin.js build
`,
  },
}

const overwriteKeys = Object.keys(overwrites)

const run = async () => {
  const res = cli(args)

  if (res.cmds.build) {
    const { default: mimes } = await import('mime-db')

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
}

run()
