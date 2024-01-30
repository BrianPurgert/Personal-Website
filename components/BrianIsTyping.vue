<template>
  <svg
      class="logo" viewBox="0 0 170 17"
  >
    <symbol id="s-text">
      <text class="b2" x="5" y="12">b</text>
      <text class="b2" x="5" y="12">p</text>
      <text class="" x="18" y="12">
        {{ typeValue }}
      </text>
    </symbol>
    <g class="g-ants">
      <use class="text-copy" href="#s-text"></use>
      <use class="text-copy" href="#s-text"></use>
      <use class="text-copy" href="#s-text"></use>
      <use class="text-copy" href="#s-text"></use>
      <use class="text-copy" href="#s-text"></use>
    </g>
    <text class="b-top" x="5" y="12">b</text>
  </svg>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'

const typeValue = ref('')
const typeStatus = ref(false)
const typingSpeed = 100
const erasingSpeed = 100000
const newTextDelay = 200

const props = defineProps({
  displayTextArray: {
    type: Array,
    required: true
  }
})
let displayTextArrayIndex = 0
let charIndex = 0
const typeText = () => {
  if (charIndex < props.displayTextArray[displayTextArrayIndex].length) {
    typeStatus.value = true
    typeValue.value += props.displayTextArray[displayTextArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(typeText, typingSpeed)
  } else {
    typeStatus.value = false
    setTimeout(eraseText, newTextDelay)
  }
}
const eraseText = () => {
  if (charIndex > 0) {
    typeStatus.value = true
    typeValue.value = props.displayTextArray[displayTextArrayIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(eraseText, erasingSpeed)
  } else {
    typeStatus.value = false
    displayTextArrayIndex = (displayTextArrayIndex + 1) % props.displayTextArray.length
    setTimeout(typeText, typingSpeed + 50)
  }
}
onMounted(() => {
  setTimeout(typeText, newTextDelay + 200)
})
</script>
<style scoped>
svg.logo{
  font-family: "tesla", cursive;
  font-style:  italic;
  max-height:  12rem;
  font-size:   1.1rem;
  margin:      0px auto;
}

.text-copy{
  animation:         stroke-offset 20s infinite linear alternate;
  fill:              #bd2c44;
  stroke:            #2975a8;
  stroke-linecap:    round;
  stroke-linejoin:   arcs;
  stroke-width:      0.5%;
  stroke-dasharray:  20 60;
  stroke-dashoffset: -100%;
  text-shadow:       -8px -4px rgba(20, 20, 21, 0.8);
}

.b-top{

  fill: rgb(189, 44, 68);
}

.text-copy:nth-child(1){
  animation-delay: -1s;
  text-shadow:     none;

}

.text-copy:nth-child(2){
  animation-delay: -2s;
  text-shadow:     none;
  fill:            transparent;
}

.text-copy:nth-child(3){
  animation-delay: -3s;
  text-shadow:     none;

  fill:            transparent;
}

.text-copy:nth-child(4){
  animation-delay: -4s;

  fill:            transparent;
  text-shadow:     none;
}

.text-copy:nth-child(5){
  text-shadow:     3px 3px 3px rgba(7, 7, 7, 0.73), -2px 1px 0px rgba(21, 21, 21, 0.75);
  animation-delay: -5s;
}

@keyframes stroke-offset{
  100%{
    stroke-dashoffset: 100%;
  }
}
</style>