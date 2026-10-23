<template>
	<Teleport to="body">
		<div v-if="open" class="palette-backdrop" @click.self="close">
			<div aria-label="Jump to" aria-modal="true" class="palette" role="dialog">
				<input
					ref="inputEl"
					v-model="query"
					aria-label="Filter destinations"
					class="palette-input"
					placeholder="Jump to a section, project, or link…"
					type="text"
					@keydown.down.prevent="move(1)"
					@keydown.up.prevent="move(-1)"
					@keydown.enter.prevent="activateSelected"
					@keydown.esc.prevent="close"
				>
				<ul class="palette-list" role="listbox">
					<li
						v-for="(item, i) in filtered"
						:key="item.label"
						:aria-selected="i === selected"
						:class="{ 'is-selected': i === selected }"
						class="palette-item"
						role="option"
						@click="activate(item)"
						@mouseenter="selected = i"
					>
						<span class="palette-label">{{ item.label }}</span>
						<span class="palette-hint bp-mono">{{ item.hint }}</span>
					</li>
					<li v-if="!filtered.length" class="palette-empty">Nothing matches.</li>
				</ul>
				<p class="palette-foot bp-mono">↑↓ navigate · Enter open · Esc close</p>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue"

const destinations = [
	{ label: "Now shipping", hint: "Section", target: "#now" },
	{ label: "The build log (2004 →)", hint: "Section", target: "#build-log" },
	{ label: "Stack", hint: "Section", target: "#stack" },
	{ label: "FPDS", hint: "fpds.me", target: "https://fpds.me" },
	{ label: "Turing's Interface", hint: "turingsinterface.com", target: "https://turingsinterface.com" },
	{ label: "Creator to Book", hint: "creatortobook.com", target: "https://creatortobook.com" },
	{ label: "GitHub", hint: "@BrianPurgert", target: "https://github.com/BrianPurgert/" },
	{ label: "LinkedIn", hint: "Profile", target: "https://www.linkedin.com/in/brian-purgert/" },
	{ label: "CodePen", hint: "Experiments", target: "https://codepen.io/BrianPurgert/" },
	{ label: "Resume (PDF)", hint: "Download", target: "/BrianPurgert_Resume.pdf" },
	{ label: "Ruby Discord", hint: "Community", target: "https://discord.com/servers/ruby-518658712081268738" },
	{ label: "Site source", hint: "This repo", target: "https://github.com/BrianPurgert/Personal-Website" }
]

const open = ref(false)
const query = ref("")
const selected = ref(0)
const inputEl = ref(null)

const filtered = computed(() => {
	const q = query.value.trim().toLowerCase()
	return q ? destinations.filter(d => d.label.toLowerCase().includes(q)) : destinations
})

watch(query, () => { selected.value = 0 })
watch(open, async (isOpen) => {
	if (isOpen) { await nextTick(); inputEl.value?.focus() }
})

function move(delta) {
	if (!filtered.value.length) return
	selected.value = (selected.value + delta + filtered.value.length) % filtered.value.length
}
function activate(item) {
	close()
	if (item.target.startsWith("#")) {
		document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth" })
		history.replaceState(null, "", item.target)
	} else {
		window.open(item.target, "_blank", "noopener,noreferrer")
	}
}
function activateSelected() {
	const item = filtered.value[selected.value]
	if (item) activate(item)
}
function close() { open.value = false; query.value = "" }
function toggle() { open.value ? close() : (open.value = true) }

function onKeydown(event) {
	if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
		event.preventDefault(); toggle()
	} else if (event.key === "Escape" && open.value) {
		close()
	}
}
function onOpenEvent() { open.value = true }

onMounted(() => {
	window.addEventListener("keydown", onKeydown)
	window.addEventListener("bp:palette", onOpenEvent)
})
onUnmounted(() => {
	window.removeEventListener("keydown", onKeydown)
	window.removeEventListener("bp:palette", onOpenEvent)
})
</script>

<style scoped>
.palette-backdrop {
	position: fixed; inset: 0; z-index: 2400;
	background: rgba(10, 10, 10, 0.72);
	display: flex; justify-content: center; align-items: flex-start;
	padding: 12vh 1rem 1rem;
}
.palette {
	width: min(560px, 100%); background: #1d1d1d; color: #fff;
	border: 1px solid rgba(255, 255, 255, 0.22); border-radius: 4px;
	box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
}
.palette-input {
	width: 100%; padding: 0.9rem 1rem; font-size: 1rem; color: inherit;
	background: transparent; border: 0; border-bottom: 1px solid rgba(255, 255, 255, 0.18);
	outline: none;
}
.palette-list { list-style: none; margin: 0; padding: 0.4rem; max-height: 50vh; overflow-y: auto; }
.palette-item {
	display: flex; justify-content: space-between; gap: 1rem; align-items: baseline;
	padding: 0.55rem 0.6rem; border-radius: 3px; cursor: pointer;
}
.palette-item.is-selected { background: rgb(189, 44, 68); }
.palette-hint { font-size: 0.75rem; opacity: 0.85; }
.palette-empty { padding: 0.55rem 0.6rem; }
.palette-foot { margin: 0; padding: 0.6rem 1rem; font-size: 0.72rem; opacity: 0.75; border-top: 1px solid rgba(255, 255, 255, 0.18); }
</style>
