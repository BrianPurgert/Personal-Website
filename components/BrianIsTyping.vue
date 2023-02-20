<style >

@font-face{
	font-family: "tesla";
	src:         url("https://brianpurgert2.com/fonts/tesla.woff2") format("woff2");
}

svg.logo{
	/*max-width:        120%;*/
	display:          block;
	font-family:      "tesla", cursive;
	justify-content:  center;
	align-content:    center;
	font-style:       italic;
	background-color: aquamarine;
}

.text-copy{
	animation:         stroke-offset 10s infinite linear alternate;
	fill:              #bd2c44;
	stroke:            #2975a8;
	stroke-dasharray:  0 10 20;
	stroke-dashoffset: -50%;
	text-shadow:       3px 3px 2px rgba(24, 24, 27, 0.8);
}

.b-top{
	fill:        #bd2c44;
	text-shadow: none;
}

.text-copy:nth-child(1){
	animation-delay: -1s;
}

.text-copy:nth-child(2){
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100%{
		stroke-dashoffset: 50%;
	}
}

</style >
<template >
	<svg class = "logo" viewBox = "0 0 170 25" >
		<symbol id = "s-text" >
			<text class = "b2" x = "5" y = "16" >b</text >
			<text class = "b2" x = "5" y = "16" >p</text >
			<text id = "replace_me_plz" class = "word" x = "18" y = "16" >
				rian purgert
			</text >
		</symbol >
		<g class = "g-ants" >
			<use xlink:href = "#s-text" class = "text-copy" ></use >
			<use xlink:href = "#s-text" class = "text-copy" ></use >
			<use xlink:href = "#s-text" class = "text-copy" ></use >
			<use xlink:href = "#s-text" class = "text-copy" ></use >
			<use xlink:href = "#s-text" class = "text-copy" ></use >
		</g >
		<text class = "b-top" x = "5" y = "16" >b</text >
	</svg >

	<!--	<h1 >I'm </h1 >-->
	<TypewriterEffect
			:strings = "['rian','urgert','brian purgert','   Computer Engineer']"
			class = "logo"
			delay = "50"
			wrapperClassName = "bp-wrapper"
	></TypewriterEffect >

</template >


<script >
import TypewriterEffect from 'vue-typewriter-effect'


export default {
	name: 'brian-is-typing', components: {TypewriterEffect}
}


</script >