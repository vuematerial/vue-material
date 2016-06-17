import path from 'path';

let gulp = {
  path: 'gulp',
  scripts: [path.normalize('gulpfile.babel.js/**/*.js')]
};

let src = {
  path: 'src',
  assets: path.normalize('src/assets'),
  files: path.normalize('src/**/*.{txt,xml,html,json,jpg,png,gif,svg,ico}'),
  images: path.normalize('src/**/*.{jpg,png,gif,svg}'),
  imagesFolder: path.normalize('src/assets/images'),
  html: path.normalize('src/**/*.html'),
  scripts: path.normalize('src/assets/scripts/**/*.js'),
  stylesheet: path.normalize('src/assets/**/core.scss'),
  stylesheets: path.normalize('src/assets/**/*.scss')
};

let dest = {
  path: 'dest',
  scripts: path.normalize('dest/assets/scripts/**/*.js'),
  images: path.normalize('dest/**/*.{jpg,png,gif,svg}'),
  imagesFolder: path.normalize('dest/assets/images'),
  stylesheets: path.normalize('dest/assets')
};

export default {
  gulp,
  src,
  dest
};
