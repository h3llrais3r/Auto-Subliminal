const gulp = require('gulp');
const debug = require('gulp-debug');
const cached = require('gulp-cached');
const clean_css = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const stylelintFormatter = require('stylelint-formatter-table');
const log = require('fancy-log');
const del = require('del');

/*************
 Configuration
 *************/

const logPrefix = ' - ';
const debugConfig = {title: ' -'};

const vendor = {
    // ATTENTION: please keep files in correct order (f.e. bootstrap needs jquery so jquery must be loaded before!)
    js: [
        // jquery
        'node_modules/jquery/dist/jquery.js',
        // jquery countdown
        'node_modules/jquery-countdown/dist/jquery.countdown.js',
        // jquery hoverintent
        'node_modules/jquery-hoverintent/jquery.hoverIntent.js',
        // tablesorter
        'node_modules/tablesorter/dist/js/jquery.tablesorter.js',
        'node_modules/tablesorter/dist/js/jquery.tablesorter.widgets.js',
        'node_modules/tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js',
        'node_modules/tablesorter/dist/js/widgets/widget-reflow.min.js',
        // pnotify
        'node_modules/@pnotify/core/dist/PNotify.js',
        'node_modules/@pnotify/bootstrap3/dist/PNotifyBootstrap3.js',
        'node_modules/@pnotify/glyphicon/dist/PNotifyGlyphicon.js',
        'node_modules/@pnotify/mobile/dist/PNotifyMobile.js',
        'node_modules/@pnotify/desktop/dist/PNotifyDesktop.js',
        // pubsub-js
        'node_modules/pubsub-js/src/pubsub.js',
        // strftime
        'node_modules/strftime/strftime.js',
        // bootstrap
        'node_modules/bootstrap/dist/js/bootstrap.js',
        // bootstrap hover dropdown
        'node_modules/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
        // vue
        'node_modules/vue/dist/vue.js',
        // vue-lazyload
        'node_modules/vue-lazyload/vue-lazyload.js',
        // vue-simple-progress
        'node_modules/vue-simple-progress/dist/vue-simple-progress.js',
        // vue-multiselect
        'node_modules/vue-multiselect/dist/vue-multiselect.min.js'

    ],
    // ATTENTION: please keep files in correct order (f.e. bootstrap is default style so it must be loaded first!)
    css: [
        // bootstrap
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css',
        // tablesorter
        'node_modules/tablesorter/dist/css/jquery.tablesorter.pager.min.css',
        // pnotify
        'node_modules/@pnotify/core/dist/PNotify.css',
        'node_modules/@pnotify/bootstrap3/dist/PNotifyBootstrap3.css',
        'node_modules/@pnotify/mobile/dist/PNotifyMobile.css',
        'node_modules/@pnotify/desktop/dist/PNotifyDesktop.css',
        // font awesome
        'node_modules/font-awesome/css/font-awesome.css',
        // vue-multiselect
        'node_modules/vue-multiselect/dist/vue-multiselect.min.css'
    ],
    // if the folders must be in specific subfolder, adapt copy:vendor_images task!
    images: [
        // tablesorter
        'node_modules/tablesorter/dist/css/images/**/*'
    ],
    fonts: [
        // bootstrap
        'node_modules/bootstrap/dist/fonts/**/*',
        // font awesome
        'node_modules/font-awesome/fonts/**/*'
    ]
};

/***************
 Transpile tasks
 ***************/

gulp.task('transpile:app_js', function () {
    return gulp.src('web/src/js/*.js')
        .pipe(debug(debugConfig))
        .pipe(babel())
        .pipe(gulp.dest('build/app/js'));
});


/*************
 Compile tasks
 *************/

gulp.task('compile:app_scss', function () {
    return gulp.src('web/src/scss/*.scss')
        .pipe(debug(debugConfig))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('build/app/css'));
});

/************
 Bundle tasks
 ************/

gulp.task('bundle:vendor_js', function () {
    return gulp.src(vendor.js)
        .pipe(debug(debugConfig))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/vendor/js'));
});

gulp.task('bundle:vendor_css', function () {
    return gulp.src(vendor.css)
        .pipe(debug(debugConfig))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('build/vendor/css'));
});

/************
 Minify tasks
 ************/

gulp.task('minify:app_js', function () {
    return gulp.src('build/app/js/*.js')
        .pipe(debug(debugConfig))
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.js';
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/app/js'));
});

gulp.task('minify:app_css', function () {
    return gulp.src('build/app/css/*.css')
        .pipe(debug(debugConfig))
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.css';
        }))
        .pipe(clean_css())
        .pipe(gulp.dest('build/app/css'));
});

gulp.task('minify:vendor_js', function () {
    return gulp.src('build/vendor/js/*.js')
        .pipe(debug(debugConfig))
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.js';
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/vendor/js'));
});

gulp.task('minify:vendor_css', function () {
    return gulp.src('build/vendor/css/*.css')
        .pipe(debug(debugConfig))
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.css';
        }))
        .pipe(clean_css())
        .pipe(gulp.dest('build/vendor/css'));
});

/**********
 Clean task
 **********/

const cleanup_sources = [
    'build',
    'web/static/js/*.js',
    'web/static/css/*.css',
    'web/static/images/vendor',
    'web/static/fonts'
];

gulp.task('clean', function () {
    cleanup_sources.forEach(function (file) {
        log.info(`${logPrefix}${file}`);
    });
    return del(cleanup_sources);
});

/**********
 Copy tasks
 **********/

gulp.task('copy:app_js', function () {
    return gulp.src('build/app/js/*.js')
        .pipe(debug(debugConfig))
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('copy:app_css', function () {
    return gulp.src('build/app/css/*.css')
        .pipe(debug(debugConfig))
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('copy:vendor_js', function () {
    return gulp.src('build/vendor/js/*.js')
        .pipe(debug(debugConfig))
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('copy:vendor_css', function () {
    return gulp.src('build/vendor/css/*.css')
        .pipe(debug(debugConfig))
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('copy:vendor_images', function () {
    return gulp.src(vendor.images)
        .pipe(debug(debugConfig))
        .pipe(gulp.dest(function (path) {
            //log.info(JSON.stringify(path));
            // copy images in specific subfolder
            if (path.base.indexOf('tablesorter') != -1) {
                return 'web/static/images/vendor/tablesorter';
            } else {
                return 'web/static/images/vendor';
            }
        }));
});

gulp.task('copy:vendor_fonts', function () {
    return gulp.src(vendor.fonts)
        .pipe(debug(debugConfig))
        .pipe(gulp.dest('web/static/fonts'));
});

/*****************
 Application tasks
 ****************/

gulp.task('app_js', gulp.series('transpile:app_js', 'minify:app_js', 'copy:app_js'));

gulp.task('app_css', gulp.series('compile:app_scss', 'minify:app_css', 'copy:app_css'));

gulp.task('app', gulp.series('app_js', 'app_css'));

/************
 Vendor tasks
 ************/

gulp.task('vendor_js', gulp.series('bundle:vendor_js', 'minify:vendor_js', 'copy:vendor_js'));
gulp.task('vendor_css', gulp.series('bundle:vendor_css', 'minify:vendor_css', 'copy:vendor_css'));
gulp.task('vendor_images', gulp.series('copy:vendor_images'));
gulp.task('vendor_fonts', gulp.series('copy:vendor_fonts'));

gulp.task('vendor', gulp.series('vendor_js', 'vendor_css', 'vendor_images', 'vendor_fonts'));

/************
 Install task
 ************/

gulp.task('install', gulp.series('app', 'vendor'));

/**********
 Build task
 **********/

gulp.task('build', gulp.series('clean', 'install'));

/***********
 Watch tasks
 ***********/

gulp.task('watch:scss-stylelint', function () {
    return gulp.src('web/src/scss/*.scss')
        .pipe(cached('scss-stylelint'))
        .pipe(debug(debugConfig))
        .pipe(stylelint({
            reporters: [{
                formatter: stylelintFormatter,
                console: true
            }]
        }));
});

gulp.task('watch:scss-compile', function () {
    return gulp.src('web/src/scss/*.scss')
        .pipe(cached('scss-compile'))
        .pipe(debug(debugConfig))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('watch:scss', function () {
    return watch('web/src/scss/*.scss', gulp.parallel('watch:scss-stylelint', 'watch:scss-compile'));
});

gulp.task('watch:js-eslint', function () {
    return gulp.src('web/src/js/*.js')
        .pipe(cached('js-eslint'))
        .pipe(debug(debugConfig))
        .pipe(eslint())
        .pipe(eslint.format('table'));
});

gulp.task('watch:js-transpile', function () {
    return gulp.src('web/src/js/*.js')
        .pipe(cached('js-transpile'))
        .pipe(debug(debugConfig))
        .pipe(babel())
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('watch:js', function () {
    return watch(['web/src/js/*.js'], gulp.parallel('watch:js-eslint', 'watch:js-transpile'));
});

gulp.task('watch', gulp.parallel('watch:scss', 'watch:js'));

/************
 Default task
 ************/

gulp.task('default', gulp.series('build'));