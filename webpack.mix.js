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
    .sourceMaps()
    .postCss('resources/css/app.css', 'public/css', [
        atImport(),
        tailwindcss('./tailwind.js')
    ])
    .sourceMaps()

console.log(JSON.stringify(process.env.NODE_ENV));

mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            })
        ]
    };
});

if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync({
        open: false,
        proxy: process.env.APP_URL + ':' + '8000'
    });
}