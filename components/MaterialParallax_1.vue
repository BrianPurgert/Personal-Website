<template >
	  <div class = "parallax " >
			<div v-for = "(speed, index) in speeds" :key = "index" class = "object-wrapper "
				  :class = "`speed-${speed}`" >
				  <div class = "stripe" :class = "`stripe-${index + 1} elevation-11`" >

				  </div >
			</div >
	  </div >
</template >

<script setup lang = "ts" >
const speeds = [1, 5, 3, 4, 2]
</script >

<style >

.grid{

	background-image:    linear-gradient(to right, rgb(203 213 225) 1px, transparent 1px),
	                     linear-gradient(to bottom, rgb(203 213 225) 1px, transparent 1px);
	background-size:     2.5rem 2.5rem;
	background-position: center center;
}

.v-main, .v-application{
	backdrop-filter: blur(10px) !important;
}

.parallax{
	z-index:    -5;

	top:        0;
	height:     300vw;

	width:      100vw;
	overflow-x: clip;
	overflow-y: clip;
	/*overflow-clip-margin: 20px;*/
	position:   fixed;

	margin:     0;
	left:       0;
	right:      0;

}

.object-wrapper{
	position:        absolute;

	left:            0;
	background:      none;
	justify-content: center;
	overflow:        visible;;
}

.elevation-16{
	box-shadow: 0 8px 10px 5px rgba(0, 0, 0, 0.6),
	            0 16px 24px 2px rgba(0, 0, 0, 0.43), 0 6px 30px 5px rgba(0, 0, 0, 0.45);
}

.stripe{
	top:           50vh;
	height:        10vh;
	width:         10vh;
	left:          0;

	border-radius: 10px 10px 999px 0;
	box-shadow:    0 8px 10px 5px rgba(0, 0, 0, 0.6),
	               0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);

	border:        1px double rgba(255, 255, 255, 0.51);

}

.stripe-1{

	top:        100vh;
	width:      10vw;
	height:     20vh;

	transform:  translateY(0%) rotateX(0deg) scale(1);
	margin:     10vh 1vw;

	background: rgb(244, 161, 19);
	animation:  stipe-1 10s ease-in-out infinite alternate;

}

@keyframes stipe-1{
	0%{

		transform: translateY(0%) scale(1);
	}
	20%{

		transform: translateY(50%) scale(0.8);
	}
	80%{

		transform: translateY(100%) scale(1);
	}
	100%{

		transform: translateY(0%) scale(1.5);
	}
}

.stripe-2{
	transform:        rotatez(0deg);
	top:              40vh;
	margin-left:      -100vh;
	background-color: rgb(26, 26, 26);

	animation:        stipe-2 16s ease infinite;
}

@keyframes stipe-2{
	0%{

		transform: rotatez(50deg) rotatex(0deg) rotatey(0deg) scale(1);
	}
	60%{

		transform: rotatez(20deg) rotatex(0deg) rotatey(0deg) scale(1.2);
	}
	100%{

		transform: rotatez(50deg) rotatex(0deg) rotatey(0deg) scale(1);
	}
}

.stripe-3{

	transform:        translateZ(500px) scale(1);
	margin-top:       70vh;
	margin-left:      -100vh;

	background:       rgb(22, 62, 87);
	background-color: rgb(238, 85, 34);
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.93'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.93'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
}

@keyframes stipe-3{
	0%{

		transform: rotatez(35deg) rotatex(0deg) scale(1);
	}
	60%{

		transform: rotatez(35deg) rotatex(0deg) scale(1.2);
	}
	100%{

		transform: rotatez(35deg) rotatex(0deg) scale(1);
	}
}

.stripe-4{
	transform:   rotateX(0deg) rotatez(60deg);
	top:         160vh;
	margin-left: 40vh;
	animation:   stipe-4 10s linear infinite;
	background:  rgb(238, 85, 34) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.93'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.93'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
}

@keyframes stipe-4{
	0%{

		transform: rotateX(0deg) rotatez(0deg) scale(1);
	}
	80%{

		transform: rotateX(0deg) rotatez(0deg) scale(1);
	}
	100%{

		transform: rotateX(0deg) rotatez(0deg) scale(1);
	}
}

.stripe-5{
	transform:             rotatez(0deg);
	top:                   200vh;
	margin-left:           90vh;
	background:            rgb(77, 19, 28);
	background-color:      rgb(255, 119, 0);
	background-image:      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23d37070' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23af6161' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23b21f2b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a30b1d' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23c16b7a' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23a33d50' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c06a8a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%238c2453' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23b85a99' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23943d77' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23b255b2' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23944794' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size:       cover;

}

.speed-1{
	transform: translateZ(-2px) scale(3);
}

.speed-2{
	transform: translateZ(-4px) scale(5);
}

.speed-3{
	transform: translateZ(-6px) scale(7);
}

.speed-4{
	transform: translateZ(-8px) scale(9);
}

.speed-5{
	transform: translateZ(-10px) scale(11);
}

.speed-6{
	transform: translateZ(-12px) scale(13);
}

.speed-6{
	transform: translateZ(-12px) scale(13);
}

</style >
