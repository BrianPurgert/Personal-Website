<template >
	  <v-container >

			<div class = "d-flex flex-column justify-center align-center " >
				  <v-card width = "300px"
						class = "text-h4 bp-shadow shadow-red text-center mb-6" >
						<v-card-title class = "text-h4 bp-shadow shadow-red text-centerz" >
							  <Icon name = "emojione-v1:sparkles" size = "50" class = "mr-1" ></Icon >
							  {{ currentDate() }}
						</v-card-title >

				  </v-card >
				  <v-card class = "mx-auto" variant = "elevated" >
						<v-card-item >
							  <div >
									<div class = "text-overline mb-1" >Universal Website Parser</div >
									<div class = "text-h6 mb-1" ></div >
									<div class = "text-caption" >

									</div >
							  </div >
						</v-card-item >

						<v-card-actions >
							  <v-btn href = "https://turingsinterface.com/" target = "_blank"
									variant = "text" >Website
							  </v-btn >
						</v-card-actions >
				  </v-card >
			</div >


	  </v-container >
</template >
<script setup >


function currentDate() {
	const current = new Date()
	return current.toLocaleDateString("en-US", {
		year : "numeric",
		month: "long"
	}).replace(",", "")
}

</script >