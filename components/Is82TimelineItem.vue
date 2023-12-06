<template>
  <v-timeline-item>

    <v-container>
      <v-card
          id="is82"
          class="pa-2 ma-0"
          width="600"
      >
        <v-carousel
            continuous="true"
            cycle="true"
            hide-delimiters
            hideDelimiterBackground="true"
            class="rounded"
        >
          <v-carousel-item
              cover
              src="/is82/CIMG0367.JPG"
          ></v-carousel-item>
          <v-carousel-item
              cover
              src="/is82/2004_1.jpg"
          ></v-carousel-item>
          <v-carousel-item
              cover
              src="/is82/2004.jpg"
          ></v-carousel-item>

          <v-carousel-item
              cover
              src="/is82/2004_2.jpg"
          ></v-carousel-item>
          <v-carousel-item
              cover
              src="/is82/addict.jpg"
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
      <img src="/is82/bf1942.png" style='max-width: 100px'/>
    </template>
  </v-timeline-item>
</template>
<script setup>
function yearsAgo() {
  const current = new Date()
  const date = current.toLocaleDateString('en-US', {
    year: 'numeric',
  }) - 2004
  return date
}
</script>