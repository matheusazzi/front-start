var gulp = require('gulp');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var size = require('gulp-size');
var reload = require('browser-sync').reload;

// Optimize Images
gulp.task('images', function() {
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
    }));
});
