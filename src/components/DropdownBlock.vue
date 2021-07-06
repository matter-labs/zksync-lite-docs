<template>
  <div class="dropdownContainer" :class="{'toggled': toggled===true}" :style="[height?{'height': `${height}px`}:{}]">
    <div ref="header" class="dropdownHeader" @click="toggled=!toggled">
      <div class="textContainer">
        <slot name="header" />
      </div>
      <div class="plusIconContainer">
        <div class="plusIcon">
          <div class="line horizontal" />
          <div class="line vertical" />
        </div>
      </div>
    </div>
    <div ref="body" class="dropdownBody">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      toggled: false,
    };
  },
  computed: {
    height() {
      if (!this.toggled) {
        return false;
      }
      const header = this.$refs.header as HTMLElement;
      const body = this.$refs.body as HTMLElement;
      if (header && body) {
        return header.getBoundingClientRect().height + body.getBoundingClientRect().height;
      }
      return false;
    },
  },
});
</script>
