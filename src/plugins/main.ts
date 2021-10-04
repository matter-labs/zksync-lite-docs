import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import Loader from "~/components/Loader.vue";

Vue.use(VueScrollTo);
Vue.component("Loader", Loader);

Vue.mixin({
  methods: {
    scrollTo(selector) {
      this.$scrollTo(document.querySelector(selector), 1100, {
        x: false,
        y: true,
        cancelable: true,
        offset: -84,
      });
    },
  },
});
/**
 * 100vh issue fix
 * @refer https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
 */
const appHeight = () => {
  const doc = document.documentElement;
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  doc.style.setProperty("--app-height", `${Math.min(vh, window.screen.availHeight)}px`);
};
// listener removed to avoid changing set variable
// window.addEventListener("resize", appHeight);

appHeight();
