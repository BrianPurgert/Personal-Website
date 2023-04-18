<script setup>
	import Skills from "~/components/Skills.vue"

	const theme = useTheme()
	const app = useNuxtApp()
</script>

<template>
	<brian-is-typing></brian-is-typing>
	<projects-timeline/>
	<skills/>
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