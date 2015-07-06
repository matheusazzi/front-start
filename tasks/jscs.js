var gulp = require('gulp');
var jscs = require('gulp-jscs');

// Check code style
gulp.task('jscs', function() {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(jscs());
});
