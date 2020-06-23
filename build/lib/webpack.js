/* eslint-disable complexity */

import webpack from 'webpack'
import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import merge from 'webpack-merge'
import autoprefixer from 'autoprefixer'
import mediaPacker from 'css-mqpacker'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { config, getRandomInt, pack, resolvePath } from '../config'
import banner from './banner'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import VueLoaderPlugin from "vue-loader/lib/plugin"

function toUpperCase (_, c) {
  return c ? c.toUpperCase() : ''
}

function classify (str) {
  return str.replace(/(?:^|[-_/])(\w)/g, toUpperCase)
}

function getDirectories (src) {
  return readdirSync(src).filter(file => {
    return statSync(join(src, file)).isDirectory()
  })
}

function setComponentsConfig (entries, output) {
  entries = {
    'components/index': [`./${componentsPath}`]
  }

  output.filename = '[name].js'

  delete output.library

  componentList.forEach(component => {
    const isSharable = existsSync(resolvePath(componentsPath, component, 'index.js'))

    if (isSharable) {
      entries[join('components', component, 'index')] = [`./${join(componentsPath, component)}/index`]
    }
  })

  return { entries, output }
}

function getCopyPaths () {
  let copyPaths = [
    {
      context: resolvePath(basePath),
      from: '**/theme.scss',
      to: resolvePath('dist/base'),
      noErrorOnMissing: true,
    },
    {
      context: resolvePath(themePath),
      from: '**/*.scss',
      to: resolvePath('dist/theme'),
      noErrorOnMissing: true,
    }
  ]

  componentList.forEach(component => {
    const isSharable = existsSync(resolvePath(componentsPath, component, 'index.js'))

    if (isSharable) {
      copyPaths.push({
        context: resolvePath(componentsPath, component),
        from: '**/theme.scss',
        to: resolvePath(`dist/components/${component}/theme.scss`),
        toType: 'file',
        noErrorOnMissing: true,
      })
    }
  })

  return copyPaths
}

function getExtractedCSSName ({ filename }) {
  if (filename) {
    return filename.replace('js', 'css')
  }

  return '[name].css'
}

const moduleName = classify(pack.name)
const componentsPath = 'src/components'
const themePath = 'src/theme'
const basePath = 'src/base'
const componentList = getDirectories(resolvePath(componentsPath))

export default entry => {
  let entries = {
    [pack.name]: './src/index'
  }

  let output = {
    filename: entry.filename,
    path: resolvePath(config.dist),
    library: moduleName,
    libraryTarget: entry.libraryTarget
  }

  if (entry.components) {
    const config = setComponentsConfig(entries, output)

    entries = config.entries
    output = config.output
  }

  let webpackConfig = {
    mode: 'production',
    output,
    entry: entries,
    resolve: {
      extensions: config.resolve,
      alias: {
        ...config.alias,
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs2: 'vue',
        amd: 'vue',
        commonjs: 'vue'
      }
    },
    module: {
      noParse: /es6-promise\.js$/,
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              }
            }
          ],
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'vue-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  autoprefixer(),
                  mediaPacker(),
                ],
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  autoprefixer(),
                  mediaPacker(),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin({
        canPrint: false
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false
      }),
    ],

  }

  if (entry.compress) {
    webpackConfig = merge({
      optimization: {
        minimize: true,
        minimizer: [
          new TerserWebpackPlugin({
            terserOptions: {
              booleans: true,
              cascade: true,
              comparisons: true,
              conditionals: true,
              dead_code: true,
              drop_debugger: true,
              evaluate: true,
              hoist_funs: true,
              hoist_vars: true,
              if_return: true,
              join_vars: true,
              loops: true,
              properties: true,
              screw_ie8: true,
              sequences: true,
              side_effects: true,
              unsafe: true,
              unused: true,
              warnings: false,
              output: {
                comments: false,
              },
            },
            sourceMap: false,
          })
        ],
      }
    }, webpackConfig)
  }

  webpackConfig = merge(webpackConfig, {
    plugins: [
      new webpack.BannerPlugin({
        banner: banner,
        raw: true,
        entryOnly: true
      }),
    ]
  })

  if (entry.analyze && process.argv.includes('--analyze')) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin({
      analyzerPort: getRandomInt(8000, 8999)
    }))
  }

  if (entry.components) {
    webpackConfig.plugins.push(new CopyWebpackPlugin({ patterns: getCopyPaths() }))
  }

  return webpackConfig
}
