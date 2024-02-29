<template >
	  <v-timeline-item >
			<template v-slot:icon >
				  <div
						class = "bp-year"
						v-text = "'2018'"
				  ></div >
			</template >
			<template v-slot:opposite >
				  <v-container >


				  </v-container >

			</template >
			<v-container >

				  <v-card
						class = "mx-auto w-100"

				  >
						<spinning-ruby ></spinning-ruby >
						<v-img
							  

							  src = "/RubyDiscord/programmers-best-friend.png"
						>
						</v-img >
						<v-card-title class = "" >Founded the Ruby Discord</v-card-title >
						<v-card-text >which has grown to be one of the largest active Ruby communities</v-card-text >
						<v-card-actions >
							  <v-btn
									href = "https://discord.com/servers/ruby-518658712081268738"
									variant = "text"
							  >
									Server Webpage
							  </v-btn >
						</v-card-actions >
				  </v-card >
			</v-container >
	  </v-timeline-item >
</template >
<!--<script>-->
<!--	export default {-->
<!--		name: 'ruby-timeline-item'-->
<!--	}-->
<!--</script>-->
<script setup lang = "ts" >
import SpinningRuby from './SpinningRuby.vue'
</script >