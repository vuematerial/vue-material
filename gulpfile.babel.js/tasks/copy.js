import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

gulp.task('copy', () => {
  return gulp
    .src(config.src.files)
    .pipe(changed(config.dest.path))
    .pipe(gulp.dest(config.dest.path));
});
