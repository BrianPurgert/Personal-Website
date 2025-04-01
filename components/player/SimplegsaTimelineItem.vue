<template >
	  <v-timeline-item >
			<v-container >

				  <v-card class = "elevation-5 pa-0" width = "100%" >
						<media-video-layout >

						</media-video-layout >
						<media-player
							  :aspectRatio = "16/9"
							  :controls = "true"
							  :data-can-fullscreen = "false"
							  :loop = "true"
							  :paused = "false"
							  autoplay
							  src = "/cap50/SimpleGSA-Video-AV1.mp4"
							  style = "min-height: 337px;"
							  title = "Price Comparison Program"
						>
							  <media-provider >

							  </media-provider >
						</media-player >
				  </v-card >
				 <v-card >
					   <v-card-title>SimpleGSA</v-card-title>
					   <v-card-text> </v-card-text>
				 </v-card>
			</v-container >
			<template v-slot:icon >
				  <img class = '' src = ""
						style = 'max-width: 300px;' />
			</template >
			<template v-slot:opposite >
				  <div
						class = "bp-year"
				  >
						2017
				  </div >
			</template >
	  </v-timeline-item >
	  <v-timeline-item >
			<template v-slot:icon >

			</template >
			<template v-slot:opposite >


			</template >
			<template v-slot:default >
				  <img height = "400" src = "/cap50/cap_50_logo.svg" style = 'max-width: 500px;' />
			</template >
	  </v-timeline-item >
</template >


<script setup >

import "vidstack/bundle"
import "vidstack"
import { tr } from "vuetify/locale"




</script >

<style scoped >

</style >
