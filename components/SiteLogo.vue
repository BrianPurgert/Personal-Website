<template >

	  <svg
			class = "logo ma-auto" viewBox = "0 0 140 27"
	  >
			<symbol id = "s-text" >
				  <text class = "b2" x = "5" y = "12" >b</text >
				  <text class = "b2" x = "5" y = "12" >p</text >
				  <text x = "18" y = "12" >rian</text >
				  <text x = "15" y = "23" >purgert</text >
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

<style scoped >

svg.logo{
	font-family: "Tesla", cursive;
	font-size:   1.1rem;
	font-style:  italic;
	max-height:  unset;

	margin:      0 auto;
	white-space: break-spaces;
}

.text-copy{
	animation:                 stroke-offset 4s infinite linear alternate;
	animation-iteration-count: infinite;
	text-shadow:               -8px -4px rgba(20, 20, 21, 0.8);
	fill:                      rgb(189, 44, 68);
	stroke:                    rgb(41, 117, 168);
	stroke-linecap:            round;
	stroke-linejoin:           arcs;
	stroke-width:              0.4;
	stroke-dasharray:          20 500 100;
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
	text-shadow:     3px 3px 0 rgba(7, 7, 7, 0.73), -2px 1px 0 rgba(21, 21, 21, 0.75);
}

@keyframes stroke-offset{
	100%{
		stroke-dashoffset: 0;
	}
}
</style >
