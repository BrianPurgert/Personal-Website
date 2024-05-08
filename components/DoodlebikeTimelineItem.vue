<template >
	  <v-timeline-item >
			<v-container >

				  <ClientOnly fallback-tag = "span" >
						<v-card class = "elevation-5 pa-1" width = "100%" >
							  <VideoBackground
									class = 'vod'
									
									src = "/doodlebike/DoodleBike_Portfolio_final.webm"

							  >
									<v-card-title class = "video-overlay-text" >Doodle Bike
									</v-card-title >
							  </VideoBackground >
							  <v-card-subtitle >
							  </v-card-subtitle >
						</v-card >
				  </ClientOnly >

			</v-container >
			<template v-slot:icon >
				  <img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: 60px' />
			</template >
			<template v-slot:opposite >
				  <div
						class = "bp-year"
				  >
						17/yrs
				  </div >
			</template >
	  </v-timeline-item >
</template >

<script setup >

</script >