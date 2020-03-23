'use strict';

// Load plugins
const gulp = require('gulp');
const { series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// CSS task
function css() {
  return gulp
    .src('./src/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css'));
}

// Watch files
function watchFiles() {
  gulp.watch('./src/css/*.css');
}

// Export tasks
exports.css = css;
exports.watch = watchFiles;
exports.default = series(css, watchFiles);
