import { defineNuxtPlugin } from "#app"
import { Plugin } from "vue-responsive-video-background-player"

export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(Plugin)
})
