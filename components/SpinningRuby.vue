<script setup lang="ts">
</script>
<template>
  <svg id="ruby-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 625 725">
    <g id="container">
      <rect width="00" height="625" style="fill: none"/>
    </g>
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <g transform="translate(0 0)">
        <g id="sparkle" fill="none" stroke-width="8" stroke="#54a9ff" stroke-linecap="round">
          <path class="pathClass" d="M 0 0 l 0 0 45 0"/>
          <path class="pathClass" d="M 0 0 l 0 0 0 45"/>
          <path class="pathClass" d="M 0 0 l 0 0 -45 0"/>
          <path class="pathClass" d="M 0 0 l 0 0 0 -45"/>
          <circle fill="none" stroke="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" r="30"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="-4s" dur="6s" calcMode="spline"
                            keySplines=".43 0 .57 1" type="rotate" from="0" to="360" repeatCount="indefinite"/>
        </g>
        <g transform="translate(-0 -0)"></g>
      </g>
    </defs>
    <g transform="translate(0,25)">
      <g transform="rotate(180 300 300)">
        <g id="lowerBackFacet1" filter="url(#glow)">
          <line x1="300" y1="0" x2="200" y2="425" style="fill:none;stroke:#fcb3b3;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="-25" repeatCount="indefinite"/>
        </g>
      </g>
      <g transform="rotate(180 300 300)">
        <g id="lowerBackFacet2" filter="url(#glow)">
          <line x1="300" y1="0" x2="400" y2="425" style="fill:none;stroke:#fcb9b3;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="-25" repeatCount="indefinite"/>
        </g>
      </g>
      <g transform="rotate(180 300 300)">
        <g id="lowerBackFacet3" filter="url(#glow)">
          <line x1="300" y1="0" x2="600" y2="425" style="fill:none;stroke:#fcb5b3;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="-25" repeatCount="indefinite"/>
        </g>
      </g>
      <g transform="rotate(180 300 300)">
        <g id="lowerFrontFacet1" filter="url(#glow)">
          <line x1="300" y1="0" x2="0" y2="425" style="fill:none;stroke:#ff5a54;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="25" repeatCount="indefinite"/>
        </g>
      </g>
      <g transform="rotate(180 300 300)">
        <g id="lowerFrontFacet2" filter="url(#glow)">
          <line x1="300" y1="0" x2="200" y2="425" style="fill:none;stroke:#ff6254;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="25.5" repeatCount="indefinite"/>
        </g>
      </g>
      <g transform="rotate(180 300 300)">
        <g id="lowerFrontFacet3" filter="url(#glow)">
          <line x1="300" y1="0" x2="400" y2="425" style="fill:none;stroke:#ff5454;stroke-width:8"/>
          <animateTransform attributeName="transform" attributeType="XML" begin="0s" dur="2s" calcMode="paced"
                            type="skewX" from="0" to="25" repeatCount="indefinite"/>
        </g>
      </g>
      <g id="upperBackFacet1" filter="url(#glow)">
        <line x1="350" y1="0" x2="400" y2="175" style="stroke:#fcb9b3;stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 100, 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="upperBackFacet2" filter="url(#glow)">
        <line x1="250" y1="0" x2="198" y2="175" style="stroke:#fcb9b3; stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 100, 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="upperBackFacet3" filter="url(#glow)">
        <line x1="150" y1="0" x2="0" y2="175" style="stroke:#fcb5b3; stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 100, 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="upperFrontFacet1" filter="url(#glow)">
        <line x1="250" y1="0" x2="200" y2="175" style="stroke:#ff5454; filter=url(#glow); stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 -100 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="-30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="upperFrontFacet2" filter="url(#glow)">
        <line x1="350" y1="0" x2="400" y2="175" style="stroke:#ff5454;stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 -100, 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="-30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="upperFrontFacet3">
        <line x1="452" y1="0" x2="602" y2="175" style="stroke:#ff5454;stroke-width:8"/>
        <animateMotion dur="2s" repeatCount="indefinite" path="M1, 0 -100, 0 0"/>
        <animateTransform attributeName="transform" attributeType="XML" type="skewX" from="0" to="-30" dur="2s"
                          calcMode="paced" repeatCount="indefinite"/>
      </g>
      <g id="Center">
        <line x1="5" y1="175" x2="595" y2="175" style="stroke: #ff5454; stroke-width: 10px;"/>
      </g>
      <g transform="translate(300,300)">
        <g id="Outside" filter="url(#glow)">
          <line x1="300" y1="600" x2="600" y2="173" style="fill: none;"/>
          <polygon points="300 0 450 0 450 0 600 175 300 600 0 175 150 0 300 0" transform="translate( -300 -300)"
                   style="fill: none; stroke: #ff5454; stroke-miterlimit: 10; stroke-width:8; "/>
          <animateTransform attributeName="transform" type="scaleX" from="1 1" to=".98 1" begin="2s" dur="2s"
                            calcMode="paced" repeatCount="indefinite"/>
        </g>
      </g>
      <use id="spark1" x="575" y="150" href="#sparkle" filter="url(#glow)" style="visibility:hidden">
        <animateMotion id="start1" begin="0s" dur="2s" repeatCount="indefinite" calcMode="paced"
                       path="M1, 0 -200, 0 0"/>
        <animate id="spark1" attributeType="CSS" attributeName="visibility" begin="0s" dur="4s" from="hidden"
                 to="visible" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="visibility" begin="spark1.end" dur="spark1.begin" from="visible"
                 to="hidden" repeatCount="indefinite"/>
      </use>
      <use id="spark2" x="400" y="350" href="#sparkle" filter="url(#glow)" style="visibility:hidden">
        <animateMotion id="start2" begin="2s" dur="2s" repeatCount="indefinite" calcMode="paced"
                       path="M1, 0 -175, 0 0"/>
        <animate id="spark2" attributeType="CSS" attributeName="visibility" begin="2s" dur="4s" from="hidden"
                 to="visible" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="visibility" begin="spark2.end" dur="spark2.begin" from="visible"
                 to="hidden" repeatCount="indefinite"/>
      </use>
      <use id="spark3" x="450" y="30" href="#sparkle" filter="url(#glow)" style="visibility:hidden">
        <animateMotion id="start3" begin="4s" dur="2s" repeatCount="indefinite" calcMode="paced"
                       path="M1, 0 -175, 0 0"/>
        <animate id="spark3" attributeType="CSS" attributeName="visibility" begin="4s" dur="4s" from="hidden"
                 to="visible" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="visibility" begin="spark3.end" dur="spark3.begin" from="visible"
                 to="hidden" repeatCount="indefinite"/>
      </use>
      <use id="spark4" x="500" y="45" href="#sparkle" filter="url(#glow)" style="visibility:hidden">
        <animateMotion id="start4" begin="2s" dur="2s" repeatCount="indefinite" calcMode="paced"
                       path="M1, 0 -175, 0 0"/>
        <animate id="spark4" attributeType="CSS" attributeName="visibility" begin="2s" dur="4s" from="hidden"
                 to="visible" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="visibility" begin="spark4.end" dur="spark4.begin" from="visible"
                 to="hidden" repeatCount="indefinite"/>
      </use>
      <use id="spark5" x="500" y="150" href="#sparkle" filter="url(#glow)" style="visibility:hidden">
        <animateMotion id="start5" begin="2s" dur="2s" repeatCount="indefinite" calcMode="paced"
                       path="M1, 0 -175, 0 0"/>
        <animate id="spark5" attributeType="CSS" attributeName="visibility" begin="4s" dur="4s" from="hidden"
                 to="visible" repeatCount="indefinite"/>
        <animate attributeType="CSS" attributeName="visibility" begin="spark5.end" dur="spark5.begin" from="visible"
                 to="hidden" repeatCount="indefinite"/>
      </use>
    </g>
  </svg>
</template>
<style scoped>
#ruby-background {
  position: absolute;
  margin-top: 0;
  margin-left: 0;
  //top: 0;
  right: 0px;
  width: 50%;
  padding: 0;
  //height: 30vh;
  z-index: -5;
}
.pathClass {
  calcMode: paced;
  stroke-dasharray: 60;
  stroke-dashoffset: 3;
  animation: dash 2s infinite;
}
@keyframes dash {
  from {
    stroke-dashoffset: 120;
  }
  to {
    stroke-dashoffset: -60;
  }
}
</style>