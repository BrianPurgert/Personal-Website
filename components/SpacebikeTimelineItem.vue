<template >
	  <v-timeline-item >
			<v-container >
				  <ClientOnly fallback-tag = "span" >
						<v-card class = "elevation-5 pa-1" width = "100%" >
							  <VideoBackground
									class = 'vod'
									src = "/SpaceBike/gameplay_space_bike_trimmed.mp4"
							  >
									<v-card-title class = "video-overlay-text" >SpaceBike</v-card-title >
							  </VideoBackground >
							  <span class = "google_installs" >
									<Icon mode = "svg" name = "bp:google-installs" />
							  </span >
						</v-card >
				  </ClientOnly >
			</v-container >
			<template v-slot:icon >
				  <Icon mode = "svg" name = "bp:spacebike-icon" size = "72" />
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
