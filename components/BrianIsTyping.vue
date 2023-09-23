<template>

    <h2 class="text-h3 bp-shadow shadow-blue text-left">hello, my name is
        <span class="text-caption">
            (Brian Purgert)
        </span>
    </h2>

    <v-divider></v-divider>
    <svg
            class="logo" viewBox="0 0 100 17"
    >
        <symbol id="s-text">
            <text class="b2" x="5" y="12">b</text>
            <text class="b2" x="5" y="12">p</text>
            <text class="" x="18" y="12">
                {{ typeValue }}
            </text>

        </symbol>
        <g class="g-ants">
            <use class="text-copy" href="#s-text"></use>
            <use class="text-copy" href="#s-text"></use>
            <use class="text-copy" href="#s-text"></use>
            <use class="text-copy" href="#s-text"></use>
            <use class="text-copy" href="#s-text"></use>
        </g>
        <text class="b-top" x="5" y="12">b</text>
    </svg>
    <v-divider></v-divider>

    <h1 class="text-h4 bp-shadow shadow-red text-right">This is my portfolio</h1>


</template>


<script setup lang="ts">


const typeValue = ref("")
const typeStatus = ref(false)
const displayTextArray = ["rian", "urgert"]
const typingSpeed = 100
const erasingSpeed = 200
const newTextDelay = 2000
let displayTextArrayIndex = 0
let charIndex = 0

const typeText = () => {
    if (charIndex < displayTextArray[displayTextArrayIndex].length) {
        typeStatus.value = true
        typeValue.value += displayTextArray[displayTextArrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(typeText, typingSpeed)
    } else {
        typeStatus.value = false
        setTimeout(eraseText, newTextDelay)
    }
}

const eraseText = () => {
    if (charIndex > 0) {
        typeStatus.value = true
        typeValue.value = displayTextArray[displayTextArrayIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(eraseText, erasingSpeed)
    } else {
        typeStatus.value = false
        displayTextArrayIndex = (displayTextArrayIndex + 1) % displayTextArray.length
        setTimeout(typeText, typingSpeed + 1000)
    }
}

onMounted(() => {
    setTimeout(typeText, newTextDelay + 200)
})
</script>


<style scoped>


svg.logo {
    align-content : baseline;
    display       : block;
    font-family   : 'tesla', cursive;
    font-style    : italic;
    max-height    : 9rem;
    font-size     : 1rem;
    margin        : 0 10%;
    }

.text-copy {
    animation         : stroke-offset 10s infinite linear alternate;
    fill              : #bd2c44;
    stroke            : #2975a8;
    stroke-dasharray  : 0 10 20;
    stroke-dashoffset : -50%;
    text-shadow       : 3px 3px 0px rgba(24, 24, 27, 1);
    }

.b-top {
    fill : #bd2c44;
    }

.text-copy:nth-child(1) {
    animation-delay : -1s;
    }

.text-copy:nth-child(2) {
    animation-delay : -3s;
    }

.text-copy:nth-child(3) {
    animation-delay : -5s;
    }

@keyframes stroke-offset {
    100% {
        stroke-dashoffset : 50%;
        }
    }


</style>