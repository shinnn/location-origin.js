'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

gulp.task('lint', function() {
  gulp.src(['*.js'])
    .pipe($.jscs('.jscs.json'))
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
  gulp.src(['*.json'])
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('coffee', function() {
  return gulp.src(['src/*.coffee'])
    .pipe($.coffeelint({
      max_line_length: { // jshint ignore:line
        value: 85
      }
    }))
    .pipe($.coffeelint.reporter())
    .pipe($.coffee())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.coffee'], ['coffee']);
  gulp.watch(['*.{js,json}', '.jshintrc'], ['lint']);
});

gulp.task('build', ['lint', 'coffee']);
gulp.task('default', ['build', 'watch']);
