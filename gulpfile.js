const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const file_include = require('gulp-file-include');
const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const flatten = require('gulp-flatten');
const newer = require('gulp-newer');

// Minify SCSS
gulp.task('minify-scss', () => {
    return src('app/scss/*.scss')
        .pipe(newer({
            dest: 'dist/css',
            ext: '.min.css'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssnano(), autoprefixer()]))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('dist/css'))
});

// Minify CSS
gulp.task('minify-css', () => {
    return src('app/css/*')
        .pipe(newer({
            dest: 'dist/css',
            ext: '.min.css'}))
        .pipe(postcss([cssnano(), autoprefixer()]))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('dist/css'))
});

// Minify SCSS and CSS together
gulp.task('sass', gulp.series('minify-css','minify-scss'));

// Minify JS
gulp.task('uglify', () => {
    return src('app/js/**/*.js')
        .pipe(newer({
            dest: 'dist/js',
            ext: '.min.js'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(dest('dist/js'))
});

// Include html files together
gulp.task('html', () => {
    return src([
        'app/**/*.html', // Include all HTML files
        '!app/**/head.html', // Exclude head.html
        '!app/**/body.html', // Exclude body.html
        '!app/**/header.html', // Exclude any other specific files
        '!app/**/footer.html',
        '!app/**/question.html',
        '!app/**/main-page.html',
    ])
        .pipe(file_include({
            prefix: '@@',
            basepath: '@file'}))
        .pipe(flatten({ includeParents: 1}))
        .pipe(dest('dist'));
});

// Compress images
gulp.task('images', () => {
    return src('app/images/**/*',{encoding:false})
        .pipe(newer('dist/images'))
        .pipe(imagemin())
        .pipe(dest('dist/images'));
});

// Compress icons
gulp.task('icons', () => {
    return src('app/icons/**/*',{encoding:false})
        .pipe(newer('dist/icons'))
        .pipe(imagemin())
        .pipe(dest('dist/icons'));
});

// Watcher
gulp.task('watch', () => {
    gulp.watch('app/scss/*.scss', gulp.series('minify-scss'));
    gulp.watch('app/css/*.css', gulp.series('minify-css'));
    gulp.watch('app/js/*.js', gulp.series('uglify'));
    gulp.watch('app/index.html', gulp.series('html'));
    gulp.watch('app/html/**/*.html', gulp.series('html'));
    gulp.watch('app/images/**/*', gulp.series('images'));
    gulp.watch('app/icons/**/*', gulp.series('icons'));
});

// Update browser
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./dist').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('html', 'sass', 'uglify', 'images', "icons", gulp.parallel('browser-sync','watch')));