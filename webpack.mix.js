const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('assets');

mix.js('./src/app.js', 'assets');

mix.sass('./src/app.scss', 'assets')
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.config.js')],
	})
	.purgeCss({
		content: ['./src/**/*.js', './templates/**/*.liquid'],
		defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
	});

// Source maps when not in production.
if (!mix.inProduction()) {
	mix.sourceMaps();
}

// Hash and version files in production.
if (mix.inProduction()) {
	mix.version();
}
