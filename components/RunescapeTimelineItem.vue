<template>
  <v-timeline-item>
    <template v-slot:opposite>
      <div
          class="bp-year"

      >14/yrs
      </div>
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
                  class="position-absolute dialog-top-transition bg-primary "
                  src="/runescape/trees.png"
                  style="z-index: 2; top: 0; left: 0; bottom: 0; right: 0;"
              >
              </v-img>
            </v-expand-transition>

            <v-img
                class="bg-white position-absolute dialog-top-transition"
                style="z-index: 1; top: -1px; left: -1px; right: -1px; bottom: 0;"
                src="/runescape/scar/asset_2113.svg"
            >
              <v-container
                  class="pr-1"

                  style="position: absolute; top: 75px; left: 30px; bottom: 0;">
                <div class="seDefault">
									<span
                      class="Comment">//The primary motivation for me to learn programming was my interest</span><br>
                  <span class="Comment">//in Autoing in RuneScape.</span><br>
                  <br>
                  <span class="Comment">//SCAR is an IDE for writing scripts that automate tasks in</span><br>
                  <span class="Comment">//video games like clicking on colors or images on the screen.</span><br>
                  <span class="Comment">//SCAR's syntax was inspired by Pascal.</span><br><br>
                  <span
                      class="Comment">//The first script I ever wrote was called script I wrote was called</span><br>
                  <br>
                  <span class="Reserved_word">program</span> &nbsp;<span
                    class="Identifier">briansFeatherBuyer</span><span
                    class="Symbol">;</span><br>
                  <span class="Reserved_word">begin</span><br>
                  &nbsp;<span class="Identifier">WriteLn</span><span
                    class="Symbol">(</span><span
                    class="String">'Hello World!'</span><span
                    class="Symbol">)</span><span
                    class="Symbol">;</span><br>
                  <span class="Reserved_word">end</span><span
                    class="Symbol">.</span></div>
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