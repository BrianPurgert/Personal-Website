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
                        <h1 class="display-2 mb-6">Hi, I'm </h1>


                        <p class="body-1 font-weight-bold">short description here</p>

                        <v-btn class="ml-2 " x-large nuxt :to="'/about'">
                            <v-icon left>mdi-download</v-icon>
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
