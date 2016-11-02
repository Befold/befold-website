const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babel = require('babelify');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpIf = require('gulp-if');
const cleanCss = require('gulp-clean-css');

const SASS_PATHS = [];
// .concat(require('bourbon').includePaths);
let isProductionBuild = false;

gulp.task('build:js', function () {
  return browserify('./app/app.js')
    .transform(babel.configure({ presets: ['es2015'] }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpIf(isProductionBuild, stripDebug()))
    .pipe(gulpIf(isProductionBuild, uglify()))
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('build:css', function () {
  gulp.src('stylesheets/app.scss')
    .pipe(sass({
      includePaths: SASS_PATHS,
      onError: console.error
    }))
    .pipe(gulpIf(isProductionBuild, cleanCss()))
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('development', ['build:css', 'build:js'], function () {
  gulp.watch('stylesheets/**/*', ['build:css']);
  gulp.watch('app/**/*', ['build:js']);
});

gulp.task('build:production', function () {
  isProductionBuild = true;

  gulp.run(['build:js', 'build:css']);
});

gulp.task('default', ['development']);
