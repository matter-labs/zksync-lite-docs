<template>
  <a v-if="scroll"
    :class="classAttribute"
    @click.capture="scrollTo(scroll)"
  >
    <slot/>
    <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <g fill-rule="evenodd">
        <path class="HoverArrow__linePath" d="M0 5h7"></path>
        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
      </g>
    </svg>
  </a>
  <a v-else
    :class="classAttribute"
    :href="href"
    :target="target"
  >
    <slot/>
    <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <g fill-rule="evenodd">
        <path class="HoverArrow__linePath" d="M0 5h7"></path>
        <path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
      </g>
    </svg>
  </a>
</template>
<script>
export default {
  name: "ZCta",
  props: {
    scroll: {
      required: false,
      type: String,
      default: "",
    },
    href: {
      required: false,
      type: String,
      default: "",
    },
    target: {
      required: false,
      type: String,
      default: "_blank",
    },
    cssClass: {
      required: false,
      type: String,
      default: "",
    },
  },
  computed: {
    classAttribute() {
      const cssClasses = ["CtaButton", "variant--Link", "CtaButton--arrow"];
      if (this.cssClass) {
        const parsedClasses = this.cssClass.split(" ");
        parsedClasses.forEach(function (singleClassName) {
          cssClasses.push(singleClassName);
        });
      }
      return cssClasses;
    },
  },
};
</script>
