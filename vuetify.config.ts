import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  ssr: {
    clientWidth: 100,
  },
  defaults: {
    VBtn: { color: 'blue' },
  },
  aliases: {
    MyBadge: 'VBadge',
  },
  directives: ['ClickOutside', 'Resize', 'Ripple'],
  components: ['VDialog', 'VExpansionPanel', 'VExpansionPanelText', 'VExpansionPanelTitle'],
  // labComponents: ['VDataTable', 'VDatePickerControls', 'VDatePickerHeader'],
  blueprint: md3,

  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
      },
      dark: {
        dark: true,
      },
    },
  },
  date: {

    adapter: 'vuetify',
  },
  icons: {


    defaultSet: 'unocss-mdi',


  },
})
