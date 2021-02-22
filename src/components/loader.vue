<template>
  <div class="loaderSpinner" :class="`size-${size}`">Loading...</div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
      required: false,
    },
  },
};
</script>
