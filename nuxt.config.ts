// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt-alt/vuetify'],
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
