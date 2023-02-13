<template>
  <v-timeline align="start">
    <v-timeline-item
      dot-color="cyan"
      size="small"
    >
      <template v-slot:opposite>
        <div
          class="pt-1 headline font-weight-bold text-cyan"
          v-text="1992"
        ></div>
      </template>

      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-amber`">
          Lorem ipsum
        </h2>
        <div>
          hi
        </div>
      </div>
    </v-timeline-item>
      <v-timeline-item size="large">
          <template v-slot:icon>
              <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
          </template>
          <template v-slot:opposite>
              <div class="pt-1 headline font-weight-bold text-cyan" v-text="2000"></div>
          </template>
          <v-card class="elevation-2">
              <v-card-title class="text-h5">
                  SpaceBike
              </v-card-title>
              <v-card-text>SpaceBike</v-card-text>
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

<style scoped>

</style>