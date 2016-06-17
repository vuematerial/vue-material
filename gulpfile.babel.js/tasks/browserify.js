import gulp from 'gulp';
import util from 'gulp-util';
import uglify from 'gulp-uglify';
import path from 'path';
import watchify from 'watchify';
import babelify from 'babelify';
import envify from 'envify/custom';
import vueify from 'vueify';
import xtend from 'xtend';
import prettyTime from 'pretty-hrtime';
import browserify from 'browserify';
import uglifyify from 'uglifyify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import config from '../config';
import browserSync from './browser-sync';

let app = 'main.js';
let entry = path.normalize(config.src.path + '/assets/scripts/' + app);

gulp.task('browserify', () => {
  let b = watchify(browserify(xtend(watchify.args, {
    debug: true,
    watch: true,
    fast: true,
    fullPaths: true,
    keepAlive: true,
    detectGlobals: false,
    ignoreWatch: true,
    noparse: ['node_modules/**/*.js'],
    entries: entry,
    transform: [
      envify({
        NODE_ENV: 'development'
      }),
      vueify,
      babelify.configure()
    ]
  })));

  let bundle = () => {
    let bundleTimer = process.hrtime();

    return b.bundle()
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
      .pipe(gulp.dest(path.normalize(config.dest.path + '/assets/scripts')))
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
    .pipe(gulp.dest(path.normalize(config.dest.path + '/assets/scripts')))
    .on('finish', () => {
      util.log('Browserify', util.colors.cyan(app), 'after', util.colors.magenta(prettyTime(process.hrtime(bundleTimer))));
    });
});
