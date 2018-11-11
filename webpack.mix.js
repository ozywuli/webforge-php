const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const atImport = require('postcss-import');

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

mix
    .js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        atImport(),
        tailwindcss('./tailwind.js')
    ]);


if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync({
        open: false,
        proxy: process.env.APP_URL + ':' + '8000'
    });
}