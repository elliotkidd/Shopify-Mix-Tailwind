module.exports = {
	theme: {
		fontFamily: {
			body: ['Gravity', 'sans-serif'],
		},

		extend: {
			colors: {
				primary: '#7EDDD3',
				dark: '#1E1A1B',
				grey: '#CBCBCB',
				light: '#ededed',
				white: '#ffffff',
			},
			height: {
				'2px': '2px',
			},
			transitionDelay: {
				'0': '0ms',
			},
		},
	},
	variants: {
		opacity: ['hover', 'group-hover', 'responsive'],
		display: ['hover', 'group-hover', 'responsive'],
		scale: ['hover', 'group-hover', 'responsive'],
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
	purge: false,
};
