<template >
	  <v-timeline-item line-inset = "0" >
			<template v-slot:opposite >
				  <div
						class = "bp-year"
				  >
						age 16
				  </div >
			</template >
			<template v-slot:icon >
				  <nuxt-icon filled name = "cryengine-logo-vertical-white" style = 'font-size: 8em;' />
			</template >
			<template v-slot:default >
				  <v-container >
						<v-card
							  class = "pa-0 ma-0 elevation-5"
							  elevation = "4"
							  width = "600"
						>
							  <Carousel
									:autoplay = 10000
									v-model = "model"
									class = ""

							  >
									<Slide
										  v-for = "(image,n) in images"
										  :key = "n"
									>
										  <v-card
												:class = "['ma-0 pa-1']"
												color = ""
												width = "600"
										  >
												<v-img
													  :src = "image"
													  cover
													  class = "rounded"
													  height = "450"

												></v-img >
										  </v-card >
									</Slide >
							  </Carousel >
						</v-card >
				  </v-container >
			</template >
	  </v-timeline-item >
</template >

<script >
export default {
	data: () => ({
		model : null,
		images: [
			"/crysis/deathracestart.jpg",
			"/crysis/highwaytohellcave.jpg",
			"/crysis/2007_12_09.jpg",
			"/crysis/2008_cryengine.jpg",
			"/crysis/2008_deathrace.jpg",
			"/crysis/2008_fan.jpg",
			"/crysis/2008_loop.jpg",
			"/crysis/a.jpg",
			"/crysis/arbiter.jpg",
			"/crysis/arbiter2.jpg",
			"/crysis/arbiter4.jpg",
			"/crysis/cliffside1.jpg",
			"/crysis/cliffside2.jpg",
			"/crysis/deathrace2.jpg",
			"/crysis/deathrace3.jpg",
			"/crysis/deathrace4.jpg",
			"/crysis/deathraceloop.jpg",
			"/crysis/dunes1.jpg",
			"/crysis/dunes4.jpg",
			"/crysis/flowchart.jpg",
			"/crysis/guns.jpg",
			"/crysis/intocar.jpg",
			"/crysis/mg.jpg",
			"/crysis/nitro.jpg",
			"/crysis/rockets.jpg",
			"/crysis/shotguns.jpg",
			"/crysis/wow.jpg"
		]
	}),
	name: "cryengine-timeline-item"
}
</script >