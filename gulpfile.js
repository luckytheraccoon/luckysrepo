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

gulp.task('js', ['browserify'], function(cb) {
  pump([
        gulp.src('raw_resources/js/lib/babelified-merged-scripts.js'),
        uglify(),
		    rename("scripts.js"),
        gulp.dest('js')
    ],
    cb
  );
});

gulp.task('browserify', ['concat-js'], function() {
    var stream = gulp.src('raw_resources/js/lib/babelified-merged-scripts.js')
        .pipe(gulpBrowser.browserify()) 
        .pipe(rename({
          prefix: "browserified-",
        }))
        .pipe(gulp.dest("raw_resources/js/lib"));
    return stream;
});

gulp.task('concat-js', ['babel'], function () {
  return gulp.src(['!raw_resources/js/lib/merged-index.js','!raw_resources/js/lib/babelified-merged-*','!raw_resources/js/lib/browserified-*','raw_resources/js/lib/*.js'])
    .pipe(concat('babelified-merged-scripts.js'))
    .pipe(gulp.dest('raw_resources/js/lib'));
});

gulp.task('babel', () => {
    return gulp.src('raw_resources/js/src/*')
        .pipe(babel({
            presets: ["env","react"]
        }))
        .pipe(rename({
          prefix: "babelified-",
        }))
        .pipe(gulp.dest('raw_resources/js/lib'));
});