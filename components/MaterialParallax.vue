<script setup lang="ts">

</script>

<template>


  <div class="parallax">
    <div class="object-wrapper speed-1">
      <div class="stripe stripe-1 elevation-16"></div>
    </div>
    <div class="object-wrapper speed-5">
      <div class="stripe stripe-2 elevation-16"></div>
    </div>
    <div class="object-wrapper speed-3">
      <div class="stripe stripe-3 elevation-16"></div>
    </div>
    <div class="object-wrapper speed-4">
      <div class="stripe stripe-4 elevation-16"></div>
    </div>
    <div class="object-wrapper speed-2">
      <div class="stripe stripe-5 elevation-16"></div>
    </div>
  </div>

</template>

<style>


.v-main, .v-application{

  backdrop-filter: blur(40px);

}

.parallax{

  z-index:     -20;

  //backdrop-filter: blur(10px);
  perspective: 2px;
  height:      10px;
  width:       100%;
  overflow-x:  visible;
  overflow-y:  visible;
  position:    absolute;
  top:         300px;
  left:        10%;
  right:       10%;

  //margin:      20px;
  padding:     25px;
}
.object-wrapper{
  position:        absolute;
  top:             0;
  right:           0;
  bottom:          0;
  left:            0;
  background:      none;
  justify-content: center;
}

.elevation-16{
  box-shadow: 0 8px 10px 5px rgba(0, 0, 0, 0.6),
              0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.stripe{
  border-radius: 20px;

  height:        120%;
  width:         120%;
  left:          0;
  top:           0;
}

.stripe-1{
  transform:   rotatez(-15deg);
  margin-top:  20vh;
  margin-left: 10vh;
  background:  #f4a113;
  animation:   stipe-1 30s ease infinite;
}

@keyframes stipe-1{
  0%{

    transform: rotatez(-15deg) scale(1);
  }
  20%{

    transform: rotatez(-25deg) scale(1.3);
  }
  80%{

    transform: rotatez(-35deg) scale(1);
  }
  100%{

    transform: rotatez(-15deg);
  }
}

.stripe-2{
  transform:        rotatez(50deg);
  margin-top:       40vh;
  margin-left:      -100vh;
  background-color: rgba(255, 255, 255, 0.5);
  //background:      #bd2c44;
  //background:  #212121;
  opacity:          0.5 !important;
  backdrop-filter:  blur(50px) !important;

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
  transform:   rotatez(35deg);
  margin-top:  70vh;
  margin-left: -100vh;
  /* 		background:#bd2c44; */
  /* 	background:#212121; */
  background:  #2973a5;
  animation:   stipe-3 16s ease infinite;
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
  margin-top:  60vh;
  margin-left: 40vh;
  background:  #bd2c44;
  /* 	background:#212121; */
  /* 	background:#2973a5; */
  animation:   stipe-4 5s ease-in-out infinite;
}
@keyframes stipe-4{
  0%{

    transform: rotateX(0deg) rotatez(60deg) scale(1);
  }
  80%{

    transform: rotateX(0deg) rotatez(50deg) scale(1);
  }
  100%{

    transform: rotateX(0deg) rotatez(60deg) scale(1);
  }
}

.stripe-5{
  transform:   rotatez(45deg);
  margin-top:  60vh;
  margin-left: 90vh;
  background:  #bd2c44;
  background:  #212121;
  /* 	background:#2973a5; */
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

</style>