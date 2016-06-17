import gulp from 'gulp';
import watch from 'gulp-watch';
import runSequence from 'run-sequence';
import config from '../config';
import browserSync from './browser-sync';

let watchConfig = {
  verbose: true
};

gulp.task('watch', ['browserSync'], () => {
  watch(['.eslintrc', '.eslintignore'], watchConfig, () => {
    runSequence('eslint-all');
  });

  watch(config.gulp.scripts, watchConfig, () => {
    runSequence('eslint-gulp');
  });

  watch(config.src.scripts, watchConfig, () => {
    runSequence('eslint');
  });

  watch(config.src.stylesheets, watchConfig, () => {
    runSequence('sass');
  });

  watch(config.src.files, watchConfig, () => {
    runSequence('copy', browserSync.reload);
  });
});
