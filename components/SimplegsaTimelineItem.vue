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
        <!--        <v-container>-->
        <!--            <v-card-->
        <!--                    class="mx-auto"-->
        <!--                    width="600"-->
        <!--            >-->
        <!--                <v-img-->
        <!--                        cover-->
        <!--                        height="220px"-->
        <!--                        src="/SimpleGSA/gcs_logo_name_01.svg"-->
        <!--                >-->
        <!--                </v-img>-->
        <!--                <v-card-title class="">SimpleGSA</v-card-title>-->
        <!--            </v-card>-->
        <!--        </v-container>-->
    </v-timeline-item>
</template>
<script>
export default {
    name: 'simplegsa-timeline-item'
}
</script>