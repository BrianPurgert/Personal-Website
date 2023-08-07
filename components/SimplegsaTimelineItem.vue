<template >
	  <v-timeline-item >
			<template v-slot:icon >
				  <img height = "400" src = "/cap50/cap_50_logo.svg" style = 'max-width: 500px;'
						alt = 'capitol 50 consultants' />
			</template >
			<template v-slot:opposite >
				  <div
						class = "bp-year"
						v-text = "2017"
				  ></div >
				  <v-container style = "min-height: 200px;" >

						<v-btn to = '/capital50' >SimpleGSA</v-btn >
				  </v-container >
			</template >
			<template v-slot:default >

			</template >
	  </v-timeline-item >
</template >


<script >
export default {
	name: 'simplegsa-timeline-item'
}
</script >