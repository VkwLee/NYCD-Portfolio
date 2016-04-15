'use strict';
// node.js require statement which brings in the gulp library and save it in a var
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}); 
gulp.task('sass', function () {
  return gulp.src('./sass/stylesheet.scss') 
        .pipe(sass().on('error', sass.logError)) // pipe paast iets door naar de library, on error dan moet ie sass.logError uitoefenen.
        .pipe(gulp.dest("./css")) // de plaats waarin het iets uitpoept
        .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);


//om te starten tik terminal: oypt 