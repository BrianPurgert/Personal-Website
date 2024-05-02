<style >

</style >
<script setup >
useSeoMeta({
	           description       : "[description]",
	           ogTitle           : "[og:title]",
	           ogDescription     : "[og:description]",
	           ogImage           : "/favicon.png",
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
	  <BrianIsTyping class = 'mt-10 mb-0 mx-auto' :displayTextArray = "['rian purgert']" />
	  <v-container >
			<projects-timeline />
			<currentProjects />
	  </v-container >
	  <div class = "my-6" ></div >


</template >
