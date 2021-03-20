<template>
  <div class="loaderSpinner" :class="`size-${size}`">Loading...</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
  props: {
    size: {
      type: String,
      default: "md",
      required: false,
    },
  },
});
</script>
