<script lang = "ts" setup >


</script >

<template >

	<v-container >
		<v-card style = '' class = "pa-2" >
			<div class = "glowy  " >


			</div >
		</v-card >
	</v-container >


</template >

<style scoped >
@property --rotate{
	syntax:        "<angle>";
	initial-value: 132deg;
	inherits:      false;
}

:root{
	--card-height: 400px;
	--card-width:  400px;
}

.glowy{
	background:      #191c29;
	width:           400px !important;
	height:          400px !important;
	padding:         3px !important;
	position:        relative;
	border-radius:   6px;
	justify-content: center;
	align-items:     center;
	text-align:      center;
	display:         flex;
	font-size:       1.5em;
	color:           rgb(88 199 250 / 0%);
	cursor:          pointer;
	font-family:     cursive;
}

.glowy:hover{
	color:      rgb(88 199 250 / 100%);
	transition: color 1s;
}

.glowy:hover:before, .glowy:hover:after{
	animation: none;
	opacity:   0;
}

.glowy::before{
	content:          "";
	width:            104%;
	height:           102%;
	border-radius:    8px;
	background-image: linear-gradient(
			                  0deg, #5ddcff, #3c67e3 43%, #4e00c2);
	position:         absolute;
	z-index:          -1;
	top:              -1%;
	left:             -2%;
	animation:        spin 2.5s linear infinite;
}

.glowy::after{
	position:   absolute;
	content:    "";
	top:        calc(400px / 6);
	left:       0;
	right:      0;
	z-index:    -1;
	height:     100%;
	width:      100%;
	margin:     0 auto;
	transform:  scale(0.8);
	filter:     blur(calc(400px / 6));
	opacity:    1;
	transition: opacity .5s;
	animation:  spin 2.5s linear infinite;
}

.glowy::after{
	background-image: linear-gradient(
			                  0deg, #5ddcff, #3c67e3 43%, #4e00c2);
}

@keyframes spin{
	0%{
		--rotate: 0deg;
	}
	100%{
		--rotate: 360deg;
	}
}

a{
	color:           #1663ad;
	text-decoration: none;
	font-family:     sans-serif;
	font-weight:     bold;
	margin-top:      2rem;
}
</style >