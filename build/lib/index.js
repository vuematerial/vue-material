/* import { existsSync, mkdirSync } from 'fs'
import entries from './entries'
import build from './bundle'
import { pack } from '../config'

if (!existsSync('dist')) {
  mkdirSync('dist')
}

build(entries) */

import webpack from 'webpack'
import ora from 'ora'
import webpackConfig from './webpack'
import { pack } from '../config'

const spinner = ora({
  text: 'Building...',
  color: 'green'
})

spinner.start()

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const entries = [
  webpackConfig({
    filename: `${pack.name}.min.js`,
    libraryTarget: 'umd',
    env: 'production',
    css: true,
    port: getRandomInt(8000, 8999)
  }),
  webpackConfig({
    filename: `${pack.name}.js`,
    libraryTarget: 'umd',
    env: 'development',
    css: true,
    port: getRandomInt(8000, 8999)
  }),
  webpackConfig({
    libraryTarget: 'commonjs2',
    filename: `${pack.name}.common.js`,
    port: getRandomInt(8000, 8999)
  }),
  webpackConfig({
    libraryTarget: 'commonjs-module',
    filename: `${pack.name}.esm.js`,
    port: getRandomInt(8000, 8999)
  })
]

webpack(entries, (error, stats) => {
  if (error) {
    throw error
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  spinner.stop()
})
