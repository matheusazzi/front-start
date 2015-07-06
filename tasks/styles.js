var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var reload = require('browser-sync').reload;

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Compile Sass Files and Autoprefix
gulp.task('styles:compile', function() {
  return gulp.src('app/assets/styles/*.scss')
    .pipe(sass().on('error', console.error.bind(console)))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }))
    .pipe(size({
      title: 'styles:compile'
    }));
});

// Compress Styles
gulp.task('styles:compress', function() {
  return gulp.src('.tmp/styles/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(size({
      title: 'styles:compress'
    }));
});
