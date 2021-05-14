<template>
  <div class="reviewsContainer" data-aos="fade-up"
       data-aos-delay="50" data-aos-duration="800">
    <a id="reviews-about-zksync"/>
    <transition name="slideFromLeft">
      <div v-if="currentItem>0" class="arrow left"
           @click="scrollItemBack()">
        <i class="fal fa-angle-left"/>
      </div>
    </transition>
    <transition name="slideFromRight">
      <div v-if="rightArrowDisplayed" class="arrow right" @click="scrollItemForward()">
        <i class="fal fa-angle-right"/>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="rightArrowDisplayed" class="gradient right"/>
    </transition>
    <transition name="fade">
      <div v-if="currentItem>0" class="gradient left"/>
    </transition>
    <i-container ref="container">
      <div class="itemsContainer" :style="{'transform': `translateX(-${leftPosition-scrollOffset}px)`}">
        <a
          v-for="(singleReview, index) in reviewsData"
          :id="singleReview.id"
          :key="index"
          ref="reviewItem"
          :href="singleReview.link"
          :class="singleReview.classes"
          class="reviewItem"
          target="_blank"
          draggable="false"
        >
          <div class="reviewHeader">
            <img
              v-if="singleReview.thumbnail"
              :src="getAssetUrl(singleReview.thumbnail)"
              :alt="singleReview.thumbnailAlt"
              :title="singleReview.thumbnailTitle"
              draggable="false"
            >
            <span v-if="singleReview.title">{{ singleReview.title }}</span>
          </div>
          <div class="reviewText">
            {{ singleReview.text }}
            <i-badge v-if="singleReview.isUpcoming" variant="secondary _upcoming-h3">upcoming</i-badge>
          </div>
          <z-button
            v-if="singleReview.isButton"
            css-class='width-300'
            href='https://zksync.curve.fi'
            outline="outline"
            size='xs'
            target='_blank'
          >Try <strong>Curve + zkSync</strong> testnet
          </z-button>
          <span v-if="!singleReview.isButton" class="arrowLink">
            <i class="fal fa-arrow-up"/>
          </span>
        </a>
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import ZButton from "@/components/ZButton.vue";

import Hammer from "hammerjs";
import Vue from "vue";

interface Review {
  id: string;
  classes: string;
  title: string;
  link: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailTitle: string;
  text: string;
}

export default Vue.extend({
  components: {
    ZButton,
  },
  props: {
    reviewsData: {
      default: () => {
        return [
          {
            id: "",
            classes: "small-text round-thumbnail",
            title: "Itamar Lesuisse",
            link: "https://www.argent.xyz/blog/layer-2-plans/",
            thumbnail: "itamar.jpeg",
            thumbnailAlt: "Itamar Lesuisse @argentHQ",
            thumbnailTitle: "Itamar Lesuisse from @argentHQ",
            text: `...Our choice came down to the fact that zkSync has been live on mainnet for months, has lower transaction costs and fast finality.
            ZkSync also does not have a one week delay on withdrawals`
          },
          {
            id: "",
            classes: "",
            title: "",
            link: "https://resources.curve.fi/guides/more.../layer-2-meets-curve-with-zksync",
            thumbnail: "curve.svg",
            thumbnailAlt: "Curve Finance - automatic market-making for stablecoins and not only",
            thumbnailTitle: "Curve + zkSync L2: Ethereum’s first user-defined ZK rollup smart contract!",
            text: "ZK rollups are extremely secure even with a single validator, as they rely on pure math",
          },
          {
            id: "",
            classes: "",
            link: "https://vitalik.ca/general/2021/01/05/rollup.html#conclusions",
            thumbnail: "buter.png",
            thumbnailAlt: "Vitalik Buterin, co-founder of Ethereum about zkSynk",
            thumbnailTitle: "Writer who is best known as one of the co-founders of Ethereum, involved with cryptocurrency early in its inception",
            text: "In the medium to long term ZK rollups will win out in all use cases as ZK-SNARK technology improves.",
            title: "Vitalik Buterin",
          },
          {
            id: "balancer-review",
            classes: "",
            title: "",
            link: "https://twitter.com/mikeraymcdonald/status/1321095035539148800?s=21",
            thumbnail: "balancer.svg",
            thumbnailAlt: "Mike McDonal, CTO @BalancerLabs",
            thumbnailTitle: "Mike McDonal, Co-founder & CTO @BalancerLabs. Security Engineer about ZK Rollups",
            text: "ZK rollups are the most promising (and the only scaling path Balancer is exploring internally atm).",
          },
        ] as Array<Review>;
      },
      required: false,
      type: Array,
    },
  },
  data() {
    return {
      totalItems: this.reviewsData.length,
      currentItem: 0,
      displayRightArrow: true,
      scrollOffset: 0,
    };
  },
  computed: {
    leftPosition(): number {
      if (this.$refs.container && Math.max(1, this.itemsInView()) === 1) {
        return Math.max(0, this.currentItem * 257 - 10);
      }
      return Math.max(0, this.currentItem * 257 - 10);
    },
    rightArrowDisplayed(): boolean {
      return this.currentItem < this.totalItems - 1 && this.displayRightArrow;
    },
  },
  watch: {
    currentItem() {
      this.checkArrowDisplay();
      this.scrollOffset = 0;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.checkArrowDisplay();
      });
    }, 0);
    window.addEventListener("resize", this.checkArrowDisplay);
    const galleryBlock = document.querySelector(".reviewsContainer");
    if (!galleryBlock) {
      return;
    }
    new Hammer(galleryBlock as HTMLElement)
      .on("pan", (e) => {
        if (e.direction !== 2 && e.direction !== 4) {
          return;
        }
        this.scrollOffset = Math.min(Math.abs(e.deltaX), 360) * Math.sign(e.deltaX);
      })
      // @ts-ignore: Unreachable code error
      .on("panend ", () => {
        if (this.scrollOffset < 50 && this.currentItem < this.totalItems - 1 && this.displayRightArrow) {
          this.scrollItemForward();
        } else if (this.scrollOffset > 50 && this.currentItem > 0) {
          this.scrollItemBack();
        }
        this.scrollOffset = 0;
      });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkArrowDisplay);
  },
  methods: {
    scrollItemBack() {
      const inViewNow = Math.max(1, this.itemsInView());
      const scrollTo = this.currentItem - Math.max(1, inViewNow);
      this.currentItem = Math.max(scrollTo, 0);
    },
    scrollItemForward() {
      const inViewNow = Math.max(1, this.itemsInView());
      const scrollTo = this.currentItem + Math.max(1, inViewNow);
      this.currentItem = Math.min(scrollTo, (this.$refs.reviewItem as HTMLElement[]).length - inViewNow);
    },
    itemsInView() {
      let inViewTotal = 0;
      const containerSizes = ((this.$refs.container as Vue).$el as HTMLElement).getBoundingClientRect();
      const reviewItems = this.$refs.reviewItem as HTMLElement[];
      for (const itemEl of reviewItems) {
        if (!itemEl.getBoundingClientRect) {
          continue;
        }
        const itemSizes = itemEl.getBoundingClientRect();
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

    /**
     * @param img
     * @returns {any}
     */
    getAssetUrl(img: string) {
      return require("@/assets/images/pages/index/" + img);
    },
  },
});
</script>
