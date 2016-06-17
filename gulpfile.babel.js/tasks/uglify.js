import gulp from 'gulp';
import path from 'path';
import uglify from 'gulp-uglify';
import config from '../config';

gulp.task('uglify', () => {
  return gulp.src(path.normalize(config.dest.path + '/assets/scripts/main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.normalize(config.dest.path + '/assets/scripts')));
});
