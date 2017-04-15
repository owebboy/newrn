// Gulp tasks for newrn

// Load plugins
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    cleanJS = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    concatJS = require('gulp-concat'),
    concatCSS = require('gulp-concat-css')

// JS: minification and concatenation
gulp.task('js', function() {
  return gulp.src('./static/js/global.js')
    .pipe(browserify({
      insertGlobals : true,
      debug : !gulp.env.production
    }))
    .pipe(cleanJS())
    .pipe(gulp.dest('./static/dist'))
})

// CSS: minification and concatenation
gulp.task('css', function() {
  return gulp.src('./static/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concatCSS('global.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./static/dist'))
})

// Browsersync
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload()
    done()
});
gulp.task('css-watch', ['css'], function (done) {
    browserSync.reload()
    done()
})

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['js','css'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("./static/js/*.js", ['js-watch'])
    gulp.watch("./static/css/*.css", ['css-watch'])
    gulp.watch("*.html").on('change', browserSync.reload);
});
