<template>
	<div class="build-log">
		<h2 class="build-log-title">The build log</h2>
		<p class="build-log-sub">
			Twenty-three years, unabridged and oldest first — game mods, a RuneScape ban,
			two Play Store games before graduation, hardware, federal data, a community.
			Every era left a skill the next one needed.
		</p>

		<div aria-label="Filter build log by era" class="era-tabs" role="tablist">
			<button
				v-for="tab in tabs"
				:key="tab.id"
				:aria-selected="era === tab.id"
				:class="{ 'is-active': era === tab.id }"
				class="era-tab"
				role="tab"
				type="button"
				@click="era = tab.id"
			>
				{{ tab.label }} <span class="bp-mono era-count">{{ tab.count }}</span>
			</button>
		</div>

		<v-timeline
			align="start"
			density="comfortable"
			side="end"
			line-inset="30px"
			truncate-line="start"
		>
			<!-- 2004 · age 12 · Battlefield 1942 modding (IS82) -->
			<is82-timeline-item
				v-if="show('mods')"
				note="Age 12, mapping for the IS82 mod in Battlecraft 1942. First lesson: you can rebuild the world the game ships with."
			/>
			<!-- 2006 · age 14 · RuneScape scripting -->
			<runescape-timeline-item
				v-if="show('mods')"
				note="Learned to program to automate RuneScape — SCAR, a Pascal-like IDE that clicks colors and images on screen. Yes, he got banned. The automation instinct never left; Turing's Interface is its 2027 form."
			/>
			<!-- 2008 · age 16 · Crysis / CryEngine -->
			<cryengine-timeline-item
				v-if="show('mods')"
				note="Recreated the IS82 Death Race in CryEngine for Crysis — same idea, rebuilt from scratch in a professional engine at 16."
			/>
			<!-- 2010 · age 17 · DoodleBike -->
			<doodlebike-timeline-item
				v-if="show('mobile')"
				note="First published game: DoodleBike, shipped to the Play Store from high school."
			/>
			<!-- 2010 · age 17 · SpaceBike -->
			<spacebike-timeline-item
				v-if="show('mobile')"
				note="SpaceBike passed 250,000 installs while its developer was still in high school. Shipping to real users, early."
			/>
			<!-- 2011–2016 · Miami University -->
			<miami-timeline-item
				v-if="show('mobile')"
				note="Miami University, CS + Computer Engineering: GPS team lead on Project High Flight, the Smart Diaper senior design, IEEE treasurer, Nationwide Insurance intern (2014)."
			/>
			<!-- 2017 · SimpleGSA / Capitol 50 -->
			<simplegsa-timeline-item
				v-if="show('web')"
				note="SimpleGSA at Capitol 50 (2011–present): price comparison across GSA Advantage listings. The start of fifteen years of federal procurement data work — the road to FPDS.me."
			/>
			<!-- 2018 · Ruby Discord -->
			<ruby-timeline-item
				v-if="show('web')"
				note="Founded the Ruby Discord in 2018; it grew into one of the largest active Ruby communities anywhere."
			/>
			<!-- 2019 · Twixer Chrome extension -->
			<twixer-timeline-item v-if="show('web')" />
		</v-timeline>

		<p class="build-log-end">
			<span class="bp-mono">2020 → 2027</span>
			The current chapter — FPDS, Turing's Interface, Creator to Book — lives at the top:
			<a href="#now">Now shipping ↑</a>
		</p>
	</div>
</template>

<script setup>
import { ref } from "vue"

const era = ref("all")
const tabs = [
	{ id: "all", label: "All eras", count: 9 },
	{ id: "mods", label: "Mods & bots · 2004–08", count: 3 },
	{ id: "mobile", label: "Mobile & hardware · 2010–16", count: 3 },
	{ id: "web", label: "Web, data & community · 2017–19", count: 3 }
]

function show(itemEra) {
	return era.value === "all" || era.value === itemEra
}
</script>

<style scoped>
.build-log { padding: 2rem 0 1rem; }
.build-log-title { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 0.6rem; }
.build-log-sub { line-height: 1.65; max-width: 68ch; margin: 0 0 1.4rem; }
.era-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem 1.4rem; padding: 0.8rem 0; border-top: 1px solid rgba(255, 255, 255, 0.18); border-bottom: 1px solid rgba(255, 255, 255, 0.18); margin-bottom: 2rem; }
.era-tab {
	background: none; border: 0; padding: 0.25rem 0; cursor: pointer;
	font: inherit; font-weight: 600; color: inherit; opacity: 0.7;
	border-bottom: 2px solid transparent;
}
.era-tab:hover { opacity: 1; }
.era-tab.is-active { opacity: 1; border-bottom-color: rgb(189, 44, 68); }
.era-count { font-size: 0.72rem; opacity: 0.8; }
.build-log-end { margin: 2.5rem 0 1rem; padding-top: 1.2rem; border-top: 1px solid rgba(255, 255, 255, 0.18); line-height: 1.65; }
.build-log-end .bp-mono { display: block; font-size: 0.78rem; color: rgb(189, 44, 68); margin-bottom: 0.35rem; }
.build-log-end a { font-weight: 600; }
</style>
