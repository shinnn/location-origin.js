'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var stylish = require('jshint-stylish');

var banner = [
  '/*!',
  ' * location-origin.js | (c) Shinnosuke Watanabe, MIT',
  ' * https://github.com/shinnn/location-origin.js',
  '*/\n'
].join('\n');

gulp.task('lint', function() {
  gulp.src('*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
  gulp.src('*.json')
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter());
});

gulp.task('coffee', function() {
  return gulp.src(['src/*.coffee'])
    .pipe($.coffeelint({
      max_line_length: {
        value: 85
      }
    }))
    .pipe($.coffeelint.reporter())
    .pipe($.coffee())
    .pipe($.header(banner))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['src/*.coffee'], ['coffee']);
  gulp.watch(['*.{js,json}'], ['lint']);
});

gulp.task('build', ['lint', 'coffee']);
gulp.task('default', ['build', 'watch']);
