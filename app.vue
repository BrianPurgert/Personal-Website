<template >
	  <v-app :theme = "theme" >
			<v-app-bar
				  border
				  class = 'position-sticky'
				  density = 'comfortable'
				  scroll-behavior = 'collapse'
			>
				  <template v-slot:prepend >
						<nuxt-link class = 'px-6' to = "/" >
							  <v-img id = "bp" alt = "BP" class = "mr-2" height = "40" src = "/bp.svg" width = "50" />
						</nuxt-link >
				  </template >

				  <v-btn class="hidden-md-and-down" href="#now" variant="text">Now</v-btn>
						<v-btn class="hidden-md-and-down" href="#build-log" variant="text">Build log</v-btn>
						<v-btn class="hidden-md-and-down" href="#stack" variant="text">Stack</v-btn>
						<v-spacer ></v-spacer >
				  <template v-slot:append >
						<v-btn aria-label="Open jump menu (Ctrl K)" class="hidden-sm-and-down bp-mono" variant="text" @click="openPalette">Ctrl K</v-btn>
						<v-btn color = '#afd5aa' href = 'https://www.linkedin.com/in/brian-purgert/' >
							  <template v-slot:prepend >
									<Icon name = "fa-brands:linkedin-in" size = "1.5em" />
							  </template >
							  <span class = "hidden-sm-and-down" >LinkedIn</span >
						</v-btn >
						<v-btn color = '#afd5aa' href = 'https://github.com/BrianPurgert/' >
							  <template v-slot:prepend >
									<Icon name = "fa-brands:github" size = "1.5em" />
							  </template >
							  <span class = "hidden-sm-and-down" >GitHub</span >
						</v-btn >
						<v-btn color = '#afd5aa' href = 'https://codepen.io/BrianPurgert/' >
							  <template v-slot:prepend >
									<Icon name = "fa-brands:codepen" size = "1.5em" />
							  </template >
							  <span class = "hidden-sm-and-down" >CodePen</span >
						</v-btn >
						<v-btn color = '#afd5aa' download href = "/BrianPurgert_Resume.pdf" >
							  <template v-slot:prepend >
									<Icon name = "carbon:generate-pdf" size = "1.5em" />
							  </template >
							  <span class = "hidden-sm-and-down" >Resume</span >
						</v-btn >
						<v-btn
							  :aria-label = "theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
							  icon
							  variant = "text"
							  @click = "toggleTheme"
						>
							  <Icon
									:name = "theme === 'light' ? 'meteocons:sunset' : 'meteocons:fog-night'"
									size = "2.5em"
							  />
						</v-btn >
				  </template >
			</v-app-bar >
			<v-main class = 'overflow-x-hidden overflow-y-hidden' >
				  <v-container >
						<nuxt-page />
				  </v-container >
				  <parallax-background />

				  <v-footer class = "justify-center pt-5 pb-5" color = "transparent" >
						© {{ new Date().getFullYear() }} Brian Purgert · Shipping since 2004<br>
						<span class="bp-mono" style="font-size: 0.75rem; opacity: 0.8;">Nuxt 4 + Vuetify · <a href="https://github.com/BrianPurgert/Personal-Website" rel="noopener noreferrer" target="_blank">Site source</a> · Ctrl K to jump</span>
				  </v-footer >
			</v-main >
	  </v-app >
	  <SpeedInsights />
</template >

<script setup >
import { SpeedInsights } from "@vercel/speed-insights/vue"

const theme = ref("dark")

function openPalette() {
	window.dispatchEvent(new Event("bp:palette"))
}

function toggleTheme() {
	theme.value = theme.value === "light" ? "dark" : "light"
}
</script >
