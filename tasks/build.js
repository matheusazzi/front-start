var gulp = require('gulp');
var runSequence = require('run-sequence');

// Build Production Files
gulp.task('build', ['clean'], function(cb) {
  runSequence(
    'styles:compile',
    'styles:compress',
    'eslint',
    'scripts:modernizr-build',
    'scripts:compress',
    'views:compress',
    'images',
    'copy',
    cb
  );
});

// Shortcuts
gulp.task('b', ['build']);
