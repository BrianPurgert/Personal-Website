<template>
    <v-timeline-item>
        <template v-slot:icon>
            <img src="/SimpleGSA/simplegsa_icon.png" style='max-width: 100px'/>
        </template>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2017"
            ></div>
        </template>

    </v-timeline-item>
</template>
<script>
export default {
	name: 'simplegsa-timeline-item'
}
</script>