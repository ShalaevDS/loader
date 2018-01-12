'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});


gulp.task('connect', function() {
    connect.server({
        port: '3000'
    });
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch']);