<template>
    <v-timeline-item>
        <template v-slot:icon>
            <img height="80" src="/cap50/Cap50_logo.svg" style='max-width: 100px'/>
        </template>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2017"
            ></div>
        </template>
        <template v-slot:default>
            <v-container style="min-height: 200px">

            </v-container>
        </template>

    </v-timeline-item>
</template>
<script>
export default {
	name: 'simplegsa-timeline-item'
}
</script>