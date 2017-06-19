import path from 'path';
import express from 'express';
import chalk from 'chalk';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import config from '../config';
import webpackConfig from '../webpack/dev';

const app = express();
const compiler = webpack(webpackConfig);
const rootPath = path.join(__dirname, '..', '..');
const devMiddlewareInstance = devMiddleware(compiler, {
  quiet: true,
  publicPath: config.publicPath,
  index: config.indexPath
});

const hotMiddlewareInstance = hotMiddleware(compiler, {
  log() { }
});

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
    hotMiddlewareInstance.publish({ action: 'reload' });
    done();
  });
});

app.use(historyApiFallback());
app.use(devMiddlewareInstance);
app.use(hotMiddlewareInstance);
app.use('/', express.static(path.join(rootPath, config.docsPath)));
app.use('/assets', express.static(path.join(rootPath, config.assetsPath)));

devMiddlewareInstance.waitUntilValid(() => {
  let uri = 'http://localhost:' + config.server.port;

  console.log(chalk.blue('> Listening at ' + uri + '\n'));
});

export default app.listen(config.server.port, (error) => {
  if (error) {
    console.log(chalk.red(error));

    return;
  }
});
