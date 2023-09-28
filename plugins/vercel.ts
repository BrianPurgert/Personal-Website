import { defineNuxtPlugin } from "#app"
import { inject } from "@vercel/analytics"


export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(inject)
})

