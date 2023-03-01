<template>
	<v-carousel hide-delimiters>
		<v-carousel-item
				v-for = "(item,i) in items"
				:key = "i"
				:src = "item.src"
				cover
		></v-carousel-item>
	</v-carousel>
</template>
<script>
    export default {
        name: 'space-bike-carousel',
        data() {
            return {
                items: [
                    {
                        src: './SpaceBike/screen1.jpg',
                    },
                    {
                        src: '/SpaceBike/screen2.jpg',
                    },
                ],
            }
        },
    }
</script>
