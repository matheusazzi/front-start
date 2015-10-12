import gulp from 'gulp'
import size from 'gulp-size'
import uglifyjs from 'gulp-uglifyjs'
import mainBowerFiles from 'main-bower-files'
import browserSync from 'browser-sync'
import webpack from 'gulp-webpack'
import webpackConfig from '../webpack.config.js'
const reload = browserSync.reload

// Modernizr
gulp.task('scripts:modernizr-dev', () => {
  return gulp.src([
      'app/assets/vendor/modernizr/modernizr.js'
    ])
    .pipe(gulp.dest('.tmp/assets/scripts'))
    .pipe(size({
      title: 'scripts:modernizr-dev'
    }))
})

gulp.task('scripts:modernizr-build', () => {
  return gulp.src([
      'app/assets/vendor/modernizr/modernizr.js'
    ])
    .pipe(uglifyjs('modernizr.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:modernizr-build'
    }))
})

// Compile JavaScript
gulp.task('scripts:compile', () => {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.tmp/assets/scripts'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(size({
      title: 'scripts:compile'
    }))
})

// Minify JavaScript
gulp.task('scripts:compress', () => {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(uglifyjs())
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:compress'
    }))
})
