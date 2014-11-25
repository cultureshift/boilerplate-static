// npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-imagemin gulp-rename gulp-clean gulp-concat gulp-notify gulp-cache gulp-livereload tiny-lr --save-dev

// Load plugins 
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

// Htm
gulp.task('htm', function() {
  return gulp.src('*.htm' )
    .pipe(livereload(server))
    .pipe(notify({ message: 'Htm task complete' }));
});


// PHP
gulp.task('php', function() {
  return gulp.src('*.php' )
    .pipe(livereload(server))
    .pipe(notify({ message: 'php task complete' }));
});

// Styles
gulp.task('styles', function() {
  return gulp.src('assets/dev/scss/main.scss')
    .pipe(sass({ style: 'expanded', }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))    
    .pipe(rename({ suffix: '.min' }))
    //.pipe(minifycss())
    .pipe(gulp.dest('assets/app/css'))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['assets/dev/js/*.js'])
    .pipe(concat('main.min.js'))
    //.pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('assets/app/js'))
    //.pipe(gulp.task('minify-js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/dev/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/app/images'))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['assets/app/css', 'assets/app/js', 'assets/app/images'], {read: false})
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('htm', 'styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

   // Listen on port 35729
   server.listen(35729, function (err) {
     if (err) {
       return console.log(err)
     };
      
      // Watch .htm files
      gulp.watch('**/*.htm', ['htm']);

      // Watch .php files
      gulp.watch('**/*.php', ['php']);

      // Watch .scss files
      gulp.watch('assets/dev/scss/**/*.scss', ['styles']);

      // Watch .js files
      gulp.watch('assets/dev/js/**/*.js', ['scripts']);

      // Watch image files
      gulp.watch('assets/dev/images/**/*', ['images']);

  });

});