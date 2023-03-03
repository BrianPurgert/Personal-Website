<template>
	<v-carousel
			show-arrows = "hover">
		<v-carousel-item
				v-for = "(slide,i) in slides"
				:key = "i"
				:src = "slide.src"
				cover

		></v-carousel-item>
	</v-carousel>
</template>
<script>
    export default {
        name: 'carousel',
        props: {
            slides: {}
        }
    }
</script>