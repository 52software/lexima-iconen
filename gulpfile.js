var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

gulp.task('default', function()
{
    gulp.src('icons/*.svg')
        .pipe(svgSprite({
            mode: {
                view: {
                    sprite: 'sprite.svg',
                    example: true,
                    bust: false
                },
                symbol: {
                    sprite: 'sprite.svg',
                    example: true,
                    bust: false
                }
            }
        }))
        .pipe(gulp.dest('public'));
});