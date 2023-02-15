<style>
@font-face {
    font-family: "tesla";
    src: url("https://brianpurgert2.com/fonts/tesla.woff2") format("woff2");
}

.logo {
    font-size: 3rem;
    /*font-weight: 700;*/
    /*color: #3f51b5;*/
    /*text-shadow: 0 0 10px #3f51b5;*/
    font-family: "tesla", cursive;
    font-style: italic;
}
</style>
<template>

    <TypewriterEffect
        :strings="['brian','purgert','brian purgert']"
        class="logo"
        element="span"
    ></TypewriterEffect>
</template>


<script>
import TypewriterEffect from 'vue-typewriter-effect'

export default {
	name: 'brian-is-typing',
	components: {TypewriterEffect}
}
</script>