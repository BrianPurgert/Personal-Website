<template >

	  <v-container class = 'align-content-center' >


			<img class = 'd-lg-inline-block position-relative mx-auto' src = "/twixer/twixer_icon.svg" width = "100" />

			<div
				  class = "bp-year text-center"
				  v-text = "2019"
			></div >


			<v-card

				  class = "elevation-2 mx-auto"
				  height = "auto"
				  width = "100%"
				  image = '/twixer/description.png'

			>
				  <v-img

						width = "100%"
						src = "/twixer/description.png"
				  >
						<img alt = "twixer logo" class = "h-25"
							  src = "/twixer/logo.svg" style = "position: absolute; left:100px; bottom: 50px; " >


				  </v-img >

			</v-card >
			<v-card class = "elevation-2 mx-auto" height = "auto" width = "100%" >
				  <v-card-title class = "video-overlay-text" >Chrome Browser Extension</v-card-title >
			</v-card >

	  </v-container >

</template >

<script setup >
</script >