<template>
    <v-timeline-item>
        <template v-slot:opposite>
            <div
                    class="bp-year"
                    v-text="2006"
            ></div>
        </template>
        <template v-slot:icon>
            <nuxt-icon filled name="scar_divi" style='font-size: 5em'/>
        </template>

        <template v-slot:default>
            <v-container>
                <v-hover v-slot="{isHovering, props}">
                    <v-card
                            class="elevation-2 mx-auto"
                            height="510px"
                            v-bind="props"
                            width="600px"

                    >
                        <v-expand-transition>
                            <v-img
                                    v-if="isHovering"
                                    class="position-absolute dialog-top-transition "
                                    src="/runescape/trees.png"
                                    style="width: 600px; bottom: 0px;  z-index: 100;"
                            >
                            </v-img>
                        </v-expand-transition>

                        <v-img
                                class="bg-white pt-16 pl-5 pr-1 ma-0 w-100"
                                src="/runescape/scar/asset_2113.svg"
                        >
                            <v-container class="mt-1">
                                <div class="seDefault">
                                    <span class="Comment">//The primary motivation for me to learn programming was my interest</span><br>
                                    <span class="Comment">//in Autoing in RuneScape.</span><br>
                                    <br>
                                    <span class="Comment">//SCAR is an IDE for writing scripts that automate tasks in</span><br>
                                    <span class="Comment">//video games like clicking on colors or images on the screen.</span><br>
                                    <span class="Comment">//SCAR's syntax was inspired by Pascal.</span><br><br>
                                    <span class="Comment">//The first script I ever wrote was called script I wrote was called</span><br>
                                    <br>
                                    <span class="Reserved_word">program</span> &nbsp;<span class="Identifier">briansFeatherBuyer</span><span
                                        class="Symbol">;</span><br>
                                    <span class="Reserved_word">begin</span><br>
                                    &nbsp;<span class="Identifier">WriteLn</span><span
                                        class="Symbol">(</span><span class="String">'Hello World!'</span><span
                                        class="Symbol">)</span><span
                                        class="Symbol">;</span><br>
                                    <span class="Reserved_word">end</span><span class="Symbol">.</span></div>
                            </v-container>
                        </v-img>


                    </v-card>
                </v-hover>
            </v-container>
        </template>
    </v-timeline-item>
</template>
<script setup>
</script>