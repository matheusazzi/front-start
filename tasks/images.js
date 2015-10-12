import gulp from 'gulp'
import cache from 'gulp-cache'
import imagemin from 'gulp-imagemin'
import size from 'gulp-size'
import browserSync from 'browser-sync'
const reload = browserSync.reload

// Optimize Images
gulp.task('images', () => {
  return gulp.src('app/assets/images/**/*')
    .pipe(cache(imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 9
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(size({
      title: 'images'
    }))
})
