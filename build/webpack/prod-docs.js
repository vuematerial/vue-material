import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeJsPlugin from 'optimize-js-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import mediaPacker from 'css-mqpacker';
import config from '../config';
import baseConfig from './base';

const docsPath = path.join(config.rootPath, config.docsPath);

const conf = merge(baseConfig, {
  output: {
    path: docsPath,
    publicPath: '',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          },
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions', 'not IE < 10']
            }),
            mediaPacker()
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: true, // warn about potentially dangerous optimizations/code
        sequences: true,  // join consecutive statemets with the “comma operator”
        properties: true,  // optimize property access: a["foo"] → a.foo
        dead_code: true,  // discard unreachable code
        drop_debugger: true,  // discard “debugger” statements
        unsafe: false, // some unsafe optimizations (see below)
        conditionals: true,  // optimize if-s and conditional expressions
        comparisons: true,  // optimize comparisons
        evaluate: true,  // evaluate constant expressions
        booleans: true,  // optimize boolean expressions
        loops: true,  // optimize loops
        unused: true,  // drop unused variables/functions
        hoist_funs: true,  // hoist function declarations
        hoist_vars: true, // hoist variable declarations
        if_return: true,  // optimize if-s followed by return/continue
        join_vars: true,  // join var declarations
        cascade: true,  // try to cascade `right` into `left` in sequences
        side_effects: true  // drop side-effect-free statements
      },
      output: {
        comments: false
      },
      sourceMap: false
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
        useShortDoctype: true,
        html5: true,
        decodeEntities: true,
        removeTagWhitespace: true,
        preserveLineBreaks: false,
        sortAttributes: true
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
    new OptimizeCssAssetsPlugin({
      canPrint: false
    })
  ]
});

export default conf;
