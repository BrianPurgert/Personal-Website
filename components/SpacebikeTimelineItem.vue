<template>
  <v-timeline-item>
    <v-container>

      <ClientOnly fallback-tag="span">
        <v-card class="elevation-5 pa-2" width="600">
          <VideoBackground
              objectFit="fill"
              src="/SpaceBike/gameplay_space_bike_trimmed.mp4"
              style="min-height: 337px;"
          >
            <v-card-title class="video-overlay-text">SpaceBike</v-card-title>
          </VideoBackground>
          <nuxt-icon class="google_installs" filled name="google_installs"></nuxt-icon>
        </v-card>
      </ClientOnly>

    </v-container>
    <template v-slot:icon>
      <nuxt-icon filled name="spacebike_icon_new" style='font-size: 5em'/>
    </template>
    <template v-slot:opposite>
      <div
          class="bp-year"
      >
        17/yrs
      </div>
    </template>
  </v-timeline-item>
</template>

<script setup>
</script>