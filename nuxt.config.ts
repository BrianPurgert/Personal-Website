export default defineNuxtConfig({
    devServer: {
        port: 80
    },
    css: ['@/assets/css/styles.css'],
    modules: ['@nuxt-alt/vuetify', 'nuxt-icons', 'nuxt-icon'],

    vuetify: {
        pluginOptions: {styles: true},
        vuetifyOptions: {
            blueprint: 'md3',
            theme: {defaultTheme: 'dark'}
        }
    },

    plugins: [
        {src: '~/plugins/vercel.ts', mode: 'client'},
        {src: '~/plugins/video-bg.client.ts', mode: 'client'}
    ]
})
