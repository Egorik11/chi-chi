const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('styles', () =>
  gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
);

gulp.task('minify-css', () =>
  gulp
    .src('dist/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
);

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch('src/scss/*.scss', gulp.series('styles'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('styles', 'minify-css', 'serve'));
