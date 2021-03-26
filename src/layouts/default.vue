<template>
  <div class="indexLayout">
    <header-component />
    <div class="routerContainer">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import headerComponent from "@/blocks/Header.vue";

/* AOS doesn't support TS */
// @ts-ignore: Unreachable code error
import AOS from "aos";

import footerComponent from "@/blocks/Footer.vue";

export default Vue.extend({
  components: {
    headerComponent,
    footerComponent,
  },
  data() {
    return {};
  },
  created() {
    AOS.init({
      once: true,
    });
    (this as any).$inkline.config.variant = "dark"; /* Vue 2 TS doesn't support custom global properties, therefore we need to bypass type checking */
  },
  mounted() {
    if (process.client) {
      window.history.scrollRestoration = "manual";
    }
    this.handlePageScroll();
  },
  methods: {
    handlePageScroll() {
      const lastScroll = this.$store.getters["scroll/getLastScroll"];
      document.documentElement.scrollTop = lastScroll !== false ? lastScroll.y : 0;
    },
  },
});
</script>
