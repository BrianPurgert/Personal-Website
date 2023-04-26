<template>
    <v-card class="mx-auto elevation-2">
        <template v-slot:title>
            <h1
                    class="text-h5 bp-shadow shadow-blue"
                    style="font-style:  normal;">Skills</h1>
        </template>
        <template v-slot:default>
            <v-card-text>
                <v-container
                        class="d-flex flex-wrap  justify-center   pa-5"
                >
                    <Icon
                            v-for="tag in tags"
                            :key="tag"
                            :name="tag"
                            class="d-flex flex-row align-center justify-center mx-2 my-2"
                    >
                    </Icon>
                </v-container>
            </v-card-text>
        </template>
    </v-card>
    <v-container
            class="d-flex flex-wrap  justify-center   pa-5"
    >
    </v-container>

    <v-container
            class="d-flex flex-wrap  justify-center   pa-5"
    >
    </v-container>

</template>
<script>
export default {
	name: 'skills',
	data: function () {
		return {
			tags: [
				'skill-icons:java-light',
				'skill-icons:linux-light',
				'skill-icons:nextjs-light',
				'skill-icons:php-light',
				'skill-icons:redis-light',
				'skill-icons:aws-light',
				"skill-icons:azure-light",
				"skill-icons:github-light",
				"skill-icons:java-light",
				"skill-icons:jenkins-light",
				"skill-icons:linux-light",
				"skill-icons:matlab-light",
				"skill-icons:mysql-light",
				"skill-icons:nodejs-light",
				"skill-icons:python-light",
				"skill-icons:react-light",
				"skill-icons:unity-light",
				"skill-icons:vercel-light",
				"skill-icons:gcp-light"

			]
		}
	}
}
</script>