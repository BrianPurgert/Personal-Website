<template>
    <v-app :theme="color">
        <v-app-bar border>
            <template v-slot:prepend>

                <v-img id="bp" alt="BP" class="mr-2" height="40" src="/bp.svg" to="/" width="40">
                </v-img>
            </template>
            <v-spacer></v-spacer>
            <template v-slot:append>
                <v-btn color='#afd5aa' href='https://www.linkedin.com/in/brian-purgert/'>
                    <template v-slot:prepend>
                        <Icon name="fa-brands:linkedin-in" size="1.5em"/>
                    </template>
                    <span class="hidden-sm-and-down">LinkedIn</span>
                </v-btn>
                <v-btn color='#afd5aa' href='https://github.com/BrianPurgert/'>
                    <template v-slot:prepend>
                        <Icon name="fa-brands:github" size="1.5em"/>
                    </template>
                    <span class="hidden-sm-and-down">GitHub</span>
                </v-btn>
                <v-btn color='#afd5aa' href='https://codepen.io/BrianPurgert/'>
                    <template v-slot:prepend>
                        <Icon name="fa-brands:codepen" size="1.5em"/>
                    </template>
                    <span class="hidden-sm-and-down">CodePen</span>
                </v-btn>
                <v-btn color='#afd5aa' download href="/BrianPurgert_Resume.pdf">
                    <template v-slot:prepend>
                        <Icon name="carbon:generate-pdf" size="1.5em"/>
                    </template>
                    <span class="hidden-sm-and-down">Resume</span>
                </v-btn>
                <v-btn
                        :icon="color === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                        @click="onClick"
                ></v-btn>
            </template>
        </v-app-bar>
        <v-main>
            <v-container>
                <nuxt-page/>
            </v-container>

            <v-footer class="pt-5 pb-5" color="transparent">
            </v-footer>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('dark')

function onClick() {
	color.value = color.value === 'light' ? 'dark' : 'light'
}
</script>
