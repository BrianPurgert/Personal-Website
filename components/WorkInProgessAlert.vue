<template >
	<v-dialog
			v-model = "dialog"
			open-delay = '200'
			elevation = '10'
			width = 'auto'
			timeout = '100000'
	>
		<v-card >
			<v-card-text >
				<Icon name = "emojione:construction" size = "1.5em" />
				<li >my contact info is in my resume</li >
				<li >I'm currently looking for a full-time position</li >
				<Icon name = "emojione:construction" size = "1.5em" />
			</v-card-text >
			<v-card-actions >
				<v-btn block color = "primary" @click = "dialog = false" >Close Dialog</v-btn >
			</v-card-actions >
		</v-card >


	</v-dialog >


</template >
<script >
export default {
	name: 'work-in-progess-alert', data: () => ({
		dialog: true, text: `Hello, I'm a snackbar`
	})
}
</script >