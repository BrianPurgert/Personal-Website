<script setup>
const description = "Brian Purgert — software developer & systems engineer in Lakeland, FL. Shipping since 2004: Battlefield mods at 12, RuneScape bots at 14, 250k+ game installs at 17. In 2027: FPDS.me federal procurement data, Turing's Interface universal web parser, and Creator to Book."

useSeoMeta({
	title: "Brian Purgert — Shipping since 2004. Building for 2027.",
	description,
	ogTitle: "Brian Purgert — Shipping since 2004. Building for 2027.",
	ogDescription: description,
	ogImage: "/favicon.png",
	ogUrl: "https://brianpurgert2.com",
	twitterTitle: "Brian Purgert — Shipping since 2004. Building for 2027.",
	twitterDescription: description,
	twitterImage: "/favicon.png",
	twitterCard: "summary"
})

useHead({
	htmlAttrs: { lang: "en" },
	link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
	meta: [{ name: "theme-color", content: "#121212" }],
	script: [{
		type: "application/ld+json",
		innerHTML: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Brian Purgert",
			url: "https://brianpurgert2.com",
			jobTitle: "Software Developer & Systems Engineer",
			address: { "@type": "PostalAddress", addressLocality: "Lakeland", addressRegion: "FL" },
			sameAs: [
				"https://github.com/BrianPurgert",
				"https://www.linkedin.com/in/brian-purgert/",
				"https://codepen.io/BrianPurgert/"
			],
			knowsAbout: ["AI product pipelines", "Web parsing", "Federal procurement data", "Ruby", "TypeScript", "Vue", "Nuxt"]
		})
	}]
})

if (import.meta.client) {
	console.log(
		"%cSource Code: https://github.com/BrianPurgert/Personal-Website\n%cTip: press Ctrl+K to jump around.",
		"color: greenyellow; font-size: 15px;",
		"color: #bd2c44; font-size: 13px;"
	)
}
</script>

<template>
	<hero-section />
	<section id="now" aria-label="Current projects">
		<now-shipping />
	</section>
	<section id="build-log" aria-label="Project history, 2004 to present">
		<projects-timeline />
	</section>
	<section id="stack" aria-label="Skills and stack">
		<skills />
	</section>
	<command-palette />
</template>
