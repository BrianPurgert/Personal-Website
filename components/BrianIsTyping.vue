<template >
	<svg class = "logo" viewBox = "0 0 170 25" >
		<symbol id = "s-text" >
			<text class = "b2" x = "5" y = "16" >b</text >
			<text class = "b2" x = "5" y = "16" >p</text >
			<text class = "word" x = "18" y = "16" >
				{{ text }}
			</text >
		</symbol >
		<g class = "g-ants" >
			<use class = "text-copy" href = "#s-text" ></use >
			<use class = "text-copy" href = "#s-text" ></use >
			<use class = "text-copy" href = "#s-text" ></use >
			<use class = "text-copy" href = "#s-text" ></use >
			<use class = "text-copy" href = "#s-text" ></use >
		</g >
		<text class = "b-top" x = "5" y = "16" >b</text >
	</svg >
</template >


<script >
import TypewriterEffect from 'vue-typewriter-effect'

export default {
	name: 'brian-is-typing', components: {
		TypewriterEffect
	}, data() {
		return {
			text: 'rian purgert'
		}
	}, mounted() {
		this.$nextTick(() => {
			this.text = 'rian purgert'
		})
	}


}
</script >