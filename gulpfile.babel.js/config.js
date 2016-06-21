import path from 'path';

let gulp = {
  path: 'gulp',
  scripts: [path.normalize('gulpfile.babel.js/**/*.js')]
};

let src = {
  path: 'src',
  files: path.normalize('src/**/*.{html,json}'),
  html: path.normalize('src/**/*.html'),
  components: path.normalize('src/components/**/*.{vue,js}'),
  stylesheet: path.normalize('src/**/core.scss'),
  stylesheets: path.normalize('src/**/*.scss')
};

let dest = {
  path: 'dest',
  components: path.normalize('dest/components/**/*.js'),
  stylesheets: path.normalize('dest')
};

let demo = {
  path: 'demo'
};

export default {
  gulp,
  src,
  dest,
  demo
};
