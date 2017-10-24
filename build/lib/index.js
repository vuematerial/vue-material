import webpack from 'webpack'
import ora from 'ora'
import webpackConfig from './webpack'
import { pack } from '../config'

const spinner = ora({
  text: 'Building...',
  color: 'green'
})

spinner.start()

const entries = [
  webpackConfig({
    filename: `${pack.name}.min.js`,
    libraryTarget: 'umd',
    env: 'production',
    css: true,
    analyze: true
  }),
  webpackConfig({
    filename: `${pack.name}.js`,
    libraryTarget: 'umd',
    env: 'development',
    css: true
  }),
  webpackConfig({
    libraryTarget: 'commonjs2',
    filename: `${pack.name}.common.js`
  }),
  webpackConfig({
    libraryTarget: 'commonjs-module',
    filename: `${pack.name}.esm.js`
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
