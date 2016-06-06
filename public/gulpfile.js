var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('prefix', function () {
	return gulp.src('stylesheets/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./stylesheets/'));
});

gulp.task('labs-prefix', function () {
	return gulp.src('css-lab/stylesheets/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css-lab/stylesheets/'));
});

gulp.task('minify', function() {
  return gulp.src('stylesheets/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./stylesheets/'));
});

// gulp.task('watch', function() {
//   gulp.watch('./scss/**/*.scss', ['compass']);
//   gulp.watch('./css/styles.css', ['prefix']);
//   gulp.watch('./js/script.js', ['compress']);
// });

gulp.task('build', function(callback) {
  runSequence('prefix', 'minify', callback);
});
