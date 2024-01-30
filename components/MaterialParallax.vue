<template>
  <div class="parallax">
    <div v-for="(speed, index) in speeds" :key="index" class="object-wrapper"
         :class="`speed-${speed}`">
      <div class="stripe" :class="`stripe-${index + 1} elevation-11`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const speeds = [1, 5, 3, 4, 2]
</script>

<style>


.v-main, .v-application{
  backdrop-filter: blur(40px) !important;
}

.parallax{
  z-index:            -5;
  transform-style:    preserve-3d;

  perspective:        1px;
  perspective-origin: center;

  height:             100%;

  width:              100%;
  overflow-x:         hidden;
  overflow-y:         hidden;
  position:           fixed;

  margin:             0 auto;
  left:               0;
  right:              0;
  bottom:             0;

}

.object-wrapper{
  position:        absolute;
  top:             0;
  right:           0;
  bottom:          0;
  left:            0;
  background:      none;
  justify-content: center;
  overflow:        visible;
}

.elevation-16{
  box-shadow: 0 8px 10px 5px rgba(0, 0, 0, 0.6),
              0 16px 24px 2px rgba(0, 0, 0, 0.43), 0 6px 30px 5px rgba(0, 0, 0, 0.45);
}

.stripe{

  height:        50%;
  width:         200%;
  left:          0;
  top:           0;

  border-radius: 10px 10px 0px 0px;
  box-shadow:    0 8px 10px 5px rgba(0, 0, 0, 0.6),
                 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);

  border:        1px double rgba(255, 255, 255, 0.51);

}

.stripe-1{
  transform:   rotatez(-15deg) translateY(0%) rotateX(0deg) scale(1);
  margin-top:  20vh;
  margin-left: 10vh;
  background:  #f4a113;
  animation:   stipe-1 30s ease infinite alternate;
  //animation:   3s linear 1s infinite alternate slidein;
}

@keyframes stipe-1{
  0%{

    transform: rotatez(-15deg) translateY(0%) scale(1);
  }
  20%{

    transform: rotatez(-25deg) translateY(50%) scale(1.3);
  }
  80%{

    transform: rotatez(-35deg) translateY(100%) scale(1);
  }
  100%{

    transform: rotatez(-15deg) translateY(0%) scale(1)
  }
}

.stripe-2{
  transform:        rotatez(50deg);
  margin-top:       40vh;
  margin-left:      -100vh;
  background-color: rgb(103, 103, 103);

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

  background:  rgba(22, 62, 87, 0.5);
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
  background:  rgb(87, 20, 32);

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
  background:  #4d131c;
  //background:  rgba(33, 33, 33, 0.78);

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