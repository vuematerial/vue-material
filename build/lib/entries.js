import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import alias from 'rollup-plugin-alias'
import banner from './banner'
import { config, pack } from '../config.js'

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

function generateConfig ({ dest, format, env, css }) {
  const entryConfig = {
    entry,
    dest,
    format,
    banner,
    moduleName,
    plugins: [
      alias({
        ...config.alias,
        resolve: config.resolve
      }),
      buble()
    ]
  }

  const replacePluginOptions = { '__VERSION__': pack.version }
  let vueConfig = {
    css
  }

  if (env) {
    replacePluginOptions['process.env.NODE_ENV'] = JSON.stringify(env)

    if (env === 'production') {
      vueConfig.scss = {
        outputStyle: 'compressed'
      }
    }
  }

  entryConfig.plugins.unshift(vue(vueConfig))
  entryConfig.plugins.push(replace(replacePluginOptions))

  return entryConfig
}

export default Object.keys(entries).map(name => generateConfig(entries[name]))
