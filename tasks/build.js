import gulp from 'gulp'
import runSequence from 'run-sequence'

// Build Production Files
gulp.task('build', ['clean'], (cb) => {
  runSequence(
    'styles:compile',
    'styles:compress',
    'eslint',
    'scripts:compress',
    'views:compress',
    'images',
    'copy',
    cb
  )
})

// Shortcuts
gulp.task('b', ['build'])
