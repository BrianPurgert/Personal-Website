<script setup>
if (process.client) {
  const consoleStyles = `color: greenyellow;font-size: 15px;`
  console.log('%cSource Code: https://github.com/BrianPurgert/Personal-Website', consoleStyles)
}
</script>

<template>
  <brian-is-typing></brian-is-typing>
  <projects-timeline/>
  <v-card class="mx-auto elevation-2">

    <template v-slot:title>
      Recent Work
    </template>
    <template v-slot:default>
      <v-badge content="Heuristic Parser"></v-badge>
    </template>
  </v-card>
</template>
