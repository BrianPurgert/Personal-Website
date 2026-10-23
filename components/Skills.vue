<template>
	<div class="stack">
		<h2 class="stack-title">Stack</h2>
		<p class="stack-sub">
			The 2027 toolkit is the 2006 one, industrialized: automate what a screen shows,
			turn messy data into products, ship small and in public.
		</p>

		<ul class="capabilities">
			<li v-for="capability in capabilities" :key="capability">{{ capability }}</li>
		</ul>

		<ul class="skill-grid">
			<li v-for="skill in skills" :key="skill.label" class="skill">
				<Icon :name="skill.icon" size="40" />
				<span class="bp-mono skill-label">{{ skill.label }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
const capabilities = [
	"AI / LLM product pipelines",
	"Universal web parsing & extraction",
	"ETL over federal data (FPDS · GSA · SAM)",
	"Full-stack product engineering",
	"Browser extensions",
	"Game development (Unity · CryEngine)",
	"Systems & networks (Azure AD · FortiGate · Asterisk)",
	"Community building (Ruby Discord)"
]

const skills = [
	{ icon: "skill-icons:typescript", label: "TypeScript" },
	{ icon: "skill-icons:javascript", label: "JavaScript" },
	{ icon: "skill-icons:ruby", label: "Ruby" },
	{ icon: "skill-icons:python-light", label: "Python" },
	{ icon: "skill-icons:vuejs-light", label: "Vue" },
	{ icon: "skill-icons:nuxtjs-light", label: "Nuxt" },
	{ icon: "skill-icons:react-light", label: "React" },
	{ icon: "skill-icons:nextjs-light", label: "Next.js" },
	{ icon: "skill-icons:nodejs-light", label: "Node.js" },
	{ icon: "skill-icons:mysql-light", label: "MySQL" },
	{ icon: "skill-icons:redis-light", label: "Redis" },
	{ icon: "skill-icons:aws-light", label: "AWS" },
	{ icon: "skill-icons:azure-light", label: "Azure" },
	{ icon: "skill-icons:gcp-light", label: "GCP" },
	{ icon: "skill-icons:vercel-light", label: "Vercel" },
	{ icon: "skill-icons:github-light", label: "GitHub" },
	{ icon: "skill-icons:git", label: "Git" },
	{ icon: "skill-icons:linux-light", label: "Linux" },
	{ icon: "skill-icons:jenkins-light", label: "Jenkins" },
	{ icon: "skill-icons:java-light", label: "Java" },
	{ icon: "skill-icons:php-light", label: "PHP" },
	{ icon: "skill-icons:unity-light", label: "Unity" },
	{ icon: "skill-icons:matlab-light", label: "MATLAB" }
]
</script>

<style scoped>
.stack { padding: 2rem 0 1rem; }
.stack-title { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 0.6rem; }
.stack-sub { line-height: 1.65; max-width: 68ch; margin: 0 0 1.4rem; }
.capabilities {
	list-style: none; margin: 0 0 2rem; padding: 0;
	display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.capabilities li { padding: 0.65rem 1rem 0.65rem 0; border-top: 1px solid rgba(255, 255, 255, 0.18); font-weight: 550; }
.skill-grid {
	list-style: none; margin: 0; padding: 1.5rem 0 0;
	border-top: 1px solid rgba(255, 255, 255, 0.18);
	display: flex; flex-wrap: wrap; gap: 1.4rem 1.6rem;
}
.skill { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; width: 64px; text-align: center; }
.skill-label { font-size: 0.68rem; }
</style>
