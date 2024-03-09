<template >
	  <v-timeline-item >
			<v-container >

				  <!--				  <ClientOnly fallback-tag = "span" >-->
				  <v-card class = "elevation-5 pa-2" width = "600" >
						<media-player
							  :loop = "true"
							  :aspectRatio = "16/9"
							  :autoPlay = "true"
							  :controls = "false"
							  :paused = "false"
							  :controlsList = "['nodownload']"
							  :playsInline
							  src = "/cap50/SimpleGSA-Video_low_hevc.mp4"
							  style = "min-height: 337px;"
							  title = "Price Comparison Program"
							  :data-can-fullscreen = "true"
						>

							  <media-provider >

							  </media-provider >
							  <media-video-layout custom-icons >
								
							  </media-video-layout >
						</media-player >


						<!--						<v-card-title class = "video-overlay-text" >Price Comparison Program</v-card-title >-->

				  </v-card >
				  <!--				  </ClientOnly >-->

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


</script >

<style scoped >

</style >