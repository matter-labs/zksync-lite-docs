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

<script>
export default {
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
      const header = this.$refs.header;
      const body = this.$refs.body;
      if (header && body) {
        return header.getBoundingClientRect().height + body.getBoundingClientRect().height;
      }
      return false;
    },
  },
};
</script>
