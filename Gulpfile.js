'use strict';
// node.js require statement which brings in the gulp library and save it in a var
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();


//Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

//Style Dependencies
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//Style task
gulp.task('styles', function () {
  return gulp.src('./client/sass/stylesheet.scss') 
        .pipe(rename('stylesheets.css'))
        .pipe(sass().on('error', sass.logError)) // pipe paast iets door naar de library, on error dan moet ie sass.logError uitoefenen.
        .pipe(gulp.dest("./build/css")) // de plaats waarin het iets uitpoept
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

// gulp.task('styles:watch', function () {
//   gulp.watch('./client/sass/**/*.sass', ['sass']);
// });

//js task
gulp.task('browserify-client', function() {
  return gulp.src('./client/js/script.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('js-watch', ['browserify-client'], function (done) {
    browserSync.reload();
    done();
});

//minify and uglify

gulp.task('minify', ['styles'], function() {
  return gulp.src('build/css/stylesheets.css')
    .pipe(prefix({ cascade: true }))
    .pipe(minifyCSS())
    .pipe(rename('stylesheets.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('uglify', ['browserify-client'], function() {
  return gulp.src('./build/js/script.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch('./client/js/**/*.js', ['js-watch']);
    gulp.watch('./client/sass/**/*.scss', ['styles']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('build', ['uglify', 'minify']);

gulp.task('default', ['build', 'watch']);

