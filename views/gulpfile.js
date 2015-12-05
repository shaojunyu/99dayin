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

gulp.task('babel', ['copy'], function() {
    gulp.watch(['app/js/entry/upload.js'], function() {
        return gulp.src(['app/js/entry/upload.js', 'app/js/entry/**/prompt.js', 'app/js/entry/function/*.js'])
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('../js/entry'));

    })


});
gulp.task('copyJS', function() {
    gulp.watch(['app/js/**/*.js'], function() {
        gulp.src('app/js/entry/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('../js/entry'));
        gulp.src('app/js/lib/**/*.js')
            .pipe(gulp.dest('../js/lib'));
        // gulp.src('app/styles/**/*.css')
        //     .pipe(gulp.dest('../h5Games/styles'));
        //     gulp.src('app/index.html')
        //         .pipe(rename("index.ejs"))
        //         .pipe(gulp.dest('../h5Games/views'));
    });
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
gulp.task('rjs', function () {  
    gulp.src('./src/js/**/*.js')  
        .pipe(amdOptimize("main", {  
            paths: {  
                "jquery": "../../libs/jquery/dist/jquery.min",  
                "jquery.serializeJSON": "../../libs/jquery.serializeJSON/jquery.serializejson.min",  
                "sug": "src/js/suggestion/suggestion",  
                "validate": "../util/src/js/util/validate",  
                "urlParam": "../util/src/js/util/url.param"  
            },  
            shim: {  
                "jquery.serializeJSON": ['jquery']  
            }  
        }))  
        .pipe(concat("index.js"))           //合并  
        .pipe(gulp.dest("dist/js"))          //输出保存  
        .pipe(rename("index.min.js"))          //重命名  
        .pipe(uglify())                        //压缩  
        .pipe(gulp.dest("dist/js"));         //输出保存  
});  
gulp.task('default', ['sync', 'watch']);
