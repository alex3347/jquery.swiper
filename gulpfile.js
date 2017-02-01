var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefix = require("gulp-autoprefixer"),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	minifyHtml = require("gulp-minify-html"),
	del = require('del'),
	runSequence = require('run-sequence'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	rename = require('gulp-rename');

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
  	.pipe(autoprefix())
    .pipe(sass()) 
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('uglify', function () {
    gulp.src('src/js/*.js') 
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify()) 
    .pipe(gulp.dest('dis/js')); 
});

gulp.task('minify-css', function () {
    gulp.src('src/css/*.css') 
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS()) 
    .pipe(gulp.dest('dis/css'));
});


gulp.task('minify-html', function () {
    gulp.src('src/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dis'));
});

gulp.task('images', function(){
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dis/img'))
});

gulp.task('del', function() {
  return del.sync(['dis/**/*', '!dis/img', '!dis/img/**/*']);
});

gulp.task('del:all', function(callback) {
  del('dis');
  return cache.clearAll(callback);
})

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
})

gulp.task('default', function(callback) {
  runSequence('sass', 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'del',
    'sass',
    ['uglify', 'minify-css', 'minify-html','images'],
    callback
  )
})
