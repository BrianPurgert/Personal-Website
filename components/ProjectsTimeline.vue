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

<template>


	<v-card
			class = "mx-auto elevation-2"


	>
		<template v-slot:title>
			<h1
					class = "text-h5 bp-shadow shadow-blue"
					style = "font-style:  normal;">my Projects</h1>
		</template>

	</v-card>

	<v-timeline
			density = "comfortable"
			line-inset = "25"
			side = "end"
	>
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2004"
				></div>
			</template>
			<template v-slot:icon>
				<img src = "/is82/backside.png" style = 'max-width: 80px'/>
			</template>
			<v-card class = "elevation-2">
				<v-card-title>Battlefield 1942 mapping</v-card-title>
				<v-card-subtitle></v-card-subtitle>
				<v-card-text>Interstate 82</v-card-text>
			</v-card>
		</v-timeline-item>
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2006"
				></div>
			</template>
			<template v-slot:icon>
				<nuxt-icon name = "scar_divi" filled style = 'font-size: 5em'/>
			</template>
			<v-card class = "elevation-2">
				<v-card-title>SCAR Scripting</v-card-title>
				<v-card-subtitle>my hello world</v-card-subtitle>
				<v-card-text>
					<nuxt-link href = "https://wiki.scar-divi.com/SCAR_Divi_Online_Manual">SCAR Wiki</nuxt-link>
				</v-card-text>
			</v-card>
		</v-timeline-item>

		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2008"
				></div>
			</template>
			<template v-slot:icon>

				<nuxt-icon name = "cryengine-logo-vertical-white" filled style = 'font-size: 8em'/>
				<!--								<img src = "/crysis_interstate/crysis_interstate_icon.png" style = 'max-width: 60px'/>-->
			</template>
			<v-card class = "elevation-2">
				<v-card-title>Crysis Interstate</v-card-title>
				<v-card-subtitle>Crysis Mod development</v-card-subtitle>
				<v-card-text></v-card-text>
			</v-card>

		</v-timeline-item>
		<!--	SpaceBike/Doodle Bike   -->
		<v-timeline-item>
			<template v-slot:icon>
				<img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: 60px'/>
			</template>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2010"
				></div>
			</template>
			<v-card class = "elevation-2" style = "min-width: 44vw!important;">
				<video-background
						src = "/doodlebike/DoodleBike_Portfolio_final.webm"
						style = "max-height: 400px; height: 40vh;"
						poster = "/doodlebike/doodlebike_menu.png"
						objectFit = "cover"

				>
				</video-background>

			</v-card>
			<v-card>

			</v-card>
		</v-timeline-item>
		<v-timeline-item>
			<template v-slot:icon>
				<!--				<img src = "/SpaceBike/spacebike_icon.png" style = 'max-width: 60px'/>-->
				<nuxt-icon filled name = "spacebike_icon_new" style = 'font-size: 5em'/>


			</template>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2010"
				></div>
			</template>
			<v-container>
				<v-sheet class = "elevation-2" style = "min-width: 35vw!important;">
					<v-card-title class = "text-h5"></v-card-title>
					<v-card-text></v-card-text>
				</v-sheet>
			</v-container>
		</v-timeline-item>
		<!--	SimpleGSA   -->
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2017"
				></div>
			</template>
			<v-container>
				<v-sheet class = "elevation-2" style = "min-width: 35vw!important;">


				</v-sheet>
			</v-container>
		</v-timeline-item>
		<!--	Ruby Discord   -->
		<v-timeline-item dot-color = "transparent" line-inset = "25" size = "x-large">
			<template v-slot:icon>
				<nuxt-icon filled name = "ruby_solo" style = 'font-size: 5em'/>

			</template>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "'2018'"
				></div>
			</template>
			<v-card class = "elevation-2">
				<v-card-title class = "text-h5 "> Ruby Discord</v-card-title>
				<v-card-text>
					<p>
						Created the official Ruby Discord
					</p>
					<p>
						<v-btn
								color = "primary"
								dark
								href = "https://discord.com/servers/ruby-518658712081268738"

						>


						</v-btn>
					</p>

				</v-card-text>
			</v-card>
		</v-timeline-item>
		<!--	Twixer   -->
		<v-timeline-item
				class = "twixer"
				dot-color = "transparent"
				line-inset = "25"
				size = "x-large"
		>
			<template v-slot:icon>
				<v-avatar
						image = "/twixer/twixer_icon.svg"
						rounded = "0"
						size = "150%"
				></v-avatar>
			</template>
			<template v-slot:opposite>
				<div
						class = "bp-year"
						v-text = "2019"
				></div>
			</template>
			<v-card
					class = "elevation-2"
			>
				<v-card-title class = "text-h5">Twixer</v-card-title>


				<!--					<img alt = "Sidebar" src = "/twixer/sidebar.png" >-->

			</v-card>
		</v-timeline-item>
	</v-timeline>
</template>

<script>
    import Carousel from "~/components/Carousel.vue";

    export default {
        name: 'ProjectsTimeline',
        components: {Carousel},
        data() {
            return {
                text: 'text',
                slides: [
                    'https://brianpurgert2.com/SpaceBike/feature.png',

                ],
            }
        }
    }
</script>

