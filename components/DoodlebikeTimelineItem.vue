<template >
	  <v-timeline-item >
			<v-container >
				  <ClientOnly fallback-tag = "span" >
						<v-card class = "elevation-5 pa-1" width = "100%" >
							  <VideoBackground
									class = 'vod'
									src = "/doodlebike/DoodleBike_Portfolio_final.webm"
							  >
									<v-card-title class = "video-overlay-text" >Doodle Bike</v-card-title >
							  </VideoBackground >
						</v-card >
				  </ClientOnly >
			</v-container >
			<template v-slot:icon >
				  <img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: unset;' alt = "DoodleBike icon" />
			</template >
			<template v-slot:opposite>
				  <div class="bp-year">17/yrs</div>
				  <div v-if="$slots.note || note" class="bp-note">
						<slot name="note">{{ note }}</slot>
				  </div>
			</template>
	  </v-timeline-item >
</template >

<script setup>
defineProps({ note: { type: String, default: '' } })
</script>
