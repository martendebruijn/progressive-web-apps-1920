'use strict';

// Load plugins
const gulp = require('gulp');
const { series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

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

// ES task
function es() {
  return gulp
    .src('./src/js/*.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/js'));
}

// img task
function img() {
  return gulp
    .src('./src/img/*')
    .pipe(imagemin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/img'));
}

// Watch files
function watchFiles() {
  gulp.watch('./src/css/*.css', css);
  gulp.watch('./src/js/*.js', es);
}

// Complex tasks
const build = gulp.series(css, es, img);

// Export tasks
exports.css = css;
exports.es = es;
exports.img = img;
exports.watch = watchFiles;
exports.build = build;
exports.default = build;
