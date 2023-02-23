<script setup xmlns = "http://www.w3.org/1999/html" >
import BrianIsTyping from '~/components/BrianIsTyping.vue'
import VIframe       from '~/pages/VIframe.vue'

const theme = useTheme()
const app = useNuxtApp()

</script >
<style >
@font-face{
	font-family: "tesla";
	src:         url("https://brianpurgert2.com/fonts/tesla.woff2") format("woff2");
}

.tesla-text{
	/*display:           block;*/
	font-family:       "tesla", cursive;
	justify-content:   center;
	align-content:     center;
	font-style:        italic;
	font-size:         2.1rem;
	width:             max-content;
	animation:         stroke-offset 10s infinite linear alternate;
	color:             #bd2c44;
	text-shadow:       -1px -1px 0 #2975a8,
	                   1px -1px 0 #2975a8,
	                   -1px 1px 0 #2975a8,
	                   1px 1px 0 #2975a8;
	fill:              #bd2c44;
	stroke:            #2975a8;
	stroke-dasharray:  0 10 20;
	stroke-dashoffset: -50%;
	/*text-shadow:       3px 3px 2px rgba(24, 24, 27, 0.8);*/
}

@keyframes stroke-offset{
	100%{
		stroke-dashoffset: 50%;
	}
}

</style >


<template >
	<div >
		<!-- landing section -->
		<v-row align = 'center' >
			<v-col >
				<v-alert prominent border = "bottom" text = "" type = "info" variant = "tonal" >

					<h4 ><strong >Hi my name is Brian Brian and this is my portfolio </strong ></h4 >

					<li >This site is a work in progress!</li >
					<li >I'm looking for a full-time position</li >
					<li >my skills and passion are in app development,full stack web development, AI and IT</li >
					<li >I live Lakeland, but I'm willing to relocate</li >


					<li >my contact info is in my
						<v-btn
								download
								density = 'compact'
								size = 'small'
								variant = "tonal"
								href = "/BrianPurgert_Resume.pdf"
								prepend-icon = "mdi-download"
								color = "cyan"
								elevation = '10'
						>Resume
						</v-btn >
					</li >


				</v-alert >


				<brian-is-typing />


			</v-col >
		</v-row >

		<!-- projects -->
		<section class = "grey lighten-5 partners pa-3" >
			<projects-timeline />
		</section >

		<!-- features -->
		<section class = "white text-center" >
			<v-container >
				<v-row >
					<v-col >

					</v-col >
				</v-row >
			</v-container >
		</section >

		<section class = "grey lighten-5 pa-5" >
		</section >

		<section class = "white pa-5" ></section >

		<section class = "white text-center pt-2" >
			<v-container >

			</v-container >
			<v-divider class = "mt-2" ></v-divider >
		</section >
	</div >
</template >

<script >
import ProjectsTimeline from '../components/ProjectsTimeline.vue'


export default {
	components: {
		ProjectsTimeline
	}, data() {
		return {}
	}
}
</script >
