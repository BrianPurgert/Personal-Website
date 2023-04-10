<template>

	<v-container>
		<v-card
			class = "mx-auto"
			elevation = "8"
			width = "600"

		>
			<v-slide-group
				v-model = "model"
				class = "pa-4"
				selected-class = "bg-primary"
				show-arrows
			>
				<v-slide-group-item
					v-for = "n in 8"
					:key = "n"
					v-slot = "{ isSelected, toggle, selectedClass }"
				>
					<v-card
						color = "blue-lighten-1"
						:class = "['ma-2', selectedClass]"
						height = "200"
						width = "250"
						@click = "toggle"
					>
						<div class = "d-flex fill-height align-center justify-center">
							<v-scale-transition>
								<v-icon
									v-if = "isSelected"
									color = "white"
									size = "48"
									icon = "mdi-close-circle-outline"
								></v-icon>
							</v-scale-transition>
						</div>
					</v-card>
				</v-slide-group-item>
			</v-slide-group>

			<v-expand-transition>
				<v-sheet
					v-if = "model != null"
					height = "300"
				>
					<div class = "d-flex fill-height align-center justify-center">
						<h3 class = "text-h6">
							Selected {{ model }}
						</h3>
					</div>
				</v-sheet>
			</v-expand-transition>
		</v-card>
	</v-container>
</template>
<script>
	export default {
		data: () => ({
			model: null,
			images:[]
		}),
		name: 'crysis'
	}
</script>