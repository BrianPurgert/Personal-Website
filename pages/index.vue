<script setup >
const theme = useTheme()
const app = useNuxtApp()


</script >
<style >


</style >


<template >
	<div >
		<!-- landing section -->
		<v-row align = 'center' >
			<v-col >
				<v-alert prominent border = "bottom" text = "" type = "info" variant = "tonal" >

					<h4 ><strong >Hi my name is Brian and this is my portfolio </strong ></h4 >

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
import BrianIsTyping    from '~/components/BrianIsTyping.vue'


export default {
	components: {
		ProjectsTimeline, BrianIsTyping
	}, data() {
		return {}
	}
}
</script >
