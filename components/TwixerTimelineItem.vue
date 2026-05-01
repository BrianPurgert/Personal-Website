<template >
	  <v-timeline-item >
			<template v-slot:icon >
				  <img class = "d-lg-inline-block position-relative mx-auto" src = "/twixer/twixer_icon.svg" width = "100" height = "100" alt = "Twixer Chrome extension logo" />
			</template >
			<template v-slot:opposite >
				  <div class = "bp-year text-center" v-text = "2019" ></div >
			</template >
			<template v-slot:default >
				  <v-container class = "align-content-center" >
						<v-card
							  class = "elevation-2 mx-auto"
							  height = "auto"
							  width = "100%"
							  image = "/twixer/description.png"
						>
							  <v-img
									width = "100%"
									src = "/twixer/description.png"
							  >
									<img
										  alt = "twixer logo"
										  class = "h-25"
										  src = "/twixer/logo.svg"
										  style = "position: absolute; left: 12%; bottom: 12%;"
									>
							  </v-img >
						</v-card >
						<v-card class = "elevation-2 mx-auto" height = "auto" width = "100%" >
							  <v-card-title class = "video-overlay-text" >Chrome Browser Extension</v-card-title >
						</v-card >
				  </v-container >
			</template >
	  </v-timeline-item >
</template >

<script setup >
</script >
