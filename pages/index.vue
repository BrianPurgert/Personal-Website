<script setup >
import BrianIsTyping from '~/components/BrianIsTyping.vue'
import VIframe       from '~/pages/VIframe.vue'

const theme = useTheme()
const app = useNuxtApp()

</script >


<template >
	<div >
		<!-- landing section -->
		<v-row align = 'center' >
			<v-col >
				<v-alert prominent border = "bottom" text = "" type = "info" variant = "tonal" >

					<h4 ><strong >Hi my name is Brian Brian and this is my portfolio </strong ></h4 >

					<li >This site is a work in progress</li >
					<li >I'm looking for a full-time position</li >
					<p >my skills and passion are in app development,full stack web development, anything within the AI field</p >

					<li >I live Lakeland, I'm willing to relocate around 100 miles</li >

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

				<!--                <v-iframe/>-->
				<v-alert prominent border = "bottom" text = "" type = "info" variant = "tonal" >
					C
					<nuxt-link to = "https://codepen.io/BrianPurgert/pen/QWVWZwg" >
						<Icon name = "fa-brands:codepen" />
						CodePen
					</nuxt-link >
				</v-alert >
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
