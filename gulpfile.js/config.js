/**
 * config
 * contains preferences for gulp tasks, folders, extensions et al
 */

const config = {

    // A-Z!

    // Browsersync
    // https://www.browsersync.io/docs/options
    'browserSync': {
        'proxy': process.env.APP_HOST,
        'port': 3000,
        'open': false,
        'reloadOnRestart': true,
        'notify': false,
        'reloadDelay': 0,
        'ghostMode': false // disable mirroring clicks, scrolls and forms. it’s too buggy.
    },

    // Clean
    // clean asset folders before new assets are generated
    'clean': {
        'cleanableTasks': [
            'images',
            'scripts',
            'styles',
            'svg'
        ]
    },

    // Copy
    // copy assets from source to app
    'copy': [
        {
            'title': 'SVGs',
            'src': ['./source/templates/svg/*.svg'],
            'dest': './html/assets/svg'
            //'dest': './html/theme/public/svg'
        },
        {
            'title': 'Material Icons',
            'src': ['./node_modules/material-design-icons/iconfont/*.{woff,woff2}'],
            'dest': './html/assets/fonts'
            //'dest': './html/theme/public/fonts'
        },
        {
            'title': 'Bootstrap icons',
            'src': ['./node_modules/bootstrap-sass/assets/fonts/bootstrap/*.{woff,woff2}'],
            'dest': './html/assets/fonts/bootstrap'
            //'dest': './html/theme/public/fonts/bootstrap'
        }
    ],

    // cssnano (minifies CSS)
    // http://cssnano.co/options/
    'cssnano': {
        'zindex': false,
        'discardUnused': false,
        'mergeIdents': false,
        'reduceIdents': false
    },

    // Images
    'images': {
        'sourceFiles': ['./source/images/**/*.{jpg,png,gif,svg}'],
        'destinationFolder': './html/assets/images',
        //'destinationFolder': './html/theme/public/images',
        'watchFiles': ['./source/images/**/*.{jpg,png,gif,svg}'],
        'cleanFiles': ['./html/assets/images/*.{jpg,png,gif,svg}']
        //'cleanFiles': ['./html/theme/public/images/*.{jpg,png,gif,svg}']
    },

    // Modernizr
    // https://modernizr.com/docs
    'modernizr': {
        'feature-detects': [
            'css/animations',
            'css/filters',
            'css/flexbox',
            'css/pointerevents',
            'css/transforms3d',
            'css/transitions',
            'css/vhunit',
            'css/vwunit',
            'css/backgroundblendmode'
        ],
        'options': [
            'setClasses'
        ],
        'classPrefix': ''
    },

    // Scripts
    'scripts': {
        'sourceFiles': ['./source/scripts/script.js'],
        'destinationFolder': './html/assets/js',
        //'destinationFolder': './html/theme/public/js',
        'watchFiles': ['./source/scripts/**/*.js'],
        'cleanFiles': ['./html/assets/js/*.{js,map}']
        //'cleanFiles': ['./html/theme/public/js/*.{js,map}']
    },

    // Styles
    'styles': {
        'sourceFiles': ['./source/styles/*.scss'],
        'destinationFolder': './html/assets/css',
        //'destinationFolder': './html/theme/public/css',
        'watchFiles': ['./source/styles/**/*.scss'],
        'cleanFiles': ['./html/assets/css/*.{css,map}']
        //'cleanFiles': ['./html/theme/public/css/*.{css,map}']
    },

    // SVG
    // combines SVG files to into one with <symbol> elements (»SVG sprite«)
    'svg': {
        'sourceFiles': ['./source/svg/**/*.svg'],
        'destinationFolder': './html/assets/svg',
        //'destinationFolder': './html/theme/public/svg',
        'watchFiles': ['./source/svg/**/*.svg'],
        'cleanFiles': ['./html/assets/svg/*.svg']
        //'cleanFiles': ['./html/theme/public/svg/*.svg']
    },

    // Watch
    // watches for file changes and fires up related tasks
    'watch': [
        {'images': ['images']},
        {'scripts': ['scripts']},
        {'styles': ['styles']},
        {'svg': ['svg']},
    ]
};

module.exports = config;