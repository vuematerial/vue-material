import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', () => {
  return del([config.dest.path]);
});
