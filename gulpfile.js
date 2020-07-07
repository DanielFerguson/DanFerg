const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const image = require('gulp-image')
const htmlmin = require('gulp-htmlmin')

function images(cb) {
  gulp
    .src('./src/assets/**/*')
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
      })
    )
    .pipe(gulp.dest('./dist/assets/'))

  cb()
}

function css(cb) {
  gulp
    .src('./src/**/*.css')
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(sourcemaps.init())
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
  cb()
}

function js(cb) {
  gulp
    .src('./src/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
  cb()
}

function html(cb) {
  gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
  cb()
}

exports.build = gulp.parallel(js, css, images, html)
