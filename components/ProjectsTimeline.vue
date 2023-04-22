<template>
	<v-card class = "mx-auto elevation-2">
		<template v-slot:title>
			<h1
				class = "text-h5 bp-shadow shadow-blue"
				style = "font-style:  normal;">my Projects</h1>
		</template>
	</v-card>
	<v-timeline
		align = "center"
		class = "mx-auto"
		line-inset = "28"
		side = "end"
	>
		<!--    2004 - 12 Battlefield 1942 modding IS82	-->
		<is82-timeline-item/>
		<!--	2006 - 14 Runescape Scripting  	-->
		<runescape-timeline-item/>
		<!--    2008 - 16 Crysis Interstate   -->
		<cryengine-timeline-item/>
		<!--	2010 - 18 DoodleBike   -->
		<doodlebike-timeline-item/>
		<!--	2010 - 18 SpaceBike	-->
		<spacebike-timeline-item/>
		<!--	2012 - 20	Project High Flight	-->
		<!--	2014 - 22 Smart Diaper-->

		<!--	2017  SimpleGSA   -->
		<simplegsa-timeline-item/>
		<!--	2018 	Ruby Discord   -->
		<ruby-timeline-item/>
		<!--	2019 	Twixer Chrome Extension   -->
		<twixer-timeline-item/>
	</v-timeline>
</template>

<script setup>
</script>

