import Ora from 'ora'
import webpack from 'webpack'
import webpackConfig from './webpack'
import { pack } from '../config'
import generateThemes from './themes'

const spinner = new Ora({
  text: 'Building lib',
  color: 'green',
  spinner: 'simpleDots'
})

const entries = [
  webpackConfig({
    libraryTarget: 'umd',
    filename: `${pack.name}.min.js`,
    compress: true,
    css: true,
    analyze: true
  }),
  webpackConfig({
    libraryTarget: 'umd',
    filename: `${pack.name}.js`,
    css: true
  }),
  webpackConfig({
    components: true,
    libraryTarget: 'umd',
    compress: true,
    css: true
  })
]

spinner.start()

webpack(entries, (error, stats) => {
  if (error) {
    spinner.fail('ERRORED! Too bad! :(')
    throw error
  }

  spinner.color = 'yellow'
  spinner.text = 'Generating themes'

  generateThemes()

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  spinner.succeed('Vue Material generated with success! \\o/')
})
