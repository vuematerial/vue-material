import express from 'express'
import chalk from 'chalk'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import historyApiFallback from 'connect-history-api-fallback'
import { config, resolvePath } from '../config'
import webpackConfig from './webpack'

const app = express()
const compiler = webpack(webpackConfig)
const devMiddlewareInstance = devMiddleware(compiler, {
  publicPath: config.public,
  index: config.index,
  quiet: true,
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 10,
    poll: 10
  }
})

const hotMiddlewareInstance = hotMiddleware(compiler, {
  log: false
})

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
    hotMiddlewareInstance.publish({ action: 'reload' })
    done()
  })
})

app.use(historyApiFallback())
app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)
app.use('/', express.static(resolvePath(config.docsRoot)))
app.use('/assets', express.static(resolvePath(config.assets)))

devMiddlewareInstance.waitUntilValid(() => {
  let uri = 'http://localhost:' + config.server.port

  console.log(chalk.blue('> Listening at ' + uri + '\n'))
})

export default app.listen(config.server.port, (error) => {
  if (error) {
    console.log(chalk.red(error))
  }
})
