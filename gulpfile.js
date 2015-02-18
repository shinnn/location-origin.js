'use strict';

var pkg = require('./package.json');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({config: pkg});
var rimraf = require('rimraf');
var stylish = require('jshint-stylish');

gulp.task('lint:scripts', function() {
  return gulp.src('*.js')
    .pipe($.jscs(pkg.jscsConfig))
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('lint:json', function() {
  return gulp.src('*.json')
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('lint', ['lint:scripts', 'lint:json']);

gulp.task('clean', rimraf.bind(null, 'dist'));

gulp.task('build', ['lint'], function() {
  return gulp.src(['src/*.coffee'])
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter())
    .pipe($.coffee())
    .pipe($.rename(pkg.main))
    .pipe($.size({showFiles: true}))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('src/*.coffee', ['coffee']);
  gulp.watch(['*.{js,json}', '.jshintrc'], ['lint']);
});

gulp.task('default', ['build', 'watch']);
