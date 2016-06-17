import gulp from 'gulp';
import sass from 'gulp-sass';
import cssImport from 'gulp-import-css';
import moduleImporter from 'sass-module-importer';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from './browser-sync';
import config from '../config';

gulp.task('sass', () => {
  return gulp
    .src(config.src.stylesheet)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        importer: moduleImporter(),
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(cssImport())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest.stylesheets))
    .pipe(browserSync.stream());
});

gulp.task('sass-build', () => {
  return gulp
    .src(config.src.stylesheet)
    .pipe(
      sass({
        importer: moduleImporter()
      }).on('error', sass.logError)
    )
    .pipe(cssImport())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      flexbox: 'no-2009',
      cascade: false
    }))
    .pipe(cssnano({ discardComments: {removeAll: true} }))
    .pipe(gulp.dest(config.dest.stylesheets));
});
