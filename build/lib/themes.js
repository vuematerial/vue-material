import sass from 'node-sass'
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { resolvePath } from '../config'

function getThemeFiles (source) {
  return readdirSync(source).filter(file => {
    return !statSync(join(source, file)).isDirectory()
  })
}

const themeSrcDir = 'src/theme/prebuilt'
const themeDistDir = 'dist/theme'
const themeFiles = getThemeFiles(themeSrcDir)

export default () => {
  themeFiles.forEach(theme => {
    const themePath = resolvePath(join(themeSrcDir, theme))
    const themeContents = readFileSync(themePath, 'utf8')
    const themeDest = resolvePath(themeDistDir)
    const { css } = sass.renderSync({
      data: themeContents,
      outFile: themeDest,
      includePaths: [resolvePath(themeSrcDir)],
      outputStyle: 'compressed'
    })

    writeFileSync(join(themeDest, theme.replace('.scss', '.css')), css, 'utf8')
  })
}
