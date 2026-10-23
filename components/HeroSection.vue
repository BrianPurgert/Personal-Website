<template>
	<header class="hero">
		<div aria-hidden="true" class="hero-logo">
			<site-logo />
		</div>

		<div class="hero-meta bp-mono">
			<span>Brian Purgert — Lakeland, FL</span>
			<span class="hero-meta-right">Est. 2004 · Age 12</span>
		</div>

		<h1 class="hero-title">
			Botting RuneScape in 2006.<br>
			A quarter-million downloads in 2010.<br>
			<span class="hero-title-accent">AI data systems in 2027.</span>
		</h1>

		<p class="hero-sub">
			Software developer &amp; systems engineer. Fifteen years at Capitol 50 building
			federal procurement tooling, founder of the Ruby Discord community, and currently
			shipping <a href="https://fpds.me" rel="noopener noreferrer" target="_blank">FPDS.me</a>,
			<a href="https://creatortobook.com" rel="noopener noreferrer" target="_blank">Creator to Book</a>
			and <a href="https://turingsinterface.com" rel="noopener noreferrer" target="_blank">Turing's Interface</a> —
			software that reads the web so people don't have to.
		</p>

		<dl class="hero-stats">
			<div class="hero-stat">
				<dt class="bp-mono">Years shipping</dt>
				<dd>{{ yearsShipping }}</dd>
			</div>
			<div class="hero-stat">
				<dt class="bp-mono">Game installs by 18</dt>
				<dd>250k+</dd>
			</div>
			<div class="hero-stat">
				<dt class="bp-mono">At Capitol 50 since</dt>
				<dd>2011</dd>
			</div>
			<div class="hero-stat">
				<dt class="bp-mono">Community</dt>
				<dd>Ruby Discord, founder</dd>
			</div>
		</dl>

		<nav aria-label="Page sections" class="hero-links">
			<a href="#now">What's shipping now <span aria-hidden="true">↓</span></a>
			<a href="#build-log">The full build log, 2004 → <span aria-hidden="true">↓</span></a>
			<span class="hero-kbd bp-mono">Ctrl K — jump anywhere</span>
		</nav>
	</header>
</template>

<script setup>
const yearsShipping = new Date().getFullYear() - 2004
</script>

<style scoped>
.hero { padding: 2rem 0 3rem; }
.hero-logo { max-width: 720px; margin: 1rem auto 2.5rem; }
.hero-meta {
	display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
	font-size: 0.8rem; padding-bottom: 0.75rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.hero-title {
	font-size: clamp(2rem, 5.2vw, 3.9rem);
	line-height: 1.08; font-weight: 800; letter-spacing: -0.02em;
	margin: 1.75rem 0 1.25rem;
}
.hero-title-accent { color: rgb(189, 44, 68); }
.hero-sub { font-size: 1.1rem; line-height: 1.65; max-width: 62ch; margin: 0 0 2rem; }
.hero-sub a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
.hero-stats {
	display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	border-top: 1px solid rgba(255, 255, 255, 0.18);
	border-bottom: 1px solid rgba(255, 255, 255, 0.18);
	margin: 0 0 1.75rem;
}
.hero-stat { padding: 1rem 1rem 1rem 0; }
.hero-stat dt { font-size: 0.72rem; opacity: 0.75; margin-bottom: 0.35rem; }
.hero-stat dd { font-size: 1.45rem; font-weight: 700; margin: 0; line-height: 1.15; }
.hero-links { display: flex; gap: 1.75rem; flex-wrap: wrap; align-items: baseline; }
.hero-links a { font-weight: 600; text-decoration: none; border-bottom: 2px solid rgb(189, 44, 68); padding-bottom: 2px; }
.hero-kbd { font-size: 0.78rem; opacity: 0.75; margin-left: auto; }
@media (max-width: 600px) { .hero-kbd { margin-left: 0; } }
</style>
