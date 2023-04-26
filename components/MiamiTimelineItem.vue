<template>
    <v-timeline-item>
        <v-container style="min-height: 200px">
            <!--            <v-card-->
            <!--                    class="mx-auto"-->
            <!--                    width="600"-->
            <!--            >-->
            <!--                <v-carousel-->
            <!--                        cycle-->
            <!--                        hide-delimiters-->
            <!--                        show-arrows="hover"-->
            <!--                >-->
            <!--                    <v-carousel-item-->
            <!--                            cover-->
            <!--                            src="/is82/2004.jpg"-->
            <!--                    ></v-carousel-item>-->
            <!--                    <v-carousel-item-->
            <!--                            cover-->
            <!--                            src="/is82/2004_1.jpg"-->
            <!--                    ></v-carousel-item>-->
            <!--                    <v-carousel-item-->
            <!--                            cover-->
            <!--                            src="/is82/2004_2.jpg"-->
            <!--                    ></v-carousel-item>-->
            <!--                    <v-carousel-item-->
            <!--                            cover-->
            <!--                            src="/is82/addict.jpg"-->
            <!--                    ></v-carousel-item>-->

            <!--                    <v-card-title>Battlefield 1942 mapping</v-card-title>-->
            <!--                </v-carousel>-->
            <!--                <v-card-text>-->
            <!--                    when I was 12, I started making maps for a Battlefield 1942 mod called Interstate '82.-->
            <!--                </v-card-text>-->

            <!--            </v-card>-->

        </v-container>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2011"
            ></div>
        </template>
        <template v-slot:icon>
            <img src="/miami/miami-university.png" style='max-width: 80px'/>
        </template>
    </v-timeline-item>
</template>
<script>
export default {
	name: 'miami-timeline-item'
}
</script>