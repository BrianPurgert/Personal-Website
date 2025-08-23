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
							  <nuxt-icon class = "google_installs" filled name = "google_installs" ></nuxt-icon >
						</v-card >
				  </ClientOnly >
			</v-container >
			<template v-slot:icon >
				  <nuxt-icon filled name = "spacebike_icon_new" style = 'font-size: 72px;' />
<!--				  <img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: unset' />-->

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
