var gulp = require('gulp'),
 	postcss = require('gulp-postcss'),
 	nested = require('postcss-nested'),
 	autoprefixer = require('autoprefixer'),
 	cssvars = require('postcss-simple-vars'),
 	cssImport = require('postcss-import'),
 	mixins = require('postcss-mixins'),
 	hexrgba = require('postcss-hexrgba'),
 	cssnext = require('cssnext'), 	
 	precss = require('precss');

	gulp.task('styles',function(){
		return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssImport,mixins,cssvars,nested,hexrgba,autoprefixer({browsers: ['last 6 version']}),cssnext,precss]))
			.on('error', function(errorInfo){
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest('./app/temp/styles'));
			 
	});