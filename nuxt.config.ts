// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt-alt/vuetify','nuxt-svgo','nuxt-icons','nuxt-icon'],
  vuetify: {
    pluginOptions: {
      styles: 'sass',
    },
    vuetifyOptions: {
      blueprint: 'md3',
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
});
