<template >
	  <svg
			class = "logo ma-auto" viewBox = "0 0 180 27"
	  >
			<symbol id = "s-text" >
				  <text class = "b2" x = "5" y = "12" >b</text >
				  <text class = "b2" x = "5" y = "12" >p</text >
				  <text class = "" x = "18" y = "12" >
						<!--						{{ typeValue }}-->
						rian
				  </text >
				  <text class = "" x = "15" y = "23" >purgert</text >
			</symbol >
			<g class = "g-ants" >
				  <use class = "text-copy" href = "#s-text" ></use >
				  <use class = "text-copy" href = "#s-text" ></use >
				  <use class = "text-copy" href = "#s-text" ></use >
				  <use class = "text-copy" href = "#s-text" ></use >
				  <use class = "text-copy" href = "#s-text" ></use >
			</g >
			<text class = "b-top" x = "5" y = "12" >b</text >
	  </svg >
</template >
<script lang = "ts" setup >
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
	displayTextArray: {
		type: Array as () => string[],
		required: true
	}
})

const typeValue      = ref('')
let currentTextIndex = 0
let charIndex        = 0
const typingSpeed    = 200
const newTextDelay   = 300

const currentText = computed(() => props.displayTextArray[currentTextIndex])

const typeText = () => {
	if (charIndex < currentText.value.length) {
		typeValue.value += currentText.value.charAt(charIndex)
		charIndex++
	} else {
		// Prepare for the next word
		charIndex        = 0
		currentTextIndex = (currentTextIndex + 1) % props.displayTextArray.length
	}
}

onMounted(() => {
	const intervalId = setInterval(typeText, typingSpeed)

	// Adjust timeout based on how many words are present
	setTimeout(() => clearInterval(intervalId), newTextDelay + typingSpeed * props.displayTextArray.length * currentText.value.length)
})
</script >

<style scoped >
svg.logo{
	font-family: "tesla", cursive;
	font-size:   1.1rem;
	font-style:  italic;
	max-height:  12rem;
	margin:      0px auto;
}

.text-copy{
	animation:                 stroke-offset 20s infinite ease-in-out alternate;
	animation-iteration-count: 20;
	//animation-timing-function: steps(120);
	text-shadow:               -8px -4px rgba(20, 20, 21, 0.8);
	fill:                      #bd2c44;
	stroke:                    #2975a8;
	stroke-linecap:            round;
	stroke-linejoin:           arcs;
	stroke-width:              0.5%;
	stroke-dasharray:          20 60;
	stroke-dashoffset:         -100%;
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
	text-shadow:     none;
	fill:            transparent;
}

.text-copy:nth-child(5){
	animation-delay: -5s;
	text-shadow:     3px 3px 3px rgba(7, 7, 7, 0.73), -2px 1px 0px rgba(21, 21, 21, 0.75);
}

@keyframes stroke-offset{
	100%{
		stroke-dashoffset: 100%;
	}
}
</style >