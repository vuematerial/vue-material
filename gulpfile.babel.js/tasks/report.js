import gulp from 'gulp';
import path from 'path';
import size from 'gulp-size';
import config from '../config';

gulp.task('report', () => {
  return gulp
    .src(path.normalize(config.dest.path + '/**/*'))
    .pipe(size({
      title: 'Size of'
    }));
});
