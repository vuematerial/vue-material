import path from 'path';

const config = {
  projectRoot: path.join(__dirname, '../'),
  rootPath: path.join(__dirname, '../dist'),
  nodePath: path.join(__dirname, '../node_modules'),
  srcPath: 'src',
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
