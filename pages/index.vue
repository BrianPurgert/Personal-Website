<script setup>
const theme = useTheme();
const app = useNuxtApp();

const foo = () => {
  theme.themes.value['light'].colors.primary = '#000000';
  theme.themes.value['dark'].colors.primary = '#000000';
  console.log(app);
};
</script>

<template>
  <div>
    <v-btn color="primary" @click="foo" class="ma-3">click me</v-btn>
  </div>
</template>
