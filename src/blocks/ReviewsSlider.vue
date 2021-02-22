<template>
  <div class="reviewsContainer">
    <transition name="slideFromLeft">
      <div v-if="currentItem>0" class="arrow left" @click="scrollItem('minus')">
        <i class="fal fa-angle-left"/>
      </div>
    </transition>
    <transition name="slideFromRight">
      <div v-if="currentItem<(totalItems-1) && displayRightArrow" class="arrow right" @click="scrollItem('plus')">
        <i class="fal fa-angle-right"/>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="currentItem<(totalItems-1) && displayRightArrow" class="gradient right"/>
    </transition>
    <transition name="fade">
      <div v-if="currentItem>0" class="gradient left"/>
    </transition>
    <i-container ref="container">
      <div class="itemsContainer" :style="{'transform': `translateX(-${leftPosition}px)`}">
        <a ref="1" class="reviewItem" href="https://resources.curve.fi/guides/more.../layer-2-meets-curve-with-zksync" target="_blank">
          <div class="reviewHeader">
            <img src="@/assets/images/pages/index/curve.svg"
                 alt="Curve Finance - automatic market-making for stablecoins and not only."
                 title="Curve + zkSync L2: Ethereum’s first user-defined ZK rollup smart contract!"
            >
          </div>
          <div class="reviewText">
            “ZK rollups are extremely secure even with a single validator, as they rely on pure math.”
          </div>
          <span class="arrowLink">
            <i class="fal fa-arrow-up"/>
          </span>
        </a>
        <a ref="2" class="reviewItem" href="https://vitalik.ca/general/2021/01/05/rollup.html#conclusions" target="_blank">
          <div class="reviewHeader">
            <img src="@/assets/images/pages/index/buter.png"
                 title="Writer who is best known as one of the co-founders of Ethereum, involved with cryptocurrency early in its inception"
                 alt="Vitalik Buterin, co-founder of Ethereum about zksynk">
            <span>Vitalik Buterin</span>
          </div>
          <div class="reviewText">
            “In the medium to long term ZK rollups will win out in all use cases as ZK-SNARK technology improves.”
          </div>
          <span class="arrowLink">
            <i class="fal fa-arrow-up"/>
          </span>
        </a>
        <a id="balancer-review" ref="3" class="reviewItem" href="https://twitter.com/mikeraymcdonald/status/1321095035539148800?s=21" target="_blank">
          <div class="reviewHeader">
            <img src="@/assets/images/pages/index/balancer.svg"
                 alt="Mike McDonal, CTO @BalancerLabs"
                 title="Mike McDonal, Co-founder & CTO @BalancerLabs. Security Engineer about ZK Rollups">
          </div>
          <div class="reviewText">
            “ZK rollups are the most promising (and the only scaling path Balancer is exploring internally atm).”
          </div>
          <span class="arrowLink">
            <i class="fal fa-arrow-up"/>
          </span>
        </a>
      </div>
    </i-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 3,
      currentItem: 0,
      displayRightArrow: true,
    };
  },
  computed: {
    leftPosition() {
      if (this.$refs.container) {
        const inViewNow = Math.max(1, this.itemsInView());
        if (inViewNow === 1) {
          return Math.max(0, this.currentItem * (286 + 20) - 20);
        }
      }
      return Math.max(0, this.currentItem * (286 + 20) - 20);
    },
  },
  watch: {
    currentItem() {
      this.checkArrowDisplay();
    },
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.checkArrowDisplay();
      });
    }, 0);
    window.addEventListener("resize", this.checkArrowDisplay);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkArrowDisplay);
  },
  methods: {
    scrollItem(direction) {
      const inViewNow = Math.max(1, this.itemsInView());
      if (direction === "plus") {
        const scrollTo = this.currentItem + Math.max(1, inViewNow);
        this.currentItem = Math.min(scrollTo, Object.keys(this.$refs).length - 1 - inViewNow);
      } else {
        const scrollTo = this.currentItem - Math.max(1, inViewNow);
        this.currentItem = Math.max(scrollTo, 0);
      }
    },
    itemsInView() {
      let inViewTotal = 0;
      const refsKeys = Object.keys(this.$refs);
      const containerSizes = this.$refs.container.$el.getBoundingClientRect();
      for (const item in refsKeys) {
        if (item === "container" || !this.$refs[item]) {
          continue;
        }
        const itemSizes = this.$refs[item].getBoundingClientRect();
        if (itemSizes.left >= containerSizes.left - 20 && itemSizes.right <= containerSizes.right + 20) {
          inViewTotal++;
        }
      }
      return inViewTotal;
    },
    checkArrowDisplay() {
      const inViewNow = Math.max(1, this.itemsInView());
      this.displayRightArrow = !(inViewNow > 1 && this.currentItem + inViewNow >= this.totalItems);
    },
  },
};
</script>
