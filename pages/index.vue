<script setup >
useSeoMeta({
	           description       : "[description]",
	           ogTitle           : "[og:title]",
	           ogDescription     : "[og:description]",
	           ogImage           : "https://openclipart.org/image/800px/167281",
	           ogUrl             : "[og:url]",
	           twitterTitle      : "[twitter:title]",
	           twitterDescription: "[twitter:description]",
	           twitterImage      : "[twitter:image]",
	           twitterCard       : "summary"
           })

useHead({
	        htmlAttrs: {
		        lang: "en"
	        },
	        link     : [
		        {
			        rel : "icon",
			        type: "image/png",
			        href: "/favicon.png"
		        }
	        ]
        })
import CurrentProjects from "~/pages/CurrentProjects.vue"

if (process.client) {
	const consoleStyles = `color: greenyellow;font-size: 15px;`
	console.log("%cSource Code: https://github.com/BrianPurgert/Personal-Website", consoleStyles)
}
</script >

<template >
	  <!--	  <v-card color = "default" variant = "flat" class = "bigname mx-auto pt-1 elevation-2 overflow-visible" >-->
	  <BrianIsTyping class = 'mt-10 mb-0' :displayTextArray = "['rian purgert']" />


	  <!--	  </v-card >-->
	  <v-card color = "default" variant = "outlined" class = "ma-0 mx-auto  pt-4 elevation-7 " ></v-card >
	  <projects-timeline />
	  <currentProjects />
	  <div class = "my-6" ></div >


</template >
