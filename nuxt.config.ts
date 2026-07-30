import { vite as vidstack } from 'vidstack/plugins'

export default defineNuxtConfig({
	ssr: false,
	sourcemap: true,

	modules: [
		'@nuxt/icon',
		'vue3-carousel-nuxt',
		'vuetify-nuxt-module'
	],

	// vidstack renders web components (media-*)
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith('media-')
		}
	},

	vite: {
		plugins: [
			vidstack()
		],
		define: {
			'process.env.DEBUG': false
		},
		build: {
			target: 'esnext'
		}
	},

	nitro: {
		esbuild: {
			options: {
				target: 'esnext'
			}
		}
	},

	app: {
		head: {
			meta: [
				{charset: 'utf-8'}
			]
		}
	},

	css: ['@/assets/css/styles.css'],

	vuetify: {
		vuetifyOptions: {
			theme: {
				defaultTheme: 'dark'
			},
			icons: {
				defaultSet: 'mdi-svg'
			}
		}
	},

	icon: {
		customCollections: [
			{prefix: 'bp', dir: './assets/icons'}
		]
	},

	devServer: {
		port: 81
	},

	devtools: {
		enabled: true
	},

	compatibilityDate: '2025-01-17'
})
