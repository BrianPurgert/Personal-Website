<template>
  <v-app :theme="color">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          color === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container><nuxt-page /></v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('dark');

function onClick() {
  color.value = color.value === 'light' ? 'dark' : 'light';
}
</script>
