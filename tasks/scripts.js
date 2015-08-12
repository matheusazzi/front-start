var gulp = require('gulp');
var size = require('gulp-size');
var uglifyjs = require('gulp-uglifyjs');
var mainBowerFiles = require('main-bower-files');
var reload = require('browser-sync').reload;
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config.js');

// Modernizr
gulp.task('scripts:modernizr-dev', function() {
  return gulp.src([
      'app/assets/vendor/modernizr/modernizr.js'
    ])
    .pipe(gulp.dest('.tmp/assets/scripts'))
    .pipe(size({
      title: 'scripts:modernizr-dev'
    }));
});

gulp.task('scripts:modernizr-build', function() {
  return gulp.src([
      'app/assets/vendor/modernizr/modernizr.js'
    ])
    .pipe(uglifyjs('modernizr.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:modernizr-build'
    }));
});

// Compile JavaScript
gulp.task('scripts:compile', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.tmp/assets/scripts'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe(size({
      title: 'scripts:compile'
    }));
});

// Minify JavaScript
gulp.task('scripts:compress', function() {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(uglifyjs())
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:compress'
    }));
});
