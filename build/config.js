import { join } from 'path'
import packageJson from '../package.json'

export const resolvePath = (...args) => {
  const path = [__dirname, '..', ...args]

  return join.apply(null, path)
}

export const config = {
  dist: 'dist',
  public: '/',
  index: 'docs/index.html',
  assets: 'docs/assets',
  server: {
    port: process.env.PORT || '8080'
  },
  resolve: ['.vue', '.scss', '.js', '.json'],
  alias: {
    'vue-material': resolvePath('src'),
    theme: resolvePath('src/theme'),
    base: resolvePath('src/base'),
    core: resolvePath('src/core'),
    components: resolvePath('src/components'),
    store: resolvePath('docs/app/store'),
    'docs-mixins': resolvePath('docs/app/mixins')
  }
}

export const pack = packageJson
