<template>


	<h2 class = "text-h4 bp-shadow shadow-blue text-left">hello, my name is</h2>
	<v-divider></v-divider>
	<svg
			class = "logo" viewBox = "0 0 100 17"
	>
		<symbol id = "s-text">
			<text class = "b2" x = "5" y = "12">b</text>
			<text class = "b2" x = "5" y = "12">p</text>
			<text class = "" x = "18" y = "12">
				{{ typeValue }}
			</text>

		</symbol>
		<g class = "g-ants">
			<use class = "text-copy" href = "#s-text"></use>
			<use class = "text-copy" href = "#s-text"></use>
			<use class = "text-copy" href = "#s-text"></use>
			<use class = "text-copy" href = "#s-text"></use>
			<use class = "text-copy" href = "#s-text"></use>
		</g>
		<text class = "b-top" x = "5" y = "12">b</text>
	</svg>
	<v-divider></v-divider>

	<h1 class = "text-h4 bp-shadow shadow-red text-right">This is my Developer Story</h1>


</template>


<script>


    export default {
        name: 'brian-is-typing', components: {}, data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                displayTextArray: ['rian', 'urgert'],
                typingSpeed: 100,
                erasingSpeed: 200,
                newTextDelay: 2000,
                displayTextArrayIndex: 0,
                charIndex: 0
            }
        }, props: {}, created() {
            setTimeout(this.typeText, this.newTextDelay + 200)
        }, methods: {
            typeText() {
                if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
                    if (!this.typeStatus) {
                        this.typeStatus = true
                    }
                    this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex)
                    this.charIndex += 1
                    setTimeout(this.typeText, this.typingSpeed)
                } else {
                    this.typeStatus = false
                    setTimeout(this.eraseText, this.newTextDelay)
                }
            }, eraseText() {
                if (this.charIndex > 0) {
                    if (!this.typeStatus) {
                        this.typeStatus = true
                    }
                    this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1)
                    this.charIndex -= 1
                    setTimeout(this.eraseText, this.erasingSpeed)
                } else {
                    this.typeStatus = false
                    this.displayTextArrayIndex += 1
                    if (this.displayTextArrayIndex >= this.displayTextArray.length) {
                        this.displayTextArrayIndex = 0
                    }
                    setTimeout(this.typeText, this.typingSpeed + 1000)
                }
            }
        }
    }
</script>


<style scoped>

	.tesla-text
	{
		font-family: 'tesla' !important;
		/*font-family:    'Barcade No Bar Italic Italic' !important;*/
		font-size:   3.1vw !important;
		font-style:  normal !important;
		/*line-height: 90% !important;*/
		/*margin-bottom:  -2rem;*/
		/*margin-left:    -5rem;*/
		color:       #2975a8;
		text-shadow: 1px 1px 0px rgba(9, 9, 9, 0.95), 3px 3px 0px rgba(243, 243, 243, 0.95);
	}

	svg.logo
	{
		align-content: baseline;
		display:       block;
		font-family:   'tesla', cursive;
		font-style:    italic;
		max-height:    9rem;
		margin:        0 auto;

	}

	.text-copy
	{
		animation:         stroke-offset 10s infinite linear alternate;
		fill:              #bd2c44;
		stroke:            #2975a8;
		stroke-dasharray:  0 10 20;
		stroke-dashoffset: -50%;
		text-shadow:       3px 3px 2px rgba(24, 24, 27, 0.8);
	}

	.b-top
	{
		fill: #bd2c44;

	}

	.text-copy:nth-child(1)
	{
		animation-delay: -1s;
	}

	.text-copy:nth-child(2)
	{
		animation-delay: -3s;
	}

	.text-copy:nth-child(3)
	{
		animation-delay: -5s;
	}

	@keyframes stroke-offset
	{
		100%
		{
			stroke-dashoffset: 50%;
		}
	}


</style>