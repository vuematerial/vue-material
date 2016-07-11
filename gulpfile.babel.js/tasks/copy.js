import gulp from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  return gulp
    .src(config.src.files)
    .pipe(gulp.dest(config.dest.path));
});
