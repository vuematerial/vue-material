import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import baseWebpackConfig from './base';
import config from '../config';

Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./build/server/client', ...[baseWebpackConfig.entry[name]]];
});

export default merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.WatchIgnorePlugin([config.nodePath]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'docs/index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
