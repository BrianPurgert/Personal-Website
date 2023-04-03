<!--
  2004 - 12 Battlefield 1942 modding
  2006 - 14 Runescape Scripting
  2008 - 16 Crysis Interstate
  2010 - 18 Space Bike
  2012 - 20	Project High Flight
  2014 - 22 Smart Diaper
  2017  SimpleGSA
  2018 	Ruby Discord
  2019 	Twixer Chrome Extension
  -->

<template >
	<v-card class = "mx-auto elevation-2" >
		<template v-slot:title >
			<h1
					class = "text-h5 bp-shadow shadow-blue"
					style = "font-style:  normal;" >my Projects</h1 >
		</template >
	</v-card >

	<!--	.v-timeline-item__body-->
	<!--	justify-self: auto;-->
	<!--    side = "end"-->
	<v-row no-gutters >
		<v-col cols = "12 pa-0 ma-0" >


			<v-timeline

					:density = "smAndDown ? 'compact' : 'default'"
					side = "end"
					line-inset = "28"
					align = "center"
			>
				<!--	IS82	-->
				<v-timeline-item width = "min-content" min-width = "fit-content" >

					<v-container >
						<v-card
								class = "mx-auto"
								width = "500"
						>

							<v-carousel
									hide-delimiters
									cycle
									show-arrows = "hover"
							>
								<v-carousel-item
										src = "/is82/2004.jpg"
										height = "400px"
										cover
								></v-carousel-item >

								<v-carousel-item
										src = "/is82/2004_1.jpg"
										height = "500px"
										cover
								></v-carousel-item >

								<v-carousel-item
										src = "/is82/2004_2.jpg"
										height = "400px"
										cover
								></v-carousel-item >
							</v-carousel >
							<v-card-title >Battlefield 1942 mapping</v-card-title >
							<v-card-subtitle >My first time modding</v-card-subtitle >
							<v-card-text >
								I started modding in Battlefield 1942 in 2004, when I was 12. specifically for a mod called interstate 82.
								I was a perfectionist, with a strong desire to make the best map I could possible. unfortunately, my computer broke and I was never able to finish the map.
							</v-card-text >

						</v-card >


					</v-container >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2004"
						></div >
					</template >
					<template v-slot:icon >
						<img src = "/is82/backside.png" style = 'max-width: 80px' />
					</template >
				</v-timeline-item >
				<!--	RuneScape  	-->
				<v-timeline-item width = "min-content" min-width = "fit-content" >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2006"
						></div >
					</template >
					<template v-slot:icon >
						<nuxt-icon name = "scar_divi" filled style = 'font-size: 5em' />
					</template >
					<v-container >
						<v-card class = "elevation-2" >
							<v-card-title >SCAR Scripting</v-card-title >
							<v-card-subtitle >My first time writing code</v-card-subtitle >
							<v-card-text >I was 13 when I learned
								<nuxt-link href = "https://wiki.scar-divi.com/SCAR_Divi_Online_Manual" >SCAR Divi</nuxt-link >
								to automate tasks in RuneScape for me. personally I created a bot that would automatically buy feathers and sell them
								back to the store owner, making me a profit. Not impressive, but it was my first time writing code, and I got hooked,
								I actually thought scripting in RuneScape was more fun than the game itself.
							</v-card-text >
						</v-card >
					</v-container >
				</v-timeline-item >
				<!--    Crysis Interstate   -->
				<v-timeline-item width = "min-content" min-width = "fit-content" >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2008"
						></div >
					</template >
					<template v-slot:icon >

						<nuxt-icon name = "cryengine-logo-vertical-white" filled style = 'font-size: 8em' />
						<!--								<img src = "/crysis_interstate/crysis_interstate_icon.png" style = 'max-width: 60px'/>-->
					</template >
					<v-container >
						<v-card class = "elevation-2" >
							<v-card-title >Crysis Interstate</v-card-title >
							<v-card-subtitle >Crysis Mod development</v-card-subtitle >
							<v-card-text ></v-card-text >
						</v-card >
					</v-container >
				</v-timeline-item >
				<!--	SpaceBike/Doodle Bike   -->
				<v-timeline-item width = "min-content" min-width = "fit-content" >
					<v-container >
						<v-card class = "elevation-5" width = "100%" style = "min-width: 35vw!important;" >
							<v-card-title >Doodle Bike</v-card-title >
							<v-card-subtitle >Published on Google Play</v-card-subtitle >
							<v-card-item >

								<video-background
										src = "/doodlebike/DoodleBike_Portfolio_final.webm"
										style = "height: 30vh;"
										objectFit = "cover"
								>
								</video-background >
							</v-card-item >
						</v-card >
					</v-container >
					<template v-slot:icon >
						<img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: 60px' />
					</template >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2010"
						></div >
					</template >


				</v-timeline-item >
				<!--	spacebike	-->
				<v-timeline-item width = "min-content" min-width = "fit-content" >
					<v-container >
						<v-card class = "elevation-2" width = "400" style = "min-width: 35vw!important;" >
							<v-card-title class = "text-h5" >SpaceBike</v-card-title >
							<v-card-subtitle >
								<!--						<Icon name = "logos:google-play-icon" size = "0.8em"/>-->
								Published on Google Play
							</v-card-subtitle >
							<v-card-item >
								<video-background
										src = "/SpaceBike/gameplay_space_bike_trimmed.mp4"
										style = "height: 30vh;"

								></video-background >
							</v-card-item >
						</v-card >
					</v-container >
					<template v-slot:icon >
						<nuxt-icon filled name = "spacebike_icon_new" style = 'font-size: 5em' />
					</template >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2010"
						></div >
					</template >

				</v-timeline-item >
				<!--	SimpleGSA   -->
				<v-timeline-item width = "min-content" min-width = "fit-content" >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "2017"
						></div >
					</template >
					<v-container >
						<v-sheet class = "elevation-2" style = "min-width: 35vw!important;" >


						</v-sheet >
					</v-container >
				</v-timeline-item >
				<!--	Ruby Discord   -->
				<v-timeline-item
						width = "min-content" min-width = "fit-content"
						dot-color = "transparent" line-inset = "25" size = "x-large" >
					<template v-slot:icon >
						<nuxt-icon filled name = "ruby_solo" style = 'font-size: 5em' />
					</template >
					<template v-slot:opposite >
						<div
								class = "bp-year"
								v-text = "'2018'"
						></div >
					</template >
					<v-container >
						<v-card
								class = "mx-auto"
								width = "400"
						>
							<v-img
									src = "/RubyDiscord/ruby_discord.jpg"
									height = "220px"
									cover
							>
							</v-img >
							<v-card-title class = "" >Founded the Ruby Discord</v-card-title >


							<v-card-actions >
								<v-btn
										href = "https://discord.com/servers/ruby-518658712081268738"
										color = "orange-lighten-2"
										variant = "text"
								>
									Server Webpage
								</v-btn >
							</v-card-actions >


						</v-card >
					</v-container >
				</v-timeline-item >
				<!--	Twixer   -->
				<v-timeline-item
						width = "min-content" min-width = "fit-content"
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
								class = "bp-year"
								v-text = "2019"
						></div >
					</template >
					<v-container >
						<v-card
								class = "elevation-2" width = "800"
						>
							<v-img
									src = "/twixer/description.png"
									height = "520px"
									cover
							>
							</v-img >
							<v-card-title class = "text-h5" >Twixer</v-card-title >
							<v-card-subtitle >Chrome Extension</v-card-subtitle >


						</v-card >
					</v-container >
				</v-timeline-item >
			</v-timeline >


		</v-col >
	</v-row >

</template >

<script >
import { useDisplay } from 'vuetify'

export default {
	name: 'ProjectsTimeline',
	data() {
		return {
			text: 'text',
			slides: [
				'https://brianpurgert2.com/SpaceBike/feature.png'

			]
		}
	},
	setup() {
		const { xs, sm, md, lg, xl, smAndDown } = useDisplay()
		return { xs, sm, md, lg, xl, smAndDown }
	}
}
</script >

