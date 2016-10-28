var gulp = require('gulp'),
	sass = require('gulp-sass'),
	include = require("gulp-include"),
	minifyCss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),  
	uglify = require('gulp-uglify'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer');  


gulp.task('sass', function () {
  return gulp.src('./development/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(minifyCss({
          keepSpecialComments: 1
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});

//script paths
var jsFiles = './',  
    jsDest = './';

var scriptsCompile = [
    'bower_components/jquery/dist/jquery.min.js',                            
    'bower_components/modernizr/modernizr.js',                                            
    'bower_components/bootstrap/dist/js/bootstrap.js',                                            
    'development/scripts/scripts.js'
];
gulp.task("scripts", function() {
	console.log("-- gulp is running task 'scripts'");
    gulp.src(scriptsCompile)
        .pipe( include() )
        .on('error', console.log)
        // .pipe( gulp.dest(jsDest) );
         .pipe(concat('scripts.js'))
        //.pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});
 
gulp.task('default', ['scripts', 'sass']);

gulp.task('watch', function () {
    gulp.watch('./development/styles/*.scss', ['sass'] );
    gulp.watch('./development/scripts/*.js', ['scripts'] );
});