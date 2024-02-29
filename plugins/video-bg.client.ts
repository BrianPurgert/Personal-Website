import { defineNuxtPlugin } from '#app'
import { Plugin }           from 'vue-responsive-video-background-player'

export default defineNuxtPlugin((nuxtApp: any) => {
	nuxtApp.vueApp.config.compilerOptions.isCustomElement = (tag: string) => tag === 'video-background'
	nuxtApp.vueApp.use(Plugin)
})
