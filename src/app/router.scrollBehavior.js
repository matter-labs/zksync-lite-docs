export default function (to, from, savedPosition) {
  if (to.path !== from.path) {
    this.app.$store.commit("scroll/setLastPath", from.path);
    this.app.$store.commit("scroll/setLastScroll", savedPosition);
  }
}
