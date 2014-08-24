'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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

// Compile Swig views
gulp.task('views:compile', function() {
  return gulp.src('app/views/pages/*.html')
    .pipe($.swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }))
    .pipe($.size({
      title: 'views:compile'
    }));
});

// Compress Swig views
gulp.task('views:compress', function() {
  return gulp.src('app/views/pages/*.html')
    .pipe($.swig({
      defaults: {
        cache: false
      }
    }))
    .pipe($.useref())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'views:compress'
    }));
});

// Lint JavaScript
gulp.task('jshint', function() {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src('app/assets/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 9
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.size({
      title: 'images'
    }));
});

// Compile Sass Files and Autoprefix
gulp.task('styles:compile', function() {
  return gulp.src('app/assets/styles/*.scss')
    .pipe($.sass().on('error', console.error.bind(console)))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }))
    .pipe($.size({
      title: 'styles:compile'
    }));
});

// Compress Styles
gulp.task('styles:compress', function() {
  return gulp.src('.tmp/styles/*.css')
    .pipe($.csso())
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe($.size({
      title: 'styles:compress'
    }));
});

// Concatenate JavaScript
gulp.task('scripts:concat', function() {
  return $.bowerFiles().pipe(gulp.dest('.tmp/scripts'))
    .pipe($.size({
      title: 'scripts:concat'
    }));
});

// Minify JavaScript
gulp.task('scripts:compress', function() {
  return gulp.src([
      '.tmp/scripts/**/*.js',
      'app/assets/scripts/**/*.js'
    ])
    .pipe($.uglifyjs('app.js'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe($.size({
      title: 'scripts:compress'
    }));
});

gulp.task('copy', function() {
  return gulp.src([
      'app/*',
      '!app/*.html'
    ])
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'copy'
    }));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Watch Files For Changes & Reload
gulp.task('serve', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: ['.tmp', 'app']
    }
  });

  gulp.start('views:compile', 'styles:compile', 'jshint');

  gulp.watch(['app/views/**/*.html'], ['views:compile']);
  gulp.watch(['app/assets/styles/**/*.scss'], ['styles:compile']);
  gulp.watch(['app/assets/scripts/**/*.js'], ['jshint']);
  gulp.watch(['app/assets/images/**/*'], reload);
});

// Build Production Files
gulp.task('build', ['clean'], function(cb) {
  runSequence(
    'styles:compile',
    'styles:compress',
    'jshint',
    'scripts:concat',
    'scripts:compress',
    'views:compress',
    'images',
    'copy',
    cb
  );
});

// Serve Builded Directory
gulp.task('serve:dist', ['build'], function() {
  browserSync({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

// Shortcuts
gulp.task('s', ['serve']);
gulp.task('s:dist', ['serve:dist']);
gulp.task('b', ['build']);
