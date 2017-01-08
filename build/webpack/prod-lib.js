import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import config from '../config';
import baseConfig from './base';

const version = process.env.VERSION || require('../../package.json').version;

function getDirectories(src) {
  return fs.readdirSync(src).filter((file) => {
    return fs.statSync(path.join(src, file)).isDirectory();
  });
}

const componentsPath = 'src/components';
const components = getDirectories(path.resolve(__dirname, '../../', componentsPath));

baseConfig.entry = {
  'vue-material': ['./src/index.js'],
  'components/mdCore/index': ['./src/core']
};

components.forEach((component) => {
  baseConfig.entry[path.join('components', component, 'index')] = ['./' + path.join(componentsPath, component)];
});

export default merge(baseConfig, {
  output: {
    path: config.rootPath,
    filename: '[name].js',
    library: 'VueMaterial',
    libraryTarget: 'umd'
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      scss: ExtractTextPlugin.extract('css!sass')
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.IgnorePlugin(/vue/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new webpack.BannerPlugin(
`/*!
 * Vue Material v${version}
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */`
    , {
      raw: true,
      entryOnly: true
    }),
    new ExtractTextPlugin('[name].css')
  ]
});
