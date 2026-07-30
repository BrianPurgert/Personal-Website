<script setup>
const description = "Brian Purgert's personal portfolio showcasing web development projects and skills."

useSeoMeta({
	title: "Brian Purgert | Web Development Portfolio",
	description,
	ogTitle: "Brian Purgert | Web Development Portfolio",
	ogDescription: description,
	ogImage: "/favicon.png",
	ogUrl: "https://brianpurgert2.com",
	twitterTitle: "Brian Purgert | Web Development Portfolio",
	twitterDescription: description,
	twitterImage: "/favicon.png",
	twitterCard: "summary"
})

useHead({
	htmlAttrs: {lang: "en"},
	link: [{rel: "icon", type: "image/png", href: "/favicon.png"}]
})

if (import.meta.client) {
	console.log(
		"%cSource Code: https://github.com/BrianPurgert/Personal-Website",
		"color: greenyellow; font-size: 15px;"
	)
}
</script>

<template>
	  <site-logo class="mt-10 mb-0 mx-auto" />
	  <v-container>
			<projects-timeline />
			<skills class="mt-10" />
	  </v-container>
</template>
