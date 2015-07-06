var gulp = require('gulp');
var size = require('gulp-size');
var uglifyjs = require('gulp-uglifyjs');
var mainBowerFiles = require('main-bower-files');

// Modernizr
gulp.task('scripts:modernizr', function() {
  return gulp.src([
      'app/assets/vendor/modernizr/modernizr.js'
    ])
    .pipe(uglifyjs('modernizr.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:modernizr'
    }));
});

// Concatenate JavaScript
gulp.task('scripts:concat', function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(size({
      title: 'scripts:concat'
    }));
});

// Minify JavaScript
gulp.task('scripts:compress', function() {
  return gulp.src([
      '.tmp/scripts/**/*.js',
      'app/assets/scripts/**/*.js'
    ])
    .pipe(uglifyjs('app.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(size({
      title: 'scripts:compress'
    }));
});
