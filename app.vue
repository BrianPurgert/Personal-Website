<template>
  <v-app :theme="color">
    <v-app-bar>

        <template v-slot:prepend>
            <img src="/bp.png" height="38" class="mr-2" alt="BP">
        </template>


      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="color === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
        ></v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container>
          <nuxt-page />
      </v-container>

        <v-footer color="transparent" class="pt-5 pb-5">

        </v-footer>
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
