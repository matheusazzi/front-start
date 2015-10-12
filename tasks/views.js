import gulp from 'gulp'
import swig from 'gulp-swig'
import size from 'gulp-size'
import minifyHtml from 'gulp-minify-html'
import browserSync from 'browser-sync'
const reload = browserSync.reload

// Compile Swig views
gulp.task('views:compile', () => {
  return gulp.src('app/views/pages/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(size({
      title: 'views:compile'
    }))
})

// Compress Swig views
gulp.task('views:compress', () => {
  return gulp.src('app/views/pages/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'))
    .pipe(size({
      title: 'views:compress'
    }))
})
