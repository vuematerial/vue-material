import gulp from 'gulp';
import util from 'gulp-util';
import uglify from 'gulp-uglify';
import path from 'path';
import watchify from 'watchify';
import babelify from 'babelify';
import envify from 'envify/custom';
import vueify from 'vueify';
import prettyTime from 'pretty-hrtime';
import browserify from 'browserify';
import uglifyify from 'uglifyify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import config from '../config';
import browserSync from './browser-sync';

let app = 'main.js';
let entry = path.normalize(config.src.path + '/components/' + app);

gulp.task('browserify', () => {
  let b = browserify({
    cache: {},
    packageCache: {},
    debug: true,
    detectGlobals: false,
    extensions: ['.js', '.json', '.vue'],
    ignoreWatch: true,
    noparse: ['node_modules/**/*.js'],
    entries: entry
  });

  let bundle = () => {
    let bundleTimer = process.hrtime();

    return b
      .plugin(watchify)
      .transform(envify({
        NODE_ENV: 'development'
      }))
      .transform(vueify)
      .transform(babelify.configure())
      .bundle()
      .on('error', (error) => {
        let dirname = path.join(__dirname, '..', '..', 'src') + '/';

        if (error.fileName) {
          util.log(util.colors.red(error.name)
            + ': ' + util.colors.yellow(error.fileName.replace(dirname, ''))
            + ': ' + 'Line ' + util.colors.magenta(error.lineNumber)
            + ' & ' + 'Column ' + util.colors.magenta(error.columnNumber || error.column)
            + ': ' + util.colors.blue(error.description));
        } else {
          util.log(util.colors.red(error.name) + ': ' + util.colors.yellow(error.message.replace(dirname, '')));
        }
      })
      .pipe(source(app))
      .pipe(buffer())
      .pipe(gulp.dest(path.normalize(config.dest.path + '/components')))
      .pipe(browserSync.stream())
      .on('finish', () => {
        util.log('Browserify', util.colors.cyan(app), 'after', util.colors.magenta(prettyTime(process.hrtime(bundleTimer))));
      });
  };

  b.on('update', bundle);

  return bundle();
});

gulp.task('browserify-build', () => {
  let bundleTimer = process.hrtime();

  return browserify(entry)
    .transform(envify({
      NODE_ENV: 'development'
    }))
    .transform(vueify)
    .transform(babelify.configure())
    .transform(uglifyify)
    .bundle()
    .pipe(source(app))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(path.normalize(config.dest.path + '/components')))
    .on('finish', () => {
      util.log('Browserify', util.colors.cyan(app), 'after', util.colors.magenta(prettyTime(process.hrtime(bundleTimer))));
    });
});
