<template>
	<v-card class = "elevation-2" style = "min-width: 35vw!important;">
		<v-carousel
				show-arrows = "hover">
			<v-carousel-item
					v-for = "(slide,i) in slides"
					:key = "i"
					:src = "slide.src"
					cover

			></v-carousel-item>
		</v-carousel>
	</v-card>
</template>
<script>
    export default {
        name: 'carousel',
        props: {
            slides: {}
        }
    }
</script>