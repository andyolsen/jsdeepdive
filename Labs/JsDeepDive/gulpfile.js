var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	es6Path = 'Labs/**/es6scripts/*.js';
	
gulp.task('babel', function(done) {
	gulp.src([es6Path])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.'))
		.pipe(rename(function (path) {
			var destPath = 'Labs/' + path.dirname;
			destPath = destPath.replace('es6scripts', 'es5scripts')
			path.dirname = destPath;
		}))
		.pipe(gulp.dest('.'));
	done();	
});

gulp.task('watch', function(done) {
	gulp.watch(es6Path, gulp.series('babel'));
	done();
});

gulp.task('default', gulp.series(['babel', 'watch']));