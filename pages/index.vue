<script setup>
if (process.client) {
	// Add custom CSS styles for the console message
	const consoleStyles = `
    color: blue;
    font-size: 20px;
    font-weight: bold;
  `;

	// Log the message in the console with the custom styles
	console.log('%cSource Code: https://github.com/BrianPurgert/Personal-Website', consoleStyles);
}

</script>

<template>
    <brian-is-typing></brian-is-typing>
    <projects-timeline/>
    <v-card class="mx-auto elevation-2">
        <template v-slot:title>
            <h1
                    class="text-h5 bp-shadow shadow-blue"
                    style="font-style:  normal;">to be continued</h1>
        </template>
        <template v-slot:default>

        </template>
    </v-card>
</template>
