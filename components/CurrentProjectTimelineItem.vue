<template >
	  <v-timeline-item >
			<template v-slot:opposite >
				  <div class = "bp-year" >Current</div >
			</template >
			<template v-slot:default >
				  <v-container style = "min-height: 200px;" >
						<v-card
							  class = "mx-auto"
							  color = "grey-lighten-5"
							  elevation = "0"
							  max-width = "100%"
							  tile
						>
							  <v-card-text >
									<v-card-title
										  class = "text-h6"
										  style = "font-style: normal;"
									>
										  {{ title }}
									</v-card-title >
									<v-card-subtitle
										  class = "text-body-1"
										  style = "font-style: normal;"
									>
										  {{ description }}
									</v-card-subtitle >
									<v-card-actions >
										  <v-btn
												:href = "url"
												target = "_blank"
												rel = "noopener noreferrer"
												variant = "text"
										  >
												Website
										  </v-btn >
									</v-card-actions >
							  </v-card-text >
						</v-card >
				  </v-container >
			</template >
	  </v-timeline-item >
</template >

<script setup >
defineProps({
	title      : { type: String, required: true },
	url        : { type: String, required: true },
	description: { type: String, required: true },
})
</script >
