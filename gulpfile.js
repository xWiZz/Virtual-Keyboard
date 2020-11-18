var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('default', function(){

    gulp.src('style/*.scss')
    .pipe(compass({
        css: 'style',
        sass: 'css',
        image: 'img'
    }))
    .pipe(gulp.dest('style'))

})