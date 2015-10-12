import gulp from 'gulp'
import sass from 'gulp-sass'
import csso from 'gulp-csso'
import autoprefixer from 'gulp-autoprefixer'
import size from 'gulp-size'
import browserSync from 'browser-sync'
const reload = browserSync.reload

const AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
]

// Compile Sass Files and Autoprefix
gulp.task('styles:compile', () => {
  return gulp.src('app/assets/styles/*.{scss,sass}')
    .pipe(sass().on('error', console.error.bind(console)))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(size({
      title: 'styles:compile'
    }))
})

// Compress Styles
gulp.task('styles:compress', () => {
  return gulp.src('.tmp/assets/styles/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(size({
      title: 'styles:compress'
    }))
})
