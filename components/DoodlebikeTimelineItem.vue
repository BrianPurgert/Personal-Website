<template>
    <v-timeline-item>
        <v-container>
            <v-responsive aspect-ratio="16 / 9">
                <ClientOnly fallback-tag="span">
                    <v-card class="elevation-5 pa-0 mx-auto" width="600">
                        <VideoBackground
                                objectFit="cover"
                                src="/doodlebike/DoodleBike_Portfolio_final.webm"
                                style="min-height: 337px;"
                        >
                            <v-card-title class="video-overlay-text">Doodle Bike
                            </v-card-title>
                        </VideoBackground>
                        <v-card-subtitle>
                        </v-card-subtitle>
                    </v-card>
                </ClientOnly>
            </v-responsive>
        </v-container>
        <template v-slot:icon>
            <img src="/doodlebike/doodlebike_icon.png" style='max-width: 60px'/>
        </template>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2010"
            ></div>
        </template>
    </v-timeline-item>
</template>

<script setup>
</script>