<script setup>
    const theme = useTheme()
    const app = useNuxtApp()
</script>
<template>
	<v-container fluid>
		<brian-is-typing></brian-is-typing>
	</v-container>

	<projects-timeline/>

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