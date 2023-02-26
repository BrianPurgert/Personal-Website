<script setup >
import App                 from '~/app.vue'
import WorkInProgressAlert from '~/components/WorkInProgessAlert.vue'

const theme = useTheme()
const app = useNuxtApp()


</script >


<template >
	<work-in-progress-alert />

	<div >
		<!-- landing section -->
		<v-row align = 'baseline' >
			<!--			<v-col-->
			<!--					cols = '1'-->
			<!--					style = 'border: 2px solid #bd2c44'-->
			<!--					v-text = "values"-->
			<!--			>-->


			<!--			</v-col >-->
			<v-col align-self = 'start' cols = '12' style = 'border: 2px dotted #bd2c44' >


				<brian-is-typing />


			</v-col >

			<!--			<v-col cols = '1' style = 'border: 2px dotted rgb(189,44,68)' >-->
			<!--			</v-col >-->
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

		return {
			values: 'values'
		}
	}
}
</script >
