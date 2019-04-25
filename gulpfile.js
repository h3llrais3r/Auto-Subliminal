var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var stylelint = require('gulp-stylelint');
var stylelintFormatter = require('stylelint-formatter-table');
var log = require('fancy-log');
var del = require('del');

/*************
 Configuration
 *************/

var vendor = {
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
        'node_modules/pnotify/dist/iife/PNotify.js',
        'node_modules/pnotify/dist/iife/PNotifyButtons.js',
        'node_modules/pnotify/dist/iife/PNotifyDesktop.js',
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
        'node_modules/pnotify/dist/PNotifyBrightTheme.css',
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

/*************
 Compile tasks
 *************/

gulp.task('compile:app_scss', function () {
    return gulp.src('web/static/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

/************
 Bundle tasks
 ************/

gulp.task('bundle:vendor_js', function () {
    log.info('Bundle vendor js:');
    log.info(vendor.js);
    return gulp.src(vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('bundle:vendor_css', function () {
    log.info('Bundle vendor css:');
    log.info(vendor.css);
    return gulp.src(vendor.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('build'));
});

/************
 Minify tasks
 ************/

gulp.task('minify:app_css', function () {
    return gulp.src('build/autosubliminal.css')
        .pipe(rename('autosubliminal.min.css'))
        .pipe(clean_css())
        .pipe(gulp.dest('build'));
});

gulp.task('minify:vendor_js', function () {
    return gulp.src('build/vendor.js')
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('minify:vendor_css', function () {
    return gulp.src('build/vendor.css')
        .pipe(rename('vendor.min.css'))
        .pipe(clean_css())
        .pipe(gulp.dest('build'));
});

/**********
 Clean task
 **********/

var cleanup_sources = [
    'build',
    'web/static/css/autosubliminal.css',
    'web/static/css/autosubliminal.min.css',
    'web/static/js/vendor.js',
    'web/static/js/vendor.min.js',
    'web/static/css/vendor.css',
    'web/static/css/vendor.min.css',
    'web/static/images/vendor',
    'web/static/fonts'
];

gulp.task('clean', function () {
    log.info('Clean files/folders:');
    log.info(cleanup_sources);
    return del(cleanup_sources);
});

/**********
 Copy tasks
 **********/

gulp.task('copy:app_css', function () {
    return gulp.src(['build/autosubliminal.css', 'build/autosubliminal.min.css'])
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('copy:vendor_js', function () {
    return gulp.src(['build/vendor.js', 'build/vendor.min.js'])
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('copy:vendor_css', function () {
    return gulp.src(['build/vendor.css', 'build/vendor.min.css'])
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('copy:vendor_images', function () {
    return gulp.src(vendor.images)
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
        .pipe(gulp.dest('web/static/fonts'));
});

/*****************
 Application tasks
 ****************/

gulp.task('app_css', gulp.series('compile:app_scss', 'minify:app_css', 'copy:app_css'));

gulp.task('app', gulp.series('app_css'));

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
    return gulp.src('web/static/scss/*.scss')
        .pipe(stylelint({
            reporters: [{
                formatter: stylelintFormatter,
                console: true
            }]
        }));
});

gulp.task('watch:scss-compile', function () {
    return gulp.src('web/static/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('watch:scss', function () {
    return watch('web/static/scss/*.scss', gulp.parallel('watch:scss-stylelint', 'watch:scss-compile'));
});

gulp.task('watch:js-eslint', function () {
    return gulp.src(['web/static/js/*.js', '!web/static/js/vendor*.js'])
        .pipe(eslint())
        .pipe(eslint.format('table'));
});

gulp.task('watch:js', function () {
    return watch('web/static/js/*.js', gulp.series('watch:js-eslint'));
});

gulp.task('watch', gulp.parallel('watch:scss', 'watch:js'));

/************
 Default task
 ************/

gulp.task('default', gulp.series('build'));