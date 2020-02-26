var gulp = require('gulp');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
 
var scripts = [
	'vendor/components/jquery/jquery.js',
	'vendor/twbs/bootstrap/dist/js/bootstrap.js',
	'static/js/*.js'
];

var styles = [
	'vendor/twbs/bootstrap/dist/css/bootstrap.css',
	'static/css/*.css'
];

gulp.task('pack-js', function () {    
    return gulp.src(scripts)
		.pipe(concat('script.js'))
		.pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('public/build/js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src(styles)
		.pipe(concat('stylesheet.css'))
		.pipe(csso())
        .pipe(gulp.dest('public/build/css'));
});
 
gulp.task('default', gulp.parallel('pack-js', 'pack-css'));
