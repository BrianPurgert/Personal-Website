<script setup>
import { process }     from "std-env"
import CurrentProjects from "~/pages/CurrentProjects.vue";

// Extracted SEO and head configurations into constants
const seoOptions = {
	description: "Brian Purgert's personal portfolio showcasing web development projects and skills.",
	ogTitle: "Brian Purgert | Web Development Portfolio",
	ogDescription: "Brian Purgert's personal portfolio showcasing web development projects and skills.",
	ogImage: "/favicon.png",
	ogUrl: "https://brianpurgert2.com",
	twitterTitle: "Brian Purgert | Web Development Portfolio",
	twitterDescription: "Brian Purgert's personal portfolio showcasing web development projects and skills.",
	twitterImage: "/favicon.png",
	twitterCard: "summary",
};

const headOptions = {
	htmlAttrs: { lang: "en" },
	link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
};

// Dedicated function handling client-side console logging
function logSourceCode() {
	if (process.client) {
		const consoleStyles = "color: greenyellow; font-size: 15px;";
		console.log(
			"%cSource Code: https://github.com/BrianPurgert/Personal-Website",
			consoleStyles,
		);
	}
}

// Invoke composable hooks and client-side logging function
useSeoMeta(seoOptions);
useHead(headOptions);
logSourceCode();
</script>

<template>
	  <BrianIsTyping class="mt-10 mb-0 mx-auto" :displayTextArray="['rian']" />
	  <v-container>
			<projects-timeline />
			<CurrentProjects />
	  </v-container>
	  <div class="my-6"></div>
</template>

<style>
/* Styles extracted into external stylesheets for clarity and maintainability */
</style>
