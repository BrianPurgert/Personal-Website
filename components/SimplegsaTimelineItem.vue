<template >
	  <v-timeline-item >
			<v-container >
				  <v-card class = "elevation-5 pa-0" width = "100%" >
						<media-player
							  :aspectRatio = "16/9"
							  :loop = "true"
							  autoplay
							  muted
							  src = "/cap50/SimpleGSA-Video-AV1.mp4"
							  style = "min-height: 337px;"
							  title = "Price Comparison Program"
						>
							  <media-provider ></media-provider >
							  <media-video-layout ></media-video-layout >
						</media-player >
				  </v-card >
				  <v-card >
						<v-card-title >SimpleGSA</v-card-title >
				  </v-card >
			</v-container >
			<template v-slot:opposite >
				  <div class = "bp-year" >2017</div >
				  <div v-if = "$slots.note || note" class = "bp-note" >
						<slot name = "note" >{{ note }}</slot >
				  </div >
			</template >
	  </v-timeline-item >
	  <v-timeline-item >
			<template v-slot:default >
				  <img alt = "Cap50 logo" height = "400" src = "/cap50/cap_50_logo.svg" style = 'max-width: 500px;' />
			</template >
	  </v-timeline-item >
</template >

<script setup >
import "vidstack/bundle"

defineProps({
	note: {type: String, default: ""}
})
</script >
