<script setup>
const theme = useTheme();
const app = useNuxtApp();

</script>



<template>
    <div>
        <!-- landing section -->
        <section class="white pb-6">

            <v-container>
                <v-row no-gutters>

                    <v-col cols="12" md="6" class="mt-md-8">
                        <h3 class="display-2 mb-6">Hi my name is Brian Purgert</h3>

                        <Icon name="uil:github"/>
                        <p class="body-1 font-weight-bold">if you're reading this, I'm still working on it</p>

                        <v-btn prepend-icon="mdi-download" rounded="pill" to="/BrianPurgert_Resume.pdf">
                            My Resume
                        </v-btn>
                    </v-col>

                    <v-col cols="12" md="6" class="landing-image">
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- partners -->
        <section class="grey lighten-5 partners pa-3">
            <projects-timeline/>
        </section>

        <!-- features -->
        <section class="white text-center">
            <v-container>
                <v-row>
                    <v-col>

                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="grey lighten-5 pa-5">
        </section>

        <section class="white pa-5"></section>

        <section class="white text-center pt-2">
            <v-container>

            </v-container>
            <v-divider class="mt-2"></v-divider>
        </section>
    </div>
</template>

<script>
import ProjectsTimeline from '../components/ProjectsTimeline.vue'

export default {
	components: {
		ProjectsTimeline
	},
	data() {
		return {

		}
	}
}
</script>
