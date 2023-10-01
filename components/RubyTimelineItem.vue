<template>
  <v-timeline-item>
    <template v-slot:icon>

    </template>
    <template v-slot:opposite>
      <div
          class="bp-year"
          v-text="'2018'"
      ></div>
    </template>
    <v-container>
      <v-card
          class="mx-auto"
          width="400"
      >
        <v-img
            cover
            height="220px"
            src="/RubyDiscord/ruby_discord.jpg"
        >
        </v-img>
        <v-card-title class="">Founded the Ruby Discord</v-card-title>
        <v-card-actions>
          <v-btn
              href="https://discord.com/servers/ruby-518658712081268738"
              variant="text"
          >
            Server Webpage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-timeline-item>
</template>
<!--<script>-->
<!--	export default {-->
<!--		name: 'ruby-timeline-item'-->
<!--	}-->
<!--</script>-->