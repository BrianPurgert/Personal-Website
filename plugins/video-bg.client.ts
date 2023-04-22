import { defineNuxtPlugin } from '#app'

// @ts-ignore
import { Plugin } from 'vue-responsive-video-background-player'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Plugin)
})