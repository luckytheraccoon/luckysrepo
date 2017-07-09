const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpBrowser = require("gulp-browser");
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const streamqueue = require('streamqueue');

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

gulp.task('js', ['browserify'], function(cb) {
  pump([
        gulp.src('raw_resources/js/lib/browserified-babelified-merged-scripts.js'),
        uglify(),
		    rename("scripts.js"),
        gulp.dest('js')
    ],
    cb
  );
});

gulp.task('browserify', ['babel'], function() {
    var stream = gulp.src('raw_resources/js/lib/babelified-merged-scripts.js')
        .pipe(gulpBrowser.browserify()) 
        .pipe(rename({
          prefix: "browserified-",
        }))
        .pipe(gulp.dest("raw_resources/js/lib"));
    return stream;
});

gulp.task('babel', ['concat-js'], () => {
    return gulp.src('raw_resources/js/lib/merged-scripts.js')
        .pipe(babel({
            presets: ["env","react"]
        }))
        .pipe(rename({
          prefix: "babelified-",
        }))
        .pipe(gulp.dest('raw_resources/js/lib'));
});

gulp.task('concat-js', function () {
  return gulp.src([
      'raw_resources/js/src/imports.js',
      'raw_resources/js/src/index.js',
      'raw_resources/js/src/common-components.js',
      'raw_resources/js/src/auth-menu.js',
      'raw_resources/js/src/test.js',
      'raw_resources/js/src/main-render.js'])
    .pipe(concat('merged-scripts.js'))
    .pipe(gulp.dest('raw_resources/js/lib'));
});