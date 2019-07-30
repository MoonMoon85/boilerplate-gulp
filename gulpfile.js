// Initialize modules
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

// CSS task: adds prefixes and pipes to dist/
gulp.task('css', function(){
  return gulp.src('app/css/style.css')
    .pipe(postcss([ autoprefixer() ])) // PostCSS plugins
    .pipe(gulp.dest('dist')); // put final CSS in dist folder
});

// JS task: transplies JS via babel and pipes to dist/
gulp.task('js', function(){
  return gulp.src([
      'app/js/*.js'
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
  ], gulp.series('js'));
});

// Default task
gulp.task('default', gulp.series('css', 'js', 'watch'));