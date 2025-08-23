<template >
	  <v-timeline-item >
			<template v-slot:opposite>
				  <div class="bp-year">14/yrs</div>
				  <div v-if="$slots.note || note" class="bp-note">
						<slot name="note">{{ note }}</slot>
				  </div>
			</template>
			<template v-slot:icon >
				  <nuxt-icon filled name = "scar_divi" style = 'font-size: 5em;' />
			</template >
			<template v-slot:default >
				  <v-container >
						<v-hover v-slot = "{isHovering, props}" >
							  <v-card
									class = "elevation-2 "
									height = "510px"
									v-bind = "props"
									style = "max-width: 600px;"
									min-width = '600px'

							  >
									<v-expand-transition >
										  <v-img
												v-if = "isHovering"
												class = "position-absolute dialog-top-transition bg-primary "
												src = "/runescape/trees.png"
												style = "z-index: 2; top: 0; left: 0; bottom: 0; right: 0;"
										  >
										  </v-img >
									</v-expand-transition >

									<v-img
										  class = "bg-white w-100 h-100 dialog-top-transition ma-0 "
										  style = "z-index: 1; top: -1px; left: -1px; right: -1px; bottom: 0;"
										  src = "/runescape/scar/asset_2113.svg"
									>
										  <v-spacer ></v-spacer >
										  <div class = "d-flex" style = 'height: 95px; width: 100%;' ></div >
										  <div
												class = "w-auto h-auto ma-2 pa-2  d-flex"
												style = ""
										  >
												<scar-text />
										  </div >
									</v-img >


							  </v-card >
						</v-hover >
				  </v-container >
			</template >
	  </v-timeline-item >
</template >
<script setup>
import ScarText from "~/components/ScarText.vue"
const props = defineProps({ note: { type: String, default: '' } })
</script>
