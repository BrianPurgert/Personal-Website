<template >
	  <v-card class = "mx-auto elevation-2" >
			<template v-slot:title >
				  <h2 class = "text-h5 bp-shadow shadow-blue" style = "font-style: normal;" >Skills</h2 >
			</template >
			<v-card-text >
				  <v-container class = "d-flex flex-wrap justify-center pa-5" >
						<Icon
							  v-for = "tag in tags"
							  :key = "tag"
							  :name = "tag"
							  class = "d-flex align-center justify-center mx-2 my-2"
							  size = "48"
						/>
				  </v-container >
			</v-card-text >
	  </v-card >
</template >

<script setup >
const tags = [
	"skill-icons:aws-light",
	"skill-icons:azure-light",
	"skill-icons:gcp-light",
	"skill-icons:github-light",
	"skill-icons:java-light",
	"skill-icons:jenkins-light",
	"skill-icons:linux-light",
	"skill-icons:matlab-light",
	"skill-icons:mysql-light",
	"skill-icons:nextjs-light",
	"skill-icons:nodejs-light",
	"skill-icons:php-light",
	"skill-icons:python-light",
	"skill-icons:react-light",
	"skill-icons:redis-light",
	"skill-icons:unity-light",
	"skill-icons:vercel-light"
]
</script >
