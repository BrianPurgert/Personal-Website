

<template>
  <v-timeline align="start" line-inset="12">
      <v-timeline-item dot-color="cyan" size="small">
          <template v-slot:opposite>
              <div class="pt-1 headline font-weight-bold text-cyan" v-text="1992"></div>
          </template>
          <div>
              <h2 :class="`mt-n1 headline font-weight-light mb-4 text-amber`">
                  heading
              </h2>
              <div>
                  body
              </div>
          </div>
      </v-timeline-item>
      <v-timeline-item size="x-large" line-inset="25" class="twixer" dot-color="transparent">
          <template v-slot:icon>
              <v-avatar image="/twixer/twixer_icon.svg" size="130%" rounded="0"></v-avatar>
          </template>
          <template v-slot:opposite>
              <div class="pt-1 headline font-weight-bold text-cyan" v-text="2000"></div>
          </template>
          <v-card class="elevation-2">
              <v-card-title class="text-h5">
                  Twixer Chrome Extension
              </v-card-title>
              <v-card-text>
                  <img src="/twixer/twixer_logo.svg" >
                  <img src="/twixer/sidebar.png" >

              </v-card-text>
          </v-card>
      </v-timeline-item>


  </v-timeline>
</template>

<script>
export default {
  name: 'ProjectsTimeline',
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ]
  })
}

</script>

<style>
.twixer .v-timeline-divider__dot {
  background-color: transparent !important;
}
</style>