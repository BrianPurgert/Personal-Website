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

			<Carousel :slides = "slides"></Carousel>


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


					<div style = "max-width: 853px">
						<div style = "position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
							<iframe
									src = "https://govconsvcs-my.sharepoint.com/personal/brianpurgert_govconsvcs_com/_layouts/15/embed.aspx?UniqueId=43627872-0795-40a9-865e-79b057e3fa07&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Afalse%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create"
									width = "853"
									height = "480"
									frameborder = "0"
									scrolling = "no"
									allowfullscreen
									title = "desktop_2018_11_27___10_57_05_02_proxy.mp4"
									style = "border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe>
						</div>
					</div>
					<video
							autoplay muted
							width = "320"
							height = "240"
							controls
							disablepictureinpicture
							controlslist = "nodownload noplaybackrate">
						>
						<source
								src = "https://firebasestorage.googleapis.com/v0/b/brianpurgert2/o/Doodle%20Bike_2018-06-25-09-24-52.mp4?alt=media&token=65ee4d06-2069-4d76-9c46-77ee7130f0c6"
								type = "video/mp4">
					</video>
					<video
							autoplay muted
							width = "320"
							height = "240"
							controls
							disablepictureinpicture
							controlslist = "nodownload noplaybackrate">
						>
						<source
								src = "https://govconsvcs-my.sharepoint.com/personal/brianpurgert_govconsvcs_com/_layouts/15/guestaccess.aspx?docid=01c33540ab0d74ba5b40cf2b65e0d6359&authkey=ASaNqecJBoQaOplGgifQhm0&e=vTjeFm"
								type = "video/mp4">
					</video>


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

