<template>
  <i-container class="indexFullScreen">
    <h1 class="mainHeadline" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">Rely on math,<br />not validators</h1>
    <p class="grayText aboutZkSync subheaderText" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      <emphasis :show-logo="true" />
      solves Ethereum scalability<br />&nbsp;with zero security compromises
    </p>
    <i-row center data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
      <z-button href="https://wallet.zksync.io" variant="glow" size="lg" css-class="antilink">Open Wallet</z-button>
    </i-row>
    <i-row center data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000" data-aos-once="true">
      <z-cta :href="'/userdocs/'" class="exploreFAQ _margin-top-xs-1 _margin-bottom-xs-2 _margin-y-lg-3"> User Docs </z-cta>
    </i-row>
    <a class="scrollDown" data-aos-offset="-100" data-aos="fade-up" data-aos-delay="100" data-aos-duration="700" @click.capture="scrollTo('#partners')">
      <i class="fal fa-arrow-down" />
    </a>
  </i-container>
</template>

<script type="ts">
import Vue from "vue";
import Emphasis from "@/components/Emphasis.vue";
import ZButton from "@/components/ZButton.vue";
import ZCta from "@/components/ZCta.vue";

export default Vue.extend({
  name: "ZHero",
  components: {
    ZCta,
    Emphasis,
    ZButton,
  },
});
</script>
