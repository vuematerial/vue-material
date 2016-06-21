import gulp from 'gulp';
import eslint from 'gulp-eslint';
import changed from 'gulp-changed-in-place';
import config from '../config';

gulp.task('eslint-all', () => {
  return gulp
    .src(config.gulp.scripts.concat(config.src.components))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('eslint-gulp', () => {
  return gulp
    .src(config.gulp.components)
    .pipe(changed())
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('eslint', () => {
  return gulp
    .src(config.src.components)
    .pipe(changed())
    .pipe(eslint())
    .pipe(eslint.format());
});
