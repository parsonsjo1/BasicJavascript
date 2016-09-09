var gulp = require('gulp');
var browsersync = require('browser-sync').create();

// ////////////////////////////////////////////////
// Paths to source files
// ///////////////////////////////////////////////
 
var paths = {
    html:['*.html', './includes/*.html'],
    css:['css/*.css'],
    js:['js/*.js']
};

gulp.task('watch', ['browsersync'], function(){
	gulp.watch(paths.html, browsersync.reload);
	gulp.watch(paths.css, browsersync.reload);
	gulp.watch(paths.js, browsersync.reload);
})

gulp.task('browsersync', function() {
	browsersync.init({
		server: {
			baseDir: './'
		},
	})
})

gulp.task('default', ['watch']);