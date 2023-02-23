export default defineNuxtConfig({
		css: ['@/assets/css/styles.css'],
		modules: ['@nuxt-alt/vuetify', 'nuxt-svgo', 'nuxt-icons', 'nuxt-icon'],
		vuetify: {
				pluginOptions: {
						styles: 'sass'
				}, vuetifyOptions: {
						blueprint: 'md3', theme: {
								defaultTheme: 'dark'
						}
				}
		}
})
