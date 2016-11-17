import merge from 'webpack-merge';

import prodConfig from './prod-lib';

export default merge(prodConfig, {
  output: {
    filename: '[name].debug.js'
  },
  devtool: 'source-map',
  plugins: []
});
