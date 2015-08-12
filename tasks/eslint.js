var gulp = require('gulp');
var eslint = require('gulp-eslint');

// Check code style
gulp.task('eslint', function() {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});
