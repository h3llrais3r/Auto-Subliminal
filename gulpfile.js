var gulp = require('gulp');
var gulp_clean_css = require('gulp-clean-css');
var gulp_concat = require('gulp-concat');
var gulp_copy = require('gulp-copy');
var gulp_rename = require('gulp-rename');
var gulp_uglify = require('gulp-uglify');
var gulp_util = require('gulp-util');
var del = require('del');

/*************
 Configuration
 *************/

var vendor = {
    // ATTENTION: please keep files in correct order (f.e. bootstrap needs jquery so jquery must be loaded before!)
    js: [
        // jquery
        'node_modules/jquery/dist/jquery.js',
        // jquery ui
        'node_modules/jquery-ui-dist/jquery-ui.js', // IS THIS NEEDED? PERHAPS FOR MOBILE?
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
    ],
    // Mobile setup
    mobile: {
        js: [
            // jquery
            'node_modules/jquery/dist/jquery.js',
            // jquery mobile
            'node_modules/jquery-mobile/dist/jquery.mobile.js'
        ],
        css: [
            // jquery mobile
            'node_modules/jquery-mobile/dist/jquery.mobile.css',
            'node_modules/jquery-mobile/dist/jquery.mobile.theme.css'
        ],
        images: [
            'node_modules/jquery-mobile/dist/images/**/*'
        ]
    },
};

/************
 Bundle tasks
 ************/

gulp.task('bundle:vendor_js', function () {
    gulp_util.log('Bundle vendor js:');
    gulp_util.log(vendor.js);
    return gulp.src(vendor.js)
        .pipe(gulp_concat('vendor.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle:vendor_css', function () {
    gulp_util.log('Bundle vendor css:');
    gulp_util.log(vendor.css);
    return gulp.src(vendor.css)
        .pipe(gulp_concat('vendor.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle:vendor_mobile_js', function () {
    gulp_util.log('Bundle vendor_mobile js:');
    gulp_util.log(vendor.mobile.js);
    return gulp.src(vendor.mobile.js)
        .pipe(gulp_concat('vendor.mobile.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle:vendor_mobile_css', function () {
    gulp_util.log('Bundle vendor_mobile css:');
    gulp_util.log(vendor.mobile.css);
    return gulp.src(vendor.mobile.css)
        .pipe(gulp_concat('vendor.mobile.css'))
        .pipe(gulp.dest('dist'));
});

/************
 Minify tasks
 ************/

gulp.task('minify:vendor_js', ['bundle:vendor_js'], function () {
    return gulp.src('dist/vendor.js')
        .pipe(gulp_rename('vendor.min.js'))
        .pipe(gulp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify:vendor_css', ['bundle:vendor_css'], function () {
    return gulp.src('dist/vendor.css')
        .pipe(gulp_rename('vendor.min.css'))
        .pipe(gulp_clean_css())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify:vendor_mobile_js', ['bundle:vendor_mobile_js'], function () {
    return gulp.src('dist/vendor.mobile.js')
        .pipe(gulp_rename('vendor.mobile.min.js'))
        .pipe(gulp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify:vendor_mobile_css', ['bundle:vendor_mobile_css'], function () {
    return gulp.src('dist/vendor.mobile.css')
        .pipe(gulp_rename('vendor.mobile.min.css'))
        .pipe(gulp_clean_css())
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
    'web/static/fonts',
    'web/static/js/mobile/vendor.mobile.js',
    'web/static/js/mobile/vendor.mobile.min.js',
    'web/static/css/mobile/vendor.mobile.css',
    'web/static/css/mobile/vendor.mobile.min.css',
    'web/static/css/mobile/images'
];

gulp.task('clean', function () {
    gulp_util.log('Clean files/folders:');
    gulp_util.log(cleanup_sources);
    return del.sync(cleanup_sources);
});

/**********
 Copy tasks
 **********/

gulp.task('copy:vendor_js', ['minify:vendor_js'], function () {
    return gulp.src(['dist/vendor.js', 'dist/vendor.min.js'])
        .pipe(gulp.dest('web/static/js'));
});

gulp.task('copy:vendor_css', ['minify:vendor_css'], function () {
    return gulp.src(['dist/vendor.css', 'dist/vendor.min.css'])
        .pipe(gulp.dest('web/static/css'));
});

gulp.task('copy:vendor_images', function () {
    return gulp.src(vendor.images)
        .pipe(gulp.dest(function (path) {
            //gulp_util.log(JSON.stringify(path));
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

gulp.task('copy:vendor_mobile_js', ['minify:vendor_mobile_js'], function () {
    return gulp.src(['dist/vendor.mobile.js', 'dist/vendor.mobile.min.js'])
        .pipe(gulp.dest('web/static/js/mobile'));
});

gulp.task('copy:vendor_mobile_css', ['minify:vendor_mobile_css'], function () {
    return gulp.src(['dist/vendor.mobile.css', 'dist/vendor.mobile.min.css'])
        .pipe(gulp.dest('web/static/css/mobile'));
});

gulp.task('copy:vendor_mobile_images', function () {
    return gulp.src(vendor.mobile.images)
        .pipe(gulp.dest('web/static/css/mobile/images'));
});

/************
 Install task
 ************/

gulp.task('install', [
    'copy:vendor_js', 'copy:vendor_css', 'copy:vendor_images', 'copy:vendor_fonts',
    'copy:vendor_mobile_js', 'copy:vendor_mobile_css', 'copy:vendor_mobile_images'
]);

/**********
 Build task
 **********/

gulp.task('build', ['clean', 'install']);

/************
 Default task
 ************/

gulp.task('default', ['build']);