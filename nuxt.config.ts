// import { transformAssetUrls } from 'vite-plugin-vuetify'
import { vite as vidstack } from 'vidstack/plugins'

export default defineNuxtConfig({
 vue: {
					compilerOptions: {
									isCustomElement: (tag) => tag.startsWith('media-')
					}
	},

 extends: [],

 // ssr: false,
	sourcemap: true,

 imports: {
					autoImport: true,
					injectAtEnd: true
	},

 vite: {
					plugins: [
									// Include filter to only check specific files for components and styles.
									vidstack()
					],
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
					port: 81
	},

 features: {
					inlineStyles: false
	},

 modules: [


					'@nuxt/icon',
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
					enabled: false
	},

 compatibilityDate: '2025-01-17'
})
