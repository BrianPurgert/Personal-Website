<template>
	<div class="now">
		<div class="now-head">
			<h2 class="now-title">Now shipping</h2>
			<span class="bp-mono now-range">2026 → 2027</span>
		</div>

		<a
			v-for="project in projects"
			:key="project.title"
			:href="project.url"
			class="now-row"
			rel="noopener noreferrer"
			target="_blank"
		>
			<span class="now-index bp-mono">{{ project.index }}</span>
			<span class="now-main">
				<span class="now-name">{{ project.title }}</span>
				<span class="now-desc">{{ project.description }}</span>
				<span class="now-tags bp-mono">{{ project.tags }}</span>
			</span>
			<span class="now-domain bp-mono">{{ project.domain }} <span aria-hidden="true" class="now-arrow">↗</span></span>
		</a>

		<p class="now-also">
			<span class="bp-mono now-also-label">Also, since 2011</span>
			Capitol 50 Consultants — the GSA Advantage price-comparison platform (SimpleGSA),
			Ruby data APIs, and the Azure / network infrastructure underneath it.
		</p>
	</div>
</template>

<script setup>
const projects = [
	{
		index: "01",
		title: "FPDS",
		domain: "fpds.me",
		url: "https://fpds.me",
		description: "Search U.S. federal procurement data without wrestling a government interface from another era. Fifteen years of Capitol 50 / GSA data work, productized.",
		tags: "Federal data · Search · ETL"
	},
	{
		index: "02",
		title: "Turing's Interface",
		domain: "turingsinterface.com",
		url: "https://turingsinterface.com",
		description: "A universal website parser: point it at a page, get structured data back. The direct descendant of a 2006 RuneScape bot that clicked colors on a screen — now the screen is the whole web.",
		tags: "Agents · Parsing · APIs"
	},
	{
		index: "03",
		title: "Creator to Book",
		domain: "creatortobook.com",
		url: "https://creatortobook.com",
		description: "Turns a creator's back catalog — videos, posts, transcripts — into a structured, publishable book.",
		tags: "AI pipelines · Creators · Publishing"
	}
]
</script>

<style scoped>
.now { padding: 1rem 0 2rem; }
.now-head {
	display: flex; justify-content: space-between; align-items: baseline; gap: 1rem;
	padding-bottom: 0.5rem;
}
.now-title { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; margin: 0; }
.now-range { font-size: 0.85rem; }
.now-row {
	display: grid; grid-template-columns: 3rem 1fr auto; gap: 1rem; align-items: start;
	padding: 1.6rem 0.5rem; color: inherit; text-decoration: none;
	border-top: 1px solid rgba(255, 255, 255, 0.18);
}
.now-row:last-of-type { border-bottom: 1px solid rgba(255, 255, 255, 0.18); }
.now-row:hover, .now-row:focus-visible { background: rgba(255, 255, 255, 0.04); }
.now-index { color: rgb(189, 44, 68); font-size: 0.95rem; padding-top: 0.45rem; }
.now-main { display: block; }
.now-name { display: block; font-size: clamp(1.4rem, 2.8vw, 2rem); font-weight: 750; line-height: 1.15; }
.now-desc { display: block; margin-top: 0.5rem; line-height: 1.6; max-width: 68ch; }
.now-tags { display: block; margin-top: 0.65rem; font-size: 0.78rem; opacity: 0.8; }
.now-domain { font-size: 0.85rem; padding-top: 0.55rem; white-space: nowrap; }
.now-arrow { display: inline-block; transition: transform 160ms ease; }
.now-row:hover .now-arrow { transform: translate(2px, -2px); }
.now-also { margin: 1.5rem 0 0; line-height: 1.65; max-width: 72ch; }
.now-also-label { display: block; font-size: 0.78rem; margin-bottom: 0.35rem; color: rgb(189, 44, 68); }
@media (max-width: 640px) {
	.now-row { grid-template-columns: 2.2rem 1fr; }
	.now-domain { grid-column: 2; padding-top: 0; }
}
@media (prefers-reduced-motion: reduce) { .now-arrow { transition: none; } }
</style>
