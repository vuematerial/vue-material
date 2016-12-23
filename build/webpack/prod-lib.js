import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';
import baseConfig from './base';

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
      scss: ExtractTextPlugin.extract(['css', 'sass'])
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
});
