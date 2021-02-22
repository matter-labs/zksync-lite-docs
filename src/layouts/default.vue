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
import footerComponent from '@/blocks/Footer.vue'
import headerComponent from '@/blocks/Header.vue'

/** @var AOS AOS **/
import AOS from 'aos'

export default {
  components: {
    headerComponent,
    footerComponent,
  },
  data() {
    return {};
  },
  watch: {
    $route: {
      immediate: true,
      handler(val, oldVal) {
        if (!oldVal) {
          return this.$nextTick(() => {
            document.documentElement.scrollTop = 0;
          });
        }
        if (val.path !== oldVal.path) {
          this.$nextTick(() => {
            const lastScroll = this.$store.getters["scroll/getLastScroll"];
            document.documentElement.scrollTop = lastScroll !== false ? lastScroll.y : 0;
          });
        }
      },
    },
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
  },
  methods: {
    toggleDarkMode() {
      this.$inkline.config.variant = this.$inkline.config.variant === "light" ? "dark" : "light";
      localStorage.setItem("colorTheme", this.$inkline.config.variant);
    },
  },
};
</script>
