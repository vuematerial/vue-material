import webpack from 'webpack'
import ora from 'ora'
import webpackConfig from './webpack'
import { pack } from '../config'

const spinner = ora({
  text: 'Building lib...',
  color: 'green'
})

spinner.start()

const entries = [
  webpackConfig({
    libraryTarget: 'window',
    filename: `${pack.name}.min.js`,
    compress: true,
    css: true,
    analyze: true
  }),
  webpackConfig({
    libraryTarget: 'commonjs2',
    filename: `${pack.name}.common.js`
  }),
  webpackConfig({
    libraryTarget: 'commonjs-module',
    filename: `${pack.name}.esm.js`
  }),
  webpackConfig({
    libraryTarget: 'umd',
    compress: true,
    css: true
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
