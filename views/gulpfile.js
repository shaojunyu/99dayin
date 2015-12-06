var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    prefix = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    flexpost = require('postcss-flexboxfixer'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'), //合并  

    uglify = require('gulp-uglify'), //压缩  

    amdOptimize = require("amd-optimize"); //require优化  


gulp.task('minify', function() {
    gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});
gulp.task('prefix', function() {
    var processors = [ //这里就是中间件
        //已经require("autoprefixer");
        autoprefix({
            browsers: ['last 3 Safari versions', "last 2 Explorer versions", 'last 2 Explorer versions', "iOS 5"],
            cascade: true,
            remove: true
        }),
        flexpost
    ];
    return gulp.src('./app/**/*.css')
        .pipe(postcss(processors))

    .pipe(gulp.dest('app/'));
})

gulp.task('watch', function() {
    gulp.watch('app/styles/**/*.css', ['prefix'])
})
gulp.task('sync', function() {
    var files = [
        'app/**/upload.html',
        'app/styles/**/*.css',
        'app/img/**/*.png',
        'app/js/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
});
gulp.task('copy', function() {
    // gulp.src('app/js/entry/**/*.js')
    //     .pipe(gulp.dest('../js/entry'));
    // gulp.src('app/js/lib/**/*.js')
    //     .pipe(gulp.dest('../js/lib')); 
    return gulp.src('app/js/entry/**/prompt.js')
        .pipe(gulp.dest('app/js/entry'));
})
gulp.task('copyCSS', function() {
    return gulp.src('app/styles/**/*.css')
        .pipe(gulp.dest('../styles'));
});

gulp.task('babel', function() {
    // gulp.watch(['app/js/entry/upload.js'], function() {
    return gulp.src(['app/js/entry/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('../js/entry'));

    // })


});
gulp.task('copyJS', function() {
    // gulp.watch(['app/js/**/*.js'], function() {
    //     gulp.src('app/js/entry/**/*.js')
    //         .pipe(babel({
    //             presets: ['es2015']
    //         }))
    //         .pipe(gulp.dest('../js/entry'));
    //     gulp.src('app/js/lib/**/*.js')
    //         .pipe(gulp.dest('../js/lib'));
    return gulp.src('app/js/lib/**/*.js')
        .pipe(gulp.dest('../js/lib'))

});
gulp.task('eslint', function() {
    return gulp.src(['app/js/entry/upload.js'])
        .pipe(eslint({
            "parser": "babel-eslint",
            "rules": {
                "strict": 0
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})
gulp.task('rjs', function() {
    return gulp.src('../js/**/*.js')
        .pipe(amdOptimize("../js/entry/upload", {
            paths: {
                'jquery': '../js/lib/jQuery',
                'iscroll': '../js/lib/iscroll',
                'modal': '../js/lib/jquery.simplemodal',
                'prompt': '../js/entry/function/prompt', //提示模块
                'utility': '../js/entry/utility/utility', //基本工具函数
                'header': '../js/entry/header', 
                'fileupload': "../js/lib/plupload.full.min",
                'md5': "../js/lib/spark-md5.min",
                'encryption': "../js/entry/function/encryption"
            }
        }))
        .pipe(concat("upload.js")) //合并  
        .pipe(rename("upload.js")) //重命名  
        // .pipe(uglify()) //压缩  
        .pipe(gulp.dest('../js/entry')) //输出保存 

});
gulp.task('compile', function() {
    gulp.watch(['app/js/**/*.js'], ['babel', 'rjs']);
});
gulp.task('default', ['sync', 'watch']);
