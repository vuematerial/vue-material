import path from 'path';

const config = {
  projectRoot: path.resolve(__dirname, '../'),
  rootPath: path.resolve(__dirname, '../dist'),
  nodePath: path.resolve(__dirname, '../../node_modules'),
  docsPath: 'docs',
  indexPath: 'docs/index.html',
  publicPath: '/',
  assetsPath: 'docs/src/assets'
};

let dev = {
  server: {
    port: process.env.PORT || '8080'
  },
  env: {
    NODE_ENV: '"development"'
  }
};

let prod = {
  env: {
    NODE_ENV: '"production"'
  }
};

if (config.env === 'production') {
  Object.assign(config, prod);
} else {
  Object.assign(config, dev);
}

export default config;
