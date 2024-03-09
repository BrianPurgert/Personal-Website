import { defineNuxtPlugin } from '#app'
import { Plugin }           from 'vue-responsive-video-background-player'
import VideoBackground      from 'vue-responsive-video-background-player'

export default defineNuxtPlugin((nuxtApp: any) => {
	nuxtApp.vueApp.use(Plugin)
	nuxtApp.vueApp.component('VideoBackground', VideoBackground)
	nuxtApp.vueApp.config.compilerOptions = {
		isCustomElement: (tag: string) => tag === 'VideoBackground'
	}
})


