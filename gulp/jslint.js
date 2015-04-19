var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Lint JavaScript
gulp.task('jshint', function() {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulpIf(!browserSync.active, jshint.reporter('fail')));
});
