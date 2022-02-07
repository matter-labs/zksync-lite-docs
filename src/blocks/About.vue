<template>
  <div id="about" ref="scrollToBlock" class="featuresContainer _margin-sm-2 _margin-y-md-4 _padding-y-2 _padding-top-md-4 _padding-bottom-md-4">
    <i-container>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">Security and UX first</div>
      <div class="grayText subheaderText" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200"><emphasis /> is Ethereum’s most user-centric ZK rollup</div>
      <div class="featuresGrid">
        <div class="featureItem" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200">
          <img class="featureItemIcon" src="@/assets/images/pages/index/shield.svg" alt="Uncapped Security" />
          <div class="featureHeadline h3">Uncapped Security</div>
          <div class="divider _margin-y-1" />
          <div class="bottomBlock">
            <p class="featureDescription grayText">Unlike any other scaling approach, ZK rollup has no upper bound on the value it can securely handle in L2.</p>
            <i class="arrowDown fal fa-arrow-down" />
            <p class="featureDescription grayText">zkSync DeFi ecosystem can grow without limits.</p>
          </div>
        </div>
        <div class="featureItem" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
          <img class="featureItemIcon" src="@/assets/images/pages/index/clock.svg" alt="10-Minute Finality" />
          <div class="featureHeadline h3">10-Minute<br />Finality</div>
          <div class="divider _margin-y-1" />
          <div class="bottomBlock">
            <p class="featureDescription grayText">Unlike optimistic rollups, all assets can be moved capital-efficiently and fast between ZK rollup and L1.</p>
            <i class="arrowDown fal fa-arrow-down" />
            <p class="featureDescription grayText">
              Protocols can migrate<br />
              from L1 to L2 gradually.
            </p>
          </div>
        </div>
        <div class="featureItem" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200">
          <img class="featureItemIcon" src="@/assets/images/pages/index/weights.svg" alt="0.5k Gas per tx" />
          <div class="featureHeadline h3">
            0.5k Gas<br />
            per tx
          </div>
          <div class="divider _margin-y-1" />
          <div class="bottomBlock">
            <p class="featureDescription grayText">Live since June 2020, zkSync has the lowest real tx costs across all existing and planned rollups.</p>
            <i class="arrowDown fal fa-arrow-down" />
            <p class="featureDescription grayText">VISA-scale is possible today with 2000+ TPS.</p>
          </div>
        </div>
      </div>
      <div class="grayText _margin-top-2 _margin-bottom-1">
        zkSync also supports meta-transactions, instant confirmations with<br />
        economic finality, low-cost privacy, and more.
      </div>
      <i-row center-xs>
        <z-cta :href="'/userdocs/tech.html'" target="_blank" class="underlinedLink"> How all of this works </z-cta>
      </i-row>
    </i-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ZCta from "@/components/ZCta.vue";
import Emphasis from "@/components/Emphasis.vue";

export default Vue.extend({
  name: "About",
  components: { Emphasis, ZCta },
});
</script>
