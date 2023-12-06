<template>
  <v-timeline-item
      class="twixer"
      line-inset="0"
      size="x-large"
  >
    <template v-slot:icon>
      <v-avatar
          image="/twixer/twixer_icon.svg"
          rounded="0"
          size="150%"
      ></v-avatar>
    </template>
    <template v-slot:opposite>
      <div
          class="bp-year"
          v-text="2019"
      ></div>
    </template>
    <v-container>
      <v-card
          class="elevation-2 mx-auto" width="800"
      >
        <v-img
            cover
            height="520px"
            src="/twixer/description.png"
        >
          <img alt="twixer logo" class="h-25"
               src="/twixer/logo.svg" style="position: absolute; left:100px; bottom: 50px; ">
          <v-card-title class="video-overlay-text">Chrome Browser Extension</v-card-title>


        </v-img>


      </v-card>
    </v-container>
  </v-timeline-item>
</template>

<script setup>
</script>