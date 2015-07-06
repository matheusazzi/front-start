var gulp = require('gulp');
var del = require('del');
var size = require('gulp-size');

gulp.task('copy', function() {
  return gulp.src([
      'app/*',
      '!app/views/',
      '!app/*.html'
    ])
    .pipe(gulp.dest('dist'))
    .pipe(size({
      title: 'copy'
    }));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));
