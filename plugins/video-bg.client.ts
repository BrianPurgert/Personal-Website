import { defineNuxtPlugin }      from '#app'
import { Plugin as VideoPlugin } from 'vue-responsive-video-background-player'
import VideoBackgroundComponent  from 'vue-responsive-video-background-player'

const VIDEO_BACKGROUND_TAG = 'VideoBackground'

export default defineNuxtPlugin((nuxtApp: any) => {
	registerVideoPlugin(nuxtApp)
	registerVideoBackgroundComponent(nuxtApp)
	configureCustomElement(nuxtApp)
})

function registerVideoPlugin(nuxtApp: any) {
	nuxtApp.vueApp.use(VideoPlugin)
}

function registerVideoBackgroundComponent(nuxtApp: any) {
	nuxtApp.vueApp.component(VIDEO_BACKGROUND_TAG, VideoBackgroundComponent)
}

function configureCustomElement(nuxtApp: any) {
	nuxtApp.vueApp.config.compilerOptions = {
		isCustomElement: (tag: string) => tag === VIDEO_BACKGROUND_TAG
	}
}