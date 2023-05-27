<script setup >
if (process.client) {
	const consoleStyles = `color: greenyellow;font-size: 15px;`
	console.log('%cSource Code: https://github.com/BrianPurgert/Personal-Website', consoleStyles)
}
</script >

<template >
	<brian-is-typing ></brian-is-typing >
	<projects-timeline />
	<v-card class = "mx-auto elevation-2" >
		<template v-slot:title >
			<h1
					class = "text-h5 bp-shadow shadow-blue"
					style = "font-style:  normal;" >to be continued</h1 >
		</template >
		<template v-slot:default >

		</template >
	</v-card >
</template >
