<template>
  <v-card color="default" variant="flat" class="bigname mx-auto pt-8 elevation-2 overflow-visible">
    <BrianIsTyping :displayTextArray="['rian purgert   ','urgert ']"/>
  </v-card>


  <v-timeline
      direction="vertical"
      align="start"
      density="comfortable"
      side="end"
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
    <!--	2011 - 19	-->
    <!--		<cap50-timeline-item />-->
    <!--	2012 - 20	Project High Flight	-->
    <miami-timeline-item/>
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