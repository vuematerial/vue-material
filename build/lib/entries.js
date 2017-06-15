import { writeFileSync, readFileSync } from 'fs'
import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import magicImporter from 'node-sass-magic-importer'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import mediaPacker from 'css-mqpacker'
import cssnano from 'cssnano'
import banner from './banner'
import { config, resolvePath, pack } from '../config.js'

const entry = 'src/index.js'

function toUpperCase (_, c) {
  return c ? c.toUpperCase() : ''
}

function classify (str) {
  return str.replace(/(?:^|[-_/])(\w)/g, toUpperCase)
}
const moduleName = classify(pack.name)

const entries = {
  commonjs: {
    dest: `dist/${pack.name}.common.js`,
    format: 'cjs',
    css: false
  },
  esm: {
    dest: `dist/${pack.name}.esm.js`,
    format: 'es',
    css: false
  },
  production: {
    dest: `dist/${pack.name}.min.js`,
    format: 'umd',
    env: 'production',
    moduleName
  },
  development: {
    dest: `dist/${pack.name}.js`,
    format: 'umd',
    env: 'development',
    moduleName
  }
}


const scssConfig = {
  importer: magicImporter
}

function generateConfig ({ dest, format, env, css }) {
  const entryConfig = {
    entry,
    dest,
    format,
    banner,
    moduleName,
    external: [
      'vue'
    ],
    globals: {
      vue: 'Vue'
    },
    plugins: [
      alias({
        ...config.alias,
        resolve: config.resolve
      }),
      resolve({
        jsnext: true,
        main: true,
        extensions: config.resolve
      }),
      commonjs(),
      nodeGlobals(),
      scss(scssConfig),
      vue({
        scss: scssConfig,
        async css (style) {
          if (style && env === 'production') {
            const styles = await postcss([autoprefixer, mediaPacker, cssnano]).process(style)

            styles.warnings().forEach(warn => console.warn(warn.toString()))

            writeFileSync(resolvePath(dest.replace('js', 'css')), styles.css)
          }
        }
      }),
      postcss({
        plugins: [
          autoprefixer(),
          mediaPacker(),
          cssnano()
        ]
      }),
      buble({
        objectAssign: 'Object.assign',
        exclude: 'node_modules/**'
      })
    ]
  }

  const replacePluginOptions = { '__VERSION__': pack.version }

  if (env) {
    replacePluginOptions['process.env.NODE_ENV'] = JSON.stringify(env)
    entryConfig.plugins.push(replace(replacePluginOptions))
  }

  return entryConfig
}

export default Object.keys(entries).map(name => generateConfig(entries[name]))
