<!--
  2004 - age 12 -	Battlefield 1942 modding
  2006 - age 14 - Runescape Scripting
  2008	 Crysis Interstate
  2010 	Space Bike
  2012 	Project High Flight
  https://www.facebook.com/ProjectHighFlight/photos
  2014 	Smart Diaper
  2017  SimpleGSA
  12/02/2018 12:24 AM	Ruby Discord
  2019 	Twixer Chrome Extension
  -->

<template >
	<v-timeline align = 'start' line-inset = "25" side = 'end' >
		<v-timeline-item >
			<template v-slot:opposite >
				<div
						class = "pt-1 headline font-weight-bold "
						v-text = "1992"
				></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-card-title class = "text-h5" >
						will be adding sections for each possibly
					</v-card-title >
					<v-card-text >
						2004 - age 12 - Battlefield 1942 modding<br />
						2006 - age 14 - Scar Scripting<br />
						2008 Crysis Interstate<br />
						2010 Space Bike
					</v-card-text >
				</v-sheet >
			</v-container >
		</v-timeline-item >
		<v-timeline-item >
			<template v-slot:opposite >
				<div
						class = "pt-1 headline font-weight-bold"
						v-text = "2010"
				></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-card-title class = "text-h5" > Space Bike</v-card-title >
					<v-card-text >
						<img alt = "Space Bike" src = "/spacebike/rotating_photos.png" />
					</v-card-text >
				</v-sheet >
			</v-container >
		</v-timeline-item >

		<v-timeline-item >
			<template v-slot:opposite >
				<div
						class = "pt-1 headline font-weight-bold "
						v-text = "2017"
				></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-card-title class = "text-h5" > SimpleGSA</v-card-title >
					<v-card-text ></v-card-text >
				</v-sheet >
			</v-container >
		</v-timeline-item >

		<v-timeline-item dot-color = "transparent" line-inset = "25" size = "x-large" >
			<template v-slot:icon >
				<nuxt-icon filled name = "generic" style = 'font-size: 5em' />

			</template >
			<template v-slot:opposite >
				<div class = "tesla-text" v-text = "'2018'" ></div >
			</template >

			<nuxt-icon filled name = "ruby_discord" style = "font-size: 20em" />
		</v-timeline-item >
		<v-timeline-item
				class = "twixer"
				dot-color = "transparent"
				line-inset = "25"
				size = "x-large"
		>
			<template v-slot:icon >
				<v-avatar
						image = "/twixer/twixer_icon.svg"
						rounded = "0"
						size = "150%"
				></v-avatar >
			</template >
			<template v-slot:opposite >
				<div
						class = "pt-1 headline font-weight-bold "
						v-text = "2019"
				></div >
			</template >
			<v-card class = "elevation-2" >
				<v-card-title class = "text-h5" > Twixer Chrome Extension</v-card-title >
				<v-card-text >
					<img alt = "Twixer Logo" src = "/twixer/logo_side.svg" />
					<!--					<img alt = "Sidebar" src = "/twixer/sidebar.png" >-->
				</v-card-text >
			</v-card >
		</v-timeline-item >
	</v-timeline >
</template >

<script >
export default {
	name: 'ProjectsTimeline', data() {
		return {
			text: 'text'
		}
	}
}
</script >

<style ></style >
