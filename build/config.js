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
  resolve: ['.vue', '.js', '.json'],
  alias: {
    'vue-material': resolvePath('src'),
    store: resolvePath('docs/app/store'),
    'docs-mixins': resolvePath('docs/app/mixins'),
    theme: resolvePath('src/theme'),
    base: resolvePath('src/base'),
    core: resolvePath('src/core'),
    components: resolvePath('src/components')
  }
}

export const pack = packageJson
