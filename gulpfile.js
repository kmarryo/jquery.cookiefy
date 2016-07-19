var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var header = require('gulp-header');
var inline_base64 = require('gulp-inline-base64');


var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version: v<%= pkg.version %> (<%= new Date().toLocaleString() %>)',
    ' * @documentation: <%= pkg.homepage %>',
    ' * @author: <%= pkg.author %>',
    ' * @license: <%= pkg.license %>',
    ' */',
    ''].join('\n');

//Gulp tasks
gulp.task('default', ['watch']);

gulp.task('javascript', function() {
    return gulp.src('./src/*.js')
        .pipe(inline_base64({
            baseDir: './',
            maxSize: 14 * 1024,
            debug: true
        }))
        .pipe(concat(pkg.name + '.js'))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    // watch many files
    watch(['./src/*.js', './images/close-grey-xs.png'], function() {
        gulp.start('javascript');
    });
});
