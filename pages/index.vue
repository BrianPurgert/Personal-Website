<script setup>
console.log(
	'%c this site was built NuxtJS, Vuetify and TypeScript: : ' +
	'%c https://github.com/BrianPurgert/Personal-Website',
	'font-style: italic; color: #bada55; font-size: 0.8em;',
	'font-style: italic; color: #bada55; font-size: 1em; padding: 0.5em;'
)
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
