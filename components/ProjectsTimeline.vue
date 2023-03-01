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
		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "pt-1 headline font-weight-bold"
						v-text = "2010"
				></div>
			</template>
			<v-container fluid>

				<space-bike-carousel/>

			</v-container>
		</v-timeline-item>

		<v-timeline-item>
			<template v-slot:opposite>
				<div
						class = "pt-1 headline font-weight-bold "
						v-text = "2017"
				></div>
			</template>
			<v-container>
				<v-sheet class = "elevation-2">
					<v-card-title class = "text-h5"></v-card-title>
					<v-card-text></v-card-text>
				</v-sheet>
			</v-container>
		</v-timeline-item>

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
    import SpaceBikeCarousel from "~/components/SpaceBikeCarousel.vue";

    export default {
        name: 'ProjectsTimeline',
        components: {SpaceBikeCarousel},
        data() {
            return {
                text: 'text'
            }
        }
    }
</script>

