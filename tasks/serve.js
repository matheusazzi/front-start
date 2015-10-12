import gulp from 'gulp'
import browserSync from 'browser-sync'
const reload = browserSync.reload

// Watch Files For Changes & Reload
gulp.task('serve', () => {
  browserSync({
    notify: false,
    server: {
      baseDir: ['.tmp', 'app']
    }
  })

  gulp.start(
    'views:compile',
    'styles:compile',
    'eslint',
    'scripts:modernizr-dev',
    'scripts:compile'
  )

  gulp.watch(['app/views/**/*.html'], ['views:compile'])
  gulp.watch(['app/assets/styles/**/*.{scss,sass}'], ['styles:compile'])
  gulp.watch(['app/assets/scripts/**/*.js'], ['eslint', 'scripts:compile'])
  gulp.watch(['app/assets/images/**/*'], reload)
})

// Serve Builded Directory
gulp.task('serve:dist', ['build'], () => {
  browserSync({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('s', ['serve'])
gulp.task('s:dist', ['serve:dist'])
