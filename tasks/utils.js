import gulp from 'gulp'
import del from 'del'
import size from 'gulp-size'

gulp.task('copy', () => {
  return gulp.src([
      'app/*',
      '!app/views/',
      '!app/*.html'
    ])
    .pipe(gulp.dest('dist'))
    .pipe(size({
      title: 'copy'
    }))
})

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']))
