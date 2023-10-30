<script setup>
useSeoMeta({
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: 'https://openclipart.org/image/800px/167281',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
import CurrentProjects from "~/pages/CurrentProjects.vue";

if (process.client) {
  const consoleStyles = `color: greenyellow;font-size: 15px;`
  console.log('%cSource Code: https://github.com/BrianPurgert/Personal-Website', consoleStyles)
}

function currentDate() {
  const current = new Date()
  const date = current.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(',', '')
  return date
}

const variants = ['elevated', 'elevated', 'elevated', 'elevated', 'elevated']

</script>

<template>
  <brian-is-typing></brian-is-typing>
  <projects-timeline/>


  <v-hover v-slot="{ isHovering, props }">

    <v-card
        v-bind="props"
        :elevation="isHovering ? 24 : 6"
        class="mx-auto pa-6"
    >
      <v-progress-linear indeterminate color="cyan" class="ma-0 pa-0 position-absolute"></v-progress-linear>
      <v-card-title class="text-h4 bp-shadow shadow-red text-center">
        <Icon name="emojione-v1:sparkles" size="50" class="mr-1"></Icon>
        {{ currentDate() }}
      </v-card-title>

    </v-card>
  </v-hover>

  <currentProjects/>
  <div class="my-6"></div>


</template>
