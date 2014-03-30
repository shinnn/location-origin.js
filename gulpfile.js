'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var stylish = require('jshint-stylish');

gulp.task('jshint', function() {
  gulp.src('*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

gulp.task('coffee', function() {
  gulp.src(['src/*.coffee'])
    .pipe($.coffeelint({
      max_line_length: {
        value: 85
      }
    }))
    .pipe($.coffeelint.reporter())
    .pipe($.coffee())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.coffee'], ['coffee']);
  gulp.watch(['*.js'], ['jshint']);
});

gulp.task('build', ['jshint', 'coffee']);
gulp.task('default', ['build', 'watch']);
