<template>
  <v-timeline-item>

    <v-container>
      <v-card
          id="is82"
          class="pa-2 ma-0"
          width="600"
      >
        <v-carousel
            continuous
            cycle
            hide-delimiters
            hideDelimiterBackground
            class="rounded"
        >
          <v-carousel-item
              v-for="(item, index) in carouselItems"
              :key="index"
              cover
              :src="`${imagePath}${item}`"
          ></v-carousel-item>

          <v-card-title>Mod Mapping with Battlecraft 1942</v-card-title>
          <v-card-subtitle>images from 2004 map I created</v-card-subtitle>
        </v-carousel>


      </v-card>


    </v-container>
    <template v-slot:opposite>
      <div
          class="bp-year"
      >
        12/yrs
      </div>
    </template>
    <template v-slot:icon>
      <img :src="`${imagePath}bf1942.png`" style='max-width: 100px'/>
    </template>
  </v-timeline-item>
</template>
<script setup>
import {ref, computed} from 'vue';

const imagePath = "/is82/"
const carouselItems = ref([
  'CIMG0367.JPG',
  '2004_1.jpg',
  '2004.jpg',
  '2004_2.jpg',
  'addict.jpg'
])

const years = computed(
    () => new Date().getFullYear() - 2004
)
</script>