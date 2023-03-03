<script setup>
    const theme = useTheme()
    const app = useNuxtApp()
</script>
<template>
	<!-- landing section -->
	<v-container fluid>

		<brian-is-typing></brian-is-typing>

	</v-container>
	<!-- projects -->
	<section class = "grey lighten-5 partners pa-3">
		<projects-timeline/>
	</section>
	<!-- features -->
	<section class = "white text-center">
		<v-container>
			<v-row>
				<v-col>
				</v-col>
			</v-row>
		</v-container>
	</section>
	<section class = "grey lighten-5 pa-5">
	</section>
	<section class = "white pa-5"></section>
	<section class = "white text-center pt-2">
		<v-container>
		</v-container>
		<v-divider class = "mt-2"></v-divider>
	</section>
</template>
<script>
    import ProjectsTimeline from '../components/ProjectsTimeline.vue'
    import BrianIsTyping from '~/components/BrianIsTyping.vue'

    export default {
        components: {
            ProjectsTimeline, BrianIsTyping
        }, data() {
            return {
                values: 'values'
            }
        }
    }
</script>