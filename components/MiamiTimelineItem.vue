<style >

</style >
<template >
	  <v-timeline-item >
			<v-container style = "min-height: 200px" >
				  <v-card

						class = "mx-auto align-center justify-center miami-card"

						width = "600"
				  >
						<v-card-item >
							  <img src = "/miami/logo-horizontal-stacked.png"
									class = "pa-2"
									style = '' />
						</v-card-item >

						<v-card-title
							  class = "robot-crush text-center align-center" >Computer Science & Computer Engineering
						</v-card-title >
						<v-card-text class = "text-center align-center" >
							  <div class = "text-h6" >Miami University</div >
							  <div class = "text-caption" >Oxford, OH</div >
						</v-card-text >

				  </v-card >

			</v-container >
			<template v-slot:opposite >
				  <div
						class = "bp-year"

				  >2011 - 2016
				  </div >
			</template >
			<template v-slot:icon >
			</template >
	  </v-timeline-item >
</template >
<script >
export default {
	name: "miami-timeline-item"
}
</script >