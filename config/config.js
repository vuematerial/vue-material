import { join } from 'path';

export const resolvePath = (directory) => {
  return join(__dirname, '..', directory);
};

export const config = {
  dist: 'dist',
  public: '/',
  resolve: ['.js', '.vue', '.json'],
  alias: {
    'vue-material': resolvePath('src/index.js'),
    core: resolvePath('src/core')
  }
}
