import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import config from '../config';
import baseConfig from './base';

const docsPath = path.join(config.rootPath, config.docsPath);

export default merge(baseConfig, {
  output: {
    path: docsPath,
    publicPath: '',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      scss: ExtractTextPlugin.extract(['css', 'sass'])
    },
    postcss: [
      autoprefixer({
        browsers: ['last 3 versions']
      })
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new CopyWebpackPlugin([
      {
        context: config.assetsPath,
        from: '**/*',
        to: path.join(docsPath, 'assets')
      },
      {
        context: config.docsPath,
        from: 'changelog.html',
        to: docsPath
      },
      {
        context: config.docsPath,
        from: 'versions.json',
        to: docsPath
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.indexPath,
      inject: true,
      minify: {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        preventAttributesEscaping: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        let resource = module.resource;

        if (resource && (/\.js$/).test(resource)) {
          return resource.indexOf(config.nodePath) >= 0;
        }

        return false;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
});
