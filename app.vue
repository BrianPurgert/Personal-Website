<template >
	<v-app :theme = "color" >
		<v-app-bar >

			<template v-slot:prepend >
				<img src = "/SVG/bp_logo.svg" height = "38" class = "mr-2" alt = "BP" >
			</template >


			<v-spacer ></v-spacer >
			<template v-slot:append >
				<v-btn download href = "/BrianPurgert_Resume.pdf" rounded = "lg" size = "large" >
					<template v-slot:prepend >
						<Icon name = "carbon:generate-pdf" size = "1.5em" />
					</template >
					Resume
				</v-btn >

				<v-btn
						:prepend-icon = "color === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
						@click = "onClick"
				></v-btn >
			</template >


		</v-app-bar >

		<v-main >
			<v-container >
				<nuxt-page />
			</v-container >

			<v-footer color = "transparent" class = "pt-5 pb-5" >
			</v-footer >
		</v-main >
	</v-app >
</template >

<script setup >
import {ref} from 'vue'

const color = ref('dark')

function onClick() {
	color.value = color.value === 'light' ? 'dark' : 'light'
}
</script >
