var gulp = require('gulp');
var swig = require('gulp-swig');
var size = require('gulp-size');
var useref = require('gulp-useref');
var minifyHtml = require('gulp-minify-html');
var reload = require('browser-sync').reload;

// Compile Swig views
gulp.task('views:compile', function() {
  return gulp.src('app/views/pages/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }))
    .pipe(size({
      title: 'views:compile'
    }));
});

// Compress Swig views
gulp.task('views:compress', function() {
  return gulp.src('app/views/pages/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(useref())
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'))
    .pipe(size({
      title: 'views:compress'
    }));
});
