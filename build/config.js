import { join } from 'path'
import packageJson from '../package.json'

export const resolvePath = (...args) => {
  const path = [__dirname, '..', ...args]

  return join.apply(null, path)
}

export const getRandomInt = (min, max) => {
  const minNotAlowed = 8080
  const maxNotAlowed = 8090
  const generated = Math.floor(Math.random() * (max - min + 1)) + min

  if (generated >= minNotAlowed && generated <= maxNotAlowed) {
    return getRandomInt(min, max)
  }

  return generated
}

export const config = {
  dist: 'dist',
  public: '/',
  index: 'docs/index.html',
  assets: 'docs/assets',
  docs: 'docs',
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
    docs: resolvePath('docs'),
    store: resolvePath('docs/app/store'),
    template: resolvePath('docs/app/template'),
    'docs-mixins': resolvePath('docs/app/mixins')
  }
}

export const pack = packageJson
