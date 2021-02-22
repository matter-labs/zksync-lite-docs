<template>
  <i-badge class="emphasis" variant="light">
    <img
      v-if="showLogo" class="logoImg" src="@/assets/images/pages/index/symbol-logo.svg"
      alt="zkSync is Ethereum’s most user-centric ZK rollup" title="zkSync solves Ethereum scalability
with zero security compromises">
    {{brandName}}
  </i-badge>
</template>

<script>
export default {
  props: {
    showLogo: {
      default: false,
      type: Boolean,
      required: false,
    },
    brandName: {
      default: "zkSync",
      type: String,
      required: false,
    },
  },
};
</script>
