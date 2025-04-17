<template >


	  <v-timeline
			class = ''
			align = "start"
			density = "comfortable"

			side = "end"
			line-inset = '30px'
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

