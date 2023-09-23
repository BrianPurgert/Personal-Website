<template>
  <v-timeline-item>
    <template v-slot:opposite>
      <div
          class="bp-year"
      >
        16/yrs
      </div>
    </template>
    <template v-slot:icon>
      <nuxt-icon filled name="cryengine-logo-vertical-white" style='font-size: 8em;'/>
    </template>
    <template v-slot:default>
      <v-container>
        <v-card
            class="mx-auto pa-0"
            elevation="4"

        >
          <v-slide-group
              v-model="model"
              class="pa-0"
              selected-class="bg-primary"
              show-arrows
          >
            <v-slide-group-item
                v-for="(image,n) in images"
                :key="n"
                v-slot="{ isSelected, toggle }"
            >
              <v-card
                  :class="['ma-2']"
                  color="bg-transparent"
                  width="700"
                  @click="toggle"
              >
                <v-img
                    :src="image"
                    height="400"

                ></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-card>
      </v-container>
    </template>
  </v-timeline-item>
</template>

<script>
export default {
  data: () => ({
    model: null,
    images: [
      '/crysis/deathracestart.jpg',
      '/crysis/highwaytohellcave.jpg',
      '/crysis/2007_12_09.jpg',
      '/crysis/2008_cryengine.jpg',
      '/crysis/2008_deathrace.jpg',
      '/crysis/2008_fan.jpg',
      '/crysis/2008_loop.jpg',
      '/crysis/a.jpg',
      '/crysis/arbiter.jpg',
      '/crysis/arbiter2.jpg',
      '/crysis/arbiter4.jpg',
      '/crysis/cliffside1.jpg',
      '/crysis/cliffside2.jpg',
      '/crysis/deathrace2.jpg',
      '/crysis/deathrace3.jpg',
      '/crysis/deathrace4.jpg',
      '/crysis/deathraceloop.jpg',
      '/crysis/dunes1.jpg',
      '/crysis/dunes4.jpg',
      '/crysis/flowchart.jpg',
      '/crysis/guns.jpg',
      '/crysis/intocar.jpg',
      '/crysis/mg.jpg',
      '/crysis/nitro.jpg',
      '/crysis/rockets.jpg',
      '/crysis/shotguns.jpg',
      '/crysis/wow.jpg'
    ]
  }),
  name: 'cryengine-timeline-item'
}
</script>