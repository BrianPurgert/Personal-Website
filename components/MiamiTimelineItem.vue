<template >
	<v-timeline-item >
		<v-container style = "min-height: 200px" >
			<v-card
					class = "mx-auto"
					width = "600"
			>
				<v-card-title class = "headline" >Miami University Computer Science & Computer Engineering</v-card-title >
				<v-card-text >

				</v-card-text >

			</v-card >

		</v-container >
		<template v-slot:opposite >
			<div
					class = "bp-year"
					v-text = "2011"
			></div >
		</template >
		<template v-slot:icon >
			<img src = "/miami/miami-university.png" style = 'max-width: 80px' />
		</template >
	</v-timeline-item >
</template >
<script >
export default {
	name: 'miami-timeline-item',
	setup() {
		const items = ['/crysis/deathracestart.jpg',
			'/crysis/highwaytohellcave.jpg',
			'/crysis/2007_12_09.jpg',
			'/crysis/2008_cryengine.jpg']
		return { items }
	}
}
</script >