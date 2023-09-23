<template>
    <v-timeline-item>
        <v-container style="min-height: 200px">
            <v-card

                    class="mx-auto"
                    width="600"
            >

                <img src="miami/logo-horizontal-stacked.png"
                     style='max-width: 500px'/>
                <v-card-title class="headline">Computer Science & Computer Engineering
                </v-card-title>
                <v-card-text>

                </v-card-text>

            </v-card>

        </v-container>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2011"
            ></div>
        </template>
        <template v-slot:icon>
        </template>
    </v-timeline-item>
</template>
<script>
export default {
    name: 'miami-timeline-item'
}
</script>