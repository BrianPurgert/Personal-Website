<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
    >


    </v-row>
    <v-row align="center" justify="center">
      <v-card
          v-bind="props"
          class="mx-auto pa-6"
      >
        <v-progress-linear indeterminate color="cyan" class="ma-0 pa-0 position-absolute"></v-progress-linear>
        <v-card-title class="text-h4 bp-shadow shadow-red text-center">
          <Icon name="emojione-v1:sparkles" size="50" class="mr-1"></Icon>
          {{ currentDate() }}
        </v-card-title>

      </v-card>
      <v-col cols="auto">

        <v-card class="mx-auto" variant="elevated">
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Universal Website Parser</div>
              <div class="text-h6 mb-1"></div>
              <div class="text-caption">

              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn href="https://turingsinterface.com/" target="_blank" variant="text">Website</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>
<script setup>


function currentDate() {
  const current = new Date()
  const date = current.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  }).replace(',', '')
  return date
}

</script>