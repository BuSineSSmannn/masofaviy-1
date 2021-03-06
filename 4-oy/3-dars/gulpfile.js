var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');


var config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './public/index.html'
    },
    output:{
        cssName: 'style/style.min.css',
        path: './public',
    }
};

gulp.task('scss',function(){
    return gulp.src(config.path.scss)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(concat(config.output.cssName))
            // .pipe(cleanCss())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.output.path))
            .pipe(browserSync.stream())
});
gulp.task('serve',function(){
    browserSync.init({
        server:{
            baseDir:config.output.path
        }
    });
});

gulp.watch(config.path.scss,gulp.series('scss'))
gulp.watch(config.path.html).on('change',browserSync.reload);

gulp.task('default', gulp.parallel('scss','serve'));

