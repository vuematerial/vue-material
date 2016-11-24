import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import prodConfig from './prod-lib';

const devConfig = merge(prodConfig, {
  output: {
    filename: '[name].debug.js'
  },
  devtool: 'source-map',
  plugins: []
});

devConfig.plugins.push(new ExtractTextPlugin('[name].css'));

export default devConfig;
