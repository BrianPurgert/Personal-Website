<script setup>
import BrianIsTyping from "~/components/BrianIsTyping.vue"
import VIframe from "~/pages/VIframe.vue"

const theme = useTheme()
const app = useNuxtApp()

</script>


<template>
    <div>
        <!-- landing section -->
        <section class="white pb-6">

            <v-container>

                <v-alert border="top" prominent title="Hey I'm Brian" type="info" variant="tonal">
                   <div class=""> if you're reading this <span class="font-weight-bold"> I'm still working on this site.</span>
                       but I'm in need of a job ASAP, so if you want a top tier developer, for pennies on the dollar
                       <v-btn
                               download
                               variant="tonal"
                               href="/BrianPurgert_Resume.pdf"
                               prepend-icon="mdi-download"
                               color="cyan"
                       >my contact info is in my resume</v-btn>



                   </div>
                </v-alert>

                <brian-is-typing/>

                <v-iframe/>
                <v-alert prominent border="bottom" text="..." type="error" variant="tonal">
                    above animation is in an iframe on <nuxt-link to="https://codepen.io/BrianPurgert/pen/QWVWZwg">CodePen</nuxt-link> it's what I want, just not the way I want it.
                </v-alert>


                <v-col class="landing-image" cols="12" md="6">
                </v-col>
            </v-container>
        </section>

      <h1 class="text-center">This is about to Projects</h1>
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
		return {}
	}
}
</script>
