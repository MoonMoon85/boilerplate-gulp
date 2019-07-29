// Initialize modules
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

// CSS task: compiles the style.css file into style.css
gulp.task('css', function(){
  return gulp.src('app/css/style.css')
    .pipe(postcss([ autoprefixer() ])) // PostCSS plugins
    .pipe(gulp.dest('dist')); // put final CSS in dist folder
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function(){
  return gulp.src([
      'app/js/*.js'
      //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'));
});

// Watch task: watch CSS and JS files for changes
gulp.task('watch', function(){
  gulp.watch('app/css/*.css', gulp.series('css'));
  gulp.watch([
      'app/js/**/*.js'
      //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ], gulp.series('js'));
});

// Default task
gulp.task('default', gulp.series('css', 'js', 'watch'));