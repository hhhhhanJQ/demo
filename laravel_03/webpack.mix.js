let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/bootstrap.js', 'public/js')
    .js('resources/assets/js/tasktracker.js','public/vue_js')
    .js('resources/assets/test/index.js','public/test')
    // .js('karma.conf.js','public')
   .sass('resources/assets/sass/app.scss', 'public/css');
