var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
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
        'node_modules/pnotify/src/pnotify.js',
        'node_modules/pnotify/src/pnotify.buttons.js',
        'node_modules/pnotify/src/pnotify.desktop.js',
        // bootstrap
        'node_modules/bootstrap/dist/js/bootstrap.js',
        // bootstrap hover dropdown
        'node_modules/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
        // bootstrap toggle
        'node_modules/bootstrap-toggle/js/bootstrap-toggle.js'
    ],
    // ATTENTION: please keep files in correct order (f.e. bootstrap is default style so it must be loaded first!)
    css: [
        // bootstrap
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css',
        // bootstrap toggle
        'node_modules/bootstrap-toggle/css/bootstrap-toggle.css',
        // tablesorter
        'node_modules/tablesorter/dist/css/jquery.tablesorter.pager.min.css',
        // pnotify
        'node_modules/pnotify/src/pnotify.brighttheme.css',
        'node_modules/pnotify/src/pnotify.buttons.css',
        'node_modules/pnotify/src/pnotify.css',
        // font awesome
        'node_modules/font-awesome/css/font-awesome.css'
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

/************
 Bundle tasks
 ************/

gulp.task('bundle:vendor_js', function () {
    log.info('Bundle vendor js:');
    log.info(vendor.js);
    return gulp.src(vendor.js)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle:vendor_css', function () {
    log.info('Bundle vendor css:');
    log.info(vendor.css);
    return gulp.src(vendor.css)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist'));
});

/************
 Minify tasks
 ************/

gulp.task('minify:vendor_js', function () {
    return gulp.src('dist/vendor.js')
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify:vendor_css', function () {
    return gulp.src('dist/vendor.css')
        .pipe(rename('vendor.min.css'))
        .pipe(clean_css())
        .pipe(gulp.dest('dist'));
});

/**********
 Clean task
 **********/

var cleanup_sources = [
    'dist',
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

gulp.task('copy:vendor_js', function () {
    return gulp.src(['dist/vendor.js', 'dist/vendor.min.js'])
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('copy:vendor_css', function () {
    return gulp.src(['dist/vendor.css', 'dist/vendor.min.css'])
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

/************
 Vendor tasks
 ************/

gulp.task('vendor_js', gulp.series('bundle:vendor_js', 'minify:vendor_js', 'copy:vendor_js'));
gulp.task('vendor_css', gulp.series('bundle:vendor_css', 'minify:vendor_css', 'copy:vendor_css'));
gulp.task('vendor_images', gulp.series('copy:vendor_images'));
gulp.task('vendor_fonts', gulp.series('copy:vendor_fonts'));

/************
 Install task
 ************/

gulp.task('install', gulp.series('vendor_js', 'vendor_css', 'vendor_images', 'vendor_fonts'));

/**********
 Build task
 **********/

gulp.task('build', gulp.series('clean', 'install'));

/************
 Default task
 ************/

gulp.task('default', gulp.series('build'));