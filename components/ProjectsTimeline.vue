<template >
	  <v-progress-linear
			:height = "10"
			style = 'transform: rotate(270deg);'
			stream
			buffer-value = "60"
			color = "cyan"
			model-value = "20"
			rounded
			striped
			tile ></v-progress-linear >
	  <v-progress-linear
			:height = "10"
			style = 'transform: rotate(40deg);'
			stream
			buffer-value = "60"
			color = "cyan"
			model-value = "50"
			rounded
			striped
			tile ></v-progress-linear >

	  <v-timeline
			align = "start"
			density = "default"
			direction = "vertical"
			side = "end"
			line-inset = '100px'

			truncate-line = 'start'
	  >

			<!--    2004 - 12 Battlefield 1942 modding IS82	-->
			<is82-timeline-item />
			<!--	2006 - 14 Runescape Scripting  	-->
			<runescape-timeline-item />
			<!--    2008 - 16 Crysis Interstate   -->
			<cryengine-timeline-item />
			<!--	2010 - 18 DoodleBike   -->
			<doodlebike-timeline-item />
			<!--	2010 - 18 SpaceBike	-->
			<spacebike-timeline-item />
			<!--	2011 - 19	-->
			<!--		<cap50-timeline-item />-->
			<!--	2012 - 20	Project High Flight	-->
			<miami-timeline-item />
			<!--	2014 - 22 Smart Diaper-->
			<!--	2017  SimpleGSA   -->
			<simplegsa-timeline-item />
			<!--	2018 	Ruby Discord   -->
			<ruby-timeline-item />
			<!--	2019 	Twixer Chrome Extension   -->

	  </v-timeline >
	  <twixer-timeline-item />
</template >
<script setup >
import SimplegsaTimelineItem from "~/components/player/SimplegsaTimelineItem.vue"
</script >

