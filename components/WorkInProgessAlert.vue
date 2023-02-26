<template >
	<v-snackbar
			v-model = "snackbar"

			open-delay = '200'
			timeout = '100000'
			vertical
	>
		<v-alert
				border = "bottom"
				color = "rgba(41, 117, 168, 1)"
				prominent
				text = ""
				type = "info"
				variant = "tonal"


		>
			<h4 ><strong >Hi my name is Brian and this is my portfolio </strong ></h4 >
			<li >This site is a work in progress!</li >
			<li >I live Lakeland, but I'm willing to relocate</li >
			<li >my contact info is in my
				<v-btn
						density = 'compact'
						download
						elevation = '10'
						href = "/BrianPurgert_Resume.pdf"
						prepend-icon = "mdi-download"
						size = 'small'

						variant = "outlined"
				>Resume
				</v-btn >
			</li >
		</v-alert >

		<template v-slot:actions >
			<v-btn
					@click = "snackbar = false"
			>
				Close
			</v-btn >
		</template >
	</v-snackbar >


</template >
<script >
export default {
	name: 'work-in-progess-alert', data: () => ({
		snackbar: true, text: `Hello, I'm a snackbar`
	})
}
</script >