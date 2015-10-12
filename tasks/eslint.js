import gulp from 'gulp'
import eslint from 'gulp-eslint'

// Check code style
gulp.task('eslint', () => {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
})
