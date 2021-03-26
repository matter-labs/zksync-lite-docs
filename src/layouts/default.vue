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

<script>
import footerComponent from "@/blocks/Footer.vue";
import headerComponent from "@/blocks/Header.vue";

/** @var AOS AOS **/
import AOS from "aos";

export default {
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
    this.$inkline.config.variant = "dark";
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
};
</script>
