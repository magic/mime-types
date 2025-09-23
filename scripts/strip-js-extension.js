import path from 'node:path'
import fs from '@magic/fs'

const main = async () => {
  const cwd = process.cwd()
  const filePath = path.join(cwd, 'types')

  const files = await fs.getFiles(filePath)

  console.log('replacing .js from imports')

  await Promise.all(
    files.map(async file => {
      console.log('replacing in', file)
      const dts = await fs.readFile(file, 'utf8')
      await fs.writeFile(file, dts.replace(/\.js(['"])/g, '$1')) // remove .js from imports
    }),
  )

  console.log('finished replacing .js from imports')
}

main()
