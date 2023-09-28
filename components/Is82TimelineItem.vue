<template>
    <v-timeline-item>

        <v-container>
            <v-card
                    id="is82"
                    class="mx-auto"
                    width="600"
            >
                <v-carousel
                        continuous
                        cycle
                        hide-delimiters
                >
                    <v-carousel-item
                            cover
                            src="/is82/2004.jpg"
                    ></v-carousel-item>
                    <v-carousel-item
                            cover
                            src="/is82/2004_1.jpg"
                    ></v-carousel-item>
                    <v-carousel-item
                            cover
                            src="/is82/2004_2.jpg"
                    ></v-carousel-item>
                    <v-carousel-item
                            cover
                            src="/is82/addict.jpg"
                    ></v-carousel-item>

                    <v-card-title>Mod Mapping with Battlecraft 1942</v-card-title>
                    <v-card-subtitle>images from 2004 map I created</v-card-subtitle>
                </v-carousel>


            </v-card>


        </v-container>
        <template v-slot:opposite>
            <div
                    class="bp-year"

            >
                12/yrs
            </div>
        </template>
        <template v-slot:icon>
            <img src="/is82/backside.png" style='max-width: 80px'/>
        </template>
    </v-timeline-item>
</template>