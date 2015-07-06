var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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
  gulp.watch(['app/assets/scripts/**/*.js'], ['jscs', 'jshint']);
  gulp.watch(['app/assets/images/**/*'], reload);
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

gulp.task('s', ['serve']);
gulp.task('s:dist', ['serve:dist']);