import { join } from 'path'
import packageJson from '../package.json'

export const resolvePath = (directory) => {
  return join(__dirname, '..', directory)
}

export const config = {
  dist: 'dist',
  public: '/',
  index: 'docs/index.html',
  assets: 'docs/src/assets',
  server: {
    port: process.env.PORT || '8080'
  },
  resolve: ['.js', '.vue', '.json'],
  alias: {
    'vue-material': resolvePath('src/index.js'),
    core: resolvePath('src/core')
  }
}

export const pack = packageJson
