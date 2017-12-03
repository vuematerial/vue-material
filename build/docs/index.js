import webpack from 'webpack'
import Ora from 'ora'
import webpackConfig from './webpack'

const spinner = new Ora({
  text: 'Building documentation',
  color: 'green',
  spinner: 'simpleDots'
})

spinner.start()

webpack(webpackConfig, (error, stats) => {
  if (error) {
    spinner.fail('ERRORED! Too bad! :(')
    throw error
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  spinner.succeed('Vue Material documentation generated with success! \\o/')
})
