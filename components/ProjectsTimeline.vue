<!--
  2004	Battlefield 1942 modding
  2006	Scripting
  2008	Crysis Interstate
  2010 	Space Bike
  2012 	Project High Flight
  https://www.facebook.com/ProjectHighFlight/photos
  2014 	Smart Diaper
  2017  SimpleGSA
  12/02/2018 12:24 AM	Ruby Discord
  2019 	Twixer Chrome Extension
  -->

<template >
	<v-timeline >
		<v-timeline-item class = "twixer" dot-color = "transparent" line-inset = "25" size = "x-large" >
			<template v-slot:icon >
				<v-avatar image = "/twixer/twixer_icon.svg" rounded = "0" size = "130%" ></v-avatar >
			</template >
			<template v-slot:opposite >
				<div class = "pt-1 headline font-weight-bold text-cyan" v-text = "2019" ></div >
			</template >
			<v-card class = "elevation-2" >
				<v-card-title class = "text-h5" >
					Twixer Chrome Extension
				</v-card-title >
				<v-card-text >
					<img alt = "Twixer Logo" src = "/twixer/logo_side.svg" >
					<!--					<img alt = "Sidebar" src = "/twixer/sidebar.png" >-->

				</v-card-text >
			</v-card >
		</v-timeline-item >
		<v-timeline-item >
			<template v-slot:opposite >
				<div class = "pt-1 headline font-weight-bold text-cyan" v-text = "2019" ></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-row >
						<v-col >
							<v-card-title class = "text-h5" >
								Created the Ruby Discord
							</v-card-title >
							<v-card-text >
								<Icon size = '4em' name = "logos:ruby" />
								<Icon size = '5em' name = "logos:discord-icon" />
							</v-card-text >
						</v-col >
					</v-row >
				</v-sheet >
			</v-container >
		</v-timeline-item >
		<v-timeline-item >
			<template v-slot:opposite >
				<div class = "pt-1 headline font-weight-bold text-cyan" v-text = "2017" ></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-card-title class = "text-h5" >
						SimpleGSA
					</v-card-title >
					<v-card-text >
						<img alt = "SimpleGSA Logo" src = "/simplegsa/simplegsa_logo.svg" >
						<img alt = "SimpleGSA" src = "/simplegsa/simplegsa.png" >
					</v-card-text >
				</v-sheet >
			</v-container >
		</v-timeline-item >
		<v-timeline-item >
			<template v-slot:opposite >
				<div class = "pt-1 headline font-weight-bold text-cyan" v-text = "2014" ></div >
			</template >
			<v-container >
				<v-sheet class = "elevation-2" >
					<v-card-title class = "text-h5" >
						Smart Diaper
					</v-card-title >
					<v-card-text >
					</v-card-text >
				</v-sheet >
			</v-container >


			<!--</v-row>-->
			<!--				</v-sheet >-->
			<!--			</v-container >-->


		</v-timeline-item >

	</v-timeline >
</template >

<script >
export default {
	name: 'ProjectsTimeline', data: () => ({
		years: [{
			color: 'cyan', year: '1960'
		}, {
			color: 'green', year: '1970'
		}, {
			color: 'pink', year: '1980'
		}, {
			color: 'amber', year: '1990'
		}, {
			color: 'orange', year: '2000'
		}]
	})
}

</script >

<style >
.twixer .v-timeline-divider__dot{
	background-color: transparent !important;
}
</style >