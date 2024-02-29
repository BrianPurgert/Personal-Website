<template >
	  <v-timeline-item >
			<v-container >

				  <ClientOnly fallback-tag = "span" >
						<v-card class = "elevation-5 pa-2" width = "600" >
							  <VideoBackground
									objectFit = "fill"
									src = "https://getthis.page/SimpleGSA-Video.mp4"
									style = "min-height: 337px;"
							  >
									<v-card-title class = "video-overlay-text" >Price Comparison Program</v-card-title >
							  </VideoBackground >

						</v-card >
				  </ClientOnly >

			</v-container >
			<template v-slot:icon >
				  <img src = "" class = ''
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


<script >
export default {
	name: "simplegsa-timeline-item"
}
</script >