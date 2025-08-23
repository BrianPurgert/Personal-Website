<template >
	  <v-timeline-item >

			<v-container >
				  <v-card
						id = "is82"
						class = "pa-0 ma-0 elevation-5"
						width = "600"
				  >
						<Carousel
							  :autoplay = 10000
							  :wrap-around = "true"
							  v-model = "model"
							  class = ""

						>
							  <Slide
									v-for = "(item, index) in carouselItems"
									:key = "index"
							  >
									<v-card
										  :class = "['ma-0 pa-0']"
										  color = ""
										  width = "600"
									>
										  <v-img
												:src = "`${imagePath}${item}`"
												cover
												class = "rounded"
												height = "450"
										  ></v-img >
									</v-card >
							  </Slide >
						</Carousel >

						<v-card-title >Mod Mapping with Battlecraft 1942</v-card-title >
						<v-card-subtitle >images from 2004 map I created</v-card-subtitle >

				  </v-card >

			</v-container >
			<template v-slot:opposite>
				  <div class="bp-year">2004 age 12</div>
				  <div v-if="$slots.note || note" class="bp-note">
						<slot name="note">{{ note }}</slot>
				  </div>
			</template>
			<template v-slot:icon >
				  <img :src = "`${imagePath}bf1942.png`" style = 'max-width: 100px;' />
			</template >
	  </v-timeline-item >
</template >
<script setup >
import { ref, computed } from "vue"

const imagePath     = "/is82/"
const carouselItems = ref([
	                          "CIMG0367.JPG",
	                          "2004_1.jpg",
	                          "2004.jpg",
	                          "2004_2.jpg",
	                          "addict.jpg"
                          ])

const model = ref(null)

const props = defineProps({ note: { type: String, default: '' } })
</script >
