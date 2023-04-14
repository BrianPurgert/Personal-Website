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
	<v-card class = "mx-auto elevation-2">
		<template v-slot:title>
			<h1
				class = "text-h5 bp-shadow shadow-blue"
				style = "font-style:  normal;">my Projects</h1>
		</template>
	</v-card>

	<!--	.v-timeline-item__body-->
	<!--	justify-self: auto;-->
	<!--    side = "end"-->
	<!--	:density = "smAndDown ? 'comfortable' : 'compact'"-->


	<v-timeline
		align = "center"
		class = "mx-auto"
		line-inset = "28"
		side = "end"
	>
		<!--	IS82	-->
		<v-timeline-item>

			<v-container>
				<v-card
					id = "is82"
					class = "mx-auto"
					width = "600"
				>
					<v-carousel
						cycle
						hide-delimiters
						show-arrows = "hover"
					>
						<v-carousel-item
							cover
							src = "/is82/2004.jpg"
						></v-carousel-item>
						<v-carousel-item
							cover
							src = "/is82/2004_1.jpg"
						></v-carousel-item>
						<v-carousel-item
							cover
							src = "/is82/2004_2.jpg"
						></v-carousel-item>
						<v-carousel-item
							cover
							src = "/is82/addict.jpg"
						></v-carousel-item>

						<v-card-title>Battlefield 1942 mapping</v-card-title>
					</v-carousel>
					<v-card-text>
						when I was 12, I started making maps for a Battlefield 1942 mod called Interstate '82.
					</v-card-text>

				</v-card>


			</v-container>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "2004"
				></div>
			</template>
			<template v-slot:icon>
				<img src = "/is82/backside.png" style = 'max-width: 80px'/>
			</template>
		</v-timeline-item>
		<!--	RuneScape  	-->
		<v-timeline-item>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "2006"
				></div>
			</template>
			<template v-slot:icon>
				<nuxt-icon filled name = "scar_divi" style = 'font-size: 5em'/>
			</template>
			<v-container>

				<v-hover v-slot = "{isHovering, props}">
					<v-card
						class = "elevation-2 mx-auto"
						height = "510px"
						v-bind = "props"
						width = "600px">
						<v-expand-transition>
							<v-img
								v-if = "isHovering"
								class = "position-absolute dialog-top-transition bg-primary text-h2"
								src = "/runescape/trees.png"
								style = "height: 503px; width: 765px; top: 0; left: 0; z-index: 100;"
							>
							</v-img>
						</v-expand-transition>

						<v-img
							class = "bg-white pt-16 pl-5 pr-1 ma-0"
							cover
							src = "/runescape/scar/asset_2113.svg"
						>
							<v-card-text>
								The primary motivation for me to learn programming was my interest in Autoing in RuneScape.
								<nuxt-link href = "https://wiki.scar-divi.com/SCAR_Divi_Online_Manual">SCAR</nuxt-link>
								, a cheat development environment (CDE), enables users to create their own scripts for
								various
								games. More than just a color clicker, SCAR offers users the ability to make scripts in
								Pascal
								for autoing in RuneScape.
								Upon acquiring this cheat, users can either utilize great scripts made by others or create
								their
								own, but they won't instantly reap the benefits of this CDE. SCAR's effectiveness exceeds
								expectations, providing users with a versatile tool for automating tasks in RuneScape.

								For instance, I personally created a bot using SCAR that would automatically buy feathers
								and
								sell them back to the store owner, generating a profit for me. It was my first experience
								with
								coding. I found scripting in RuneScape to be even more enjoyable than playing the game
								itself.
							</v-card-text>
						</v-img>


					</v-card>
				</v-hover>
			</v-container>
		</v-timeline-item>
		<!--    Crysis Interstate   -->
		<v-timeline-item>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "2008"
				></div>
			</template>
			<template v-slot:icon>

				<nuxt-icon filled name = "cryengine-logo-vertical-white" style = 'font-size: 8em'/>
				<!--								<img src = "/crysis_interstate/crysis_interstate_icon.png" style = 'max-width: 60px'/>-->
			</template>
			<crysis/>


		</v-timeline-item>
		<!--	SpaceBike/Doodle Bike   -->
		<v-timeline-item>
			<v-container>
				<v-responsive aspect-ratio = "16 / 9">
					<v-card
						class = "elevation-5 pa-0 mx-auto" width = "600">
						<video-background
							objectFit = "cover"
							src = "/doodlebike/DoodleBike_Portfolio_final.webm"
							style = "min-height: 337px;"
						>
							<v-card-title class = "video-overlay-text">Doodle Bike
							</v-card-title>

						</video-background>
						<v-card-subtitle>
						</v-card-subtitle>
					</v-card>
				</v-responsive>
			</v-container>
			<template v-slot:icon>
				<img src = "/doodlebike/doodlebike_icon.png" style = 'max-width: 60px'/>
			</template>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "2010"
				></div>
			</template>


		</v-timeline-item>
		<!--	spacebike	-->
		<v-timeline-item>
			<v-container>
				<v-responsive aspect-ratio = "16 / 9">
					<v-card class = "elevation-5 pa-0 mx-auto" width = "600">
						<video-background
							objectFit = "cover"
							src = "/SpaceBike/gameplay_space_bike_trimmed.mp4"
							style = "min-height: 337px;"
						>


							<v-card-title class = "video-overlay-text">SpaceBike
							</v-card-title>


						</video-background>
						<nuxt-icon class = "google_installs" filled name = "google_installs"></nuxt-icon>

						<!--								<v-card-subtitle  class="video-overlay-subtext">-->

						<!--									<Icon name = "logos:google-play" width="3em" font-size="3.1em"/>-->
						<!--									<span style="position: absolute; right: 0; bottom: 0; padding-right: 1em">500k Downloads</span>-->

						<!--								</v-card-subtitle>-->

					</v-card>
				</v-responsive>
			</v-container>
			<template v-slot:icon>
				<nuxt-icon filled name = "spacebike_icon_new" style = 'font-size: 5em'/>
			</template>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "2010"
				></div>
			</template>

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
		<v-timeline-item

		>
			<template v-slot:icon>
				<nuxt-icon filled name = "ruby_solo" style = 'font-size: 5em'/>
			</template>
			<template v-slot:opposite>
				<div
					class = "bp-year"
					v-text = "'2018'"
				></div>
			</template>
			<v-container>
				<v-card
					class = "mx-auto"
					width = "400"
				>
					<v-img
						cover
						height = "220px"

						src = "/RubyDiscord/ruby_discord.jpg"
					>
					</v-img>
					<v-card-title class = "">Founded the Ruby Discord</v-card-title>


					<v-card-actions>
						<v-btn
							href = "https://discord.com/servers/ruby-518658712081268738"
							variant = "text"
						>
							Server Webpage
						</v-btn>
					</v-card-actions>


				</v-card>
			</v-container>
		</v-timeline-item>
		<!--	Twixer   -->
		<v-timeline-item
			class = "twixer"
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
			<v-container>
				<v-card
					class = "elevation-2 mx-auto" width = "800"
				>
					<v-img
						cover
						height = "520px"
						src = "/twixer/description.png"
					>
					</v-img>
					<v-card-title class = "text-h5">Twixer</v-card-title>
					<v-card-subtitle>Chrome Extension</v-card-subtitle>


				</v-card>
			</v-container>
		</v-timeline-item>
	</v-timeline>


</template>

<script>
	import {useDisplay} from 'vuetify'
	import Crysis from "~/components/Crysis.vue";

	export default {
		name: 'ProjectsTimeline',
		components: {Crysis},
		data() {
			return {
				text: 'text',
				slides: [
					'https://brianpurgert2.com/SpaceBike/feature.png'

				]
			}
		},

		setup() {
			const {xs, sm, md, lg, xl, smAndDown, mdAndUp, mobile} = useDisplay();
			return {xs, sm, md, lg, xl, smAndDown, mdAndUp, mobile}
		}
	}
</script>

