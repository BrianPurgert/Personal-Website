// import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	extends: [],
	// ssr: false,
	sourcemap: true,
	imports: {
		autoImport: true,
		injectAtEnd: true
	},


	vite: {
		clearScreen: false,
		define: {
			'process.env.DEBUG': false
		},
		build: {
			target: 'esnext'
		},
		vue: {
			// template: {transformAssetUrls},
			script: {
				propsDestructure: true
			}
		}
	},
	routeRules: {
		'/no-ssr': {ssr: false}
	},
	nitro: {
		esbuild: {
			options: {
				target: 'esnext'
			}
		}
	},
	app: {
		baseURL: '/',
		head: {
			meta: [
				{charset: 'utf-8'}
			]
		}
	},
	css: ['@/assets/css/styles.css'],
	future: {
		typescriptBundlerResolution: false
	},

	devServer: {
		port: 80
	},
	features: {
		inlineStyles: false
	},


	modules: [

		'nuxt-icons',
		'nuxt-icon',
		'vue3-carousel-nuxt',
		'@nuxt/content',
		'vuetify-nuxt-module'
	],
	vuetify: {
		moduleOptions: {

			ssrClientHints: {
				reloadOnFirstRequest: false,
				prefersColorScheme: true,
				prefersColorSchemeOptions: {
					useBrowserThemeOnly: false
				},
				viewportSize: true
			}
			// styles: { configFile: 'assets/custom-vuetify.scss' },
		}
	},


	experimental: {
		payloadExtraction: false,
		typedPages: false,
		watcher: 'chokidar-granular'
	},
	devtools: {
		enabled: true
	}
})