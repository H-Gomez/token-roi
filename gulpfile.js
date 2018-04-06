var gulp = require('gulp');
var sass = require('gulp-sass');

// Styles
gulp.task('styles', function() {
    return gulp.src('styles/**.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest('public/styles/'))
});

// Default task
// gulp.task('default', ['clean'], function() {
//     gulp.start('copy', 'styles', 'scripts');
// });

// // Watch
// gulp.task('watch', function() {
//     // Watch .scss files
//     gulp.watch('src/scss/**/*.scss', ['styles']);
//
//     // Watch .js files
//     gulp.watch('src/js/**/*.js', ['scripts']);
//
// });