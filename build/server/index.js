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
const devMiddlewareInstance = devMiddleware(compiler, {
  publicPath: config.publicPath,
  index: config.indexPath,
  stats: {
    colors: true,
    chunks: false
  }
});

const hotMiddlewareInstance = hotMiddleware(compiler);

compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, done) => {
    hotMiddlewareInstance.publish({ action: 'reload' });
    done();
  });
});

app.use(historyApiFallback());
app.use(devMiddlewareInstance);
app.use(hotMiddlewareInstance);
app.use('/assets', express.static(path.join(__dirname, '..', '..', config.assetsPath)));

export default app.listen(config.server.port, (error) => {
  let uri = 'http://localhost:' + config.server.port;

  if (error) {
    console.log(chalk.red(error));

    return;
  }

  console.log(chalk.blue('Listening at ' + uri + '\n'));
});
