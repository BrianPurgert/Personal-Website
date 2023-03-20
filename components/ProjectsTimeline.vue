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
	<v-banner
			color = "primary"

			icon = "mdi-timeline"
			text = "Timeline"
	>
		<h1 class = "text-caption text-center">
			this is a collection of things that shaped me as a developer, many of which have never seen the light of day,
			in fact some of these things I worked on for months and never told a soul.
			luckily I was able to find some evidence of these long lost projects on the internet, some stuff as old as 15 years ago.
			a timeline of my projects is a way to document my journey as a developer and to show that I have been doing this for a long time.
		</h1>
	</v-banner>

	<v-timeline
			density = "comfortable"
			line-inset = "25"
			side = "end"
	>
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "pt-1 headline font-weight-bold "
						v-text = "1992"
				></div>
			</template>
			<v-container>
				<v-sheet class = "elevation-2">
					<v-card-title class = "text-h5"></v-card-title>
					<v-card-text></v-card-text>
				</v-sheet>
			</v-container>
		</v-timeline-item>
		<!--	SpaceBike/Doodle Bike   -->
		<v-timeline-item>
			<template v-slot:icon>
				<img src = "/SpaceBike/spacebike_icon.png" style = ''/>
			</template>
			<template v-slot:opposite>
				<div
						class = "pt-1 headline font-weight-bold"
						v-text = "2010"
				></div>
			</template>
			<v-card class = "elevation-2" style = "min-width: 35vw!important;">
				<!--				<img src = "/SpaceBike/rotating_photos.png" width = "854" height = "480" style = ''/>-->
				<video autoplay loop muted playsinline>
					<source src = "/doodlebike/DoodleBike_Portfolio_final.webm" type = "video/webm"/>

				</video>
			</v-card>
			<!--			<Carousel :slides = "slides"></Carousel>-->


		</v-timeline-item>
		<!--	SimpleGSA   -->
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "pt-1 headline font-weight-bold "
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
						class = "pt-1 headline font-weight-bold"
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
						class = "pt-1 headline font-weight-bold "
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

