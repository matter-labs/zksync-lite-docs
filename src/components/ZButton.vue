<template>
  <i-button
      :class="buttonClass"
      :href="href"
      :size="size"
      :target="target"
      :variant="variant"
      :outline="outline"
  ><span><slot/></span></i-button>
</template>

<script>
export default {
  name: "ZButton",
  props: {
    glow: {
      required: false,
      type: Boolean,
      default: false,
    },
    target: {
      required: false,
      type: String,
      default: "_blank",
    },
    href: {
      required: false,
      type: String,
      default: null,
    },
    size: {
      required: false,
      type: String,
      default: null,
    },
    variant: {
      required: false,
      type: String,
      default: "Primary",
    },
    content: {
      required: false,
      type: String,
      default: null,
    },
    outline: {
      required: false,
      type: String,
      default: null,
    },
    cssClass: {
      required: false,
      type: String,
      default: null,
    },
  },
  computed: {
    buttonVariant() {
      return this.variant === "glow" ? "Primary" : this.variant;
    },
    buttonClass() {
      const cssClasses = [];
      if (this.glow || this.variant === "glow") {
        cssClasses.push("glow-button");
      }
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
