const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const uncss = require('postcss-uncss')
const concat = require('gulp-concat')
const image = require('gulp-image')
const htmlmin = require('gulp-htmlmin')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

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
  var plugins = [
    autoprefixer(),
    uncss({ html: ['./src/index.html'], ignore: ['.list-group-item.active'] }),
    cssnano()
  ]

  gulp
    .src('./src/**/*.css')
    .pipe(postcss(plugins))
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
