import runSequence from 'run-sequence';
import gulp from 'gulp';
import './tasks/clean';
import './tasks/copy';
import './tasks/browserify';
import './tasks/sass';
import './tasks/eslint';
import './tasks/watch';
import './tasks/uglify';
import './tasks/report';

gulp.task('default', () => {
  runSequence(
    'clean',
    [
      'browserify',
      'eslint-all',
      'sass',
      'copy'
    ],
    'watch'
  );
});

gulp.task('build', () => {
  runSequence(
    'clean',
    [
      'copy',
      'browserify-build',
      'sass-build'
    ],
    'uglify',
    'report'
  );
});
