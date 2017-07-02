const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpBrowser = require("gulp-browser");
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', ['css','js'], function () {});

gulp.task('css', ['concat-css'], function () {
  return gulp.src('raw_resources/css/lib/merged-main.css')
    .pipe(cleanCSS())
	.pipe(rename('main.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('concat-css', ['sass'], function () {
  return gulp.src('raw_resources/css/src/*.css')
    .pipe(concat('merged-main.css'))
    .pipe(gulp.dest('raw_resources/css/lib'));
});

gulp.task('sass', function () {
  return gulp.src('raw_resources/css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('raw_resources/css/src'));
});

gulp.task('js', ['concat-js'], function(cb) {
  pump([
        gulp.src('raw_resources/js/lib/merged-index.js'),
        uglify(),
		rename("index.js"),
        gulp.dest('js')
    ],
    cb
  );
});

gulp.task('concat-js', ['browserify'], function () {
  return gulp.src(['!raw_resources/js/lib/merged-index.js','!raw_resources/js/lib/babel-index.js','raw_resources/js/lib/*.js'])
    .pipe(concat('merged-index.js'))
    .pipe(gulp.dest('raw_resources/js/lib'));
});

gulp.task('browserify', ['babel'], function() {
    var stream = gulp.src('raw_resources/js/lib/babel-index.js')
        .pipe(gulpBrowser.browserify()) 
		.pipe(rename('browserified-index.js'))
        .pipe(gulp.dest("raw_resources/js/lib"));
    return stream;
});


gulp.task('babel', () => {
    return gulp.src('raw_resources/js/src/babel-index.js')
        .pipe(babel({
            presets: ["env","react"]
        }))
        .pipe(gulp.dest('raw_resources/js/lib'));
});