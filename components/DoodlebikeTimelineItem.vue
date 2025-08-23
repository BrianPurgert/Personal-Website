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
							  <v-card-subtitle ></v-card-subtitle >
						</v-card >
				  </ClientOnly >
			</v-container >
			<template v-slot:icon >
<!--				  <Icon name = "emojione-v1:sparkles" size = "150" class = "mr-1" ></Icon >-->
				  <img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: unset;' />
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
const props = defineProps({ note: { type: String, default: '' } })
</script>
