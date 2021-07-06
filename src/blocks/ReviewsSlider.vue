<template>
  <div
    class="reviewsContainer" data-aos="fade-up"
    data-aos-delay="50" data-aos-duration="800"
  >
    <a id="reviews-about-zksync"/>
    <transition name="slideFromLeft">
      <div
        v-if="currentItem>0" class="arrow left"
        @click="scrollItemBack()"
      >
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
    <i-container ref="container" :fluid="true">
      <div class="itemsContainer" :style="{'transform': `translateX(-${leftPosition-scrollOffset}px)`}">
        <a
          v-for="(singleReview, index) in preparedReviews"
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
            css-class="width-300"
            href="https://zksync.curve.fi"
            outline="outline"
            size="xs"
            target="_blank"
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
import Vue, {PropOptions} from "vue";

interface Review {
  id?: string;
  classes?: string;
  title: string;
  link: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailTitle: string;
  text: string;
  order: number;
  mobileOrder: number;
}

export default Vue.extend({
  components: {
    ZButton,
  },
  props: {
    reviewsData: {
      default: (): Review[] => {
        return [
          {
            id: "",
            classes: "",
            title: "",
            link: "https://resources.curve.fi/guides/more.../layer-2-meets-curve-with-zksync",
            thumbnail: "curve.svg",
            thumbnailAlt: "Curve Finance - automatic market-making for stablecoins and not only",
            thumbnailTitle: "Curve + zkSync L2: Ethereum’s first user-defined ZK rollup smart contract!",
            text: "ZK rollups are extremely secure even with a single validator, as they rely on pure math",
            order: 0,
            mobileOrder: 1
          },
          {
            id: "",
            classes: "",
            title: "imToken",
            link: "https://medium.com/imtoken/imtoken-and-matter-labs-join-forces-to-support-zksync-5554e931db48",
            thumbnail: "imtoken.svg",
            thumbnailAlt: "imToken is an easy and secure digital wallet trusted by millions",
            thumbnailTitle: "imToken is an easy and secure digital wallet trusted by millions",
            text: "Natively supporting zkSync brings us one step further towards our goal of providing a simple, easy-to-use, reliable wallet product.",
            order: 1,
            mobileOrder: 2
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
            order: 2,
            mobileOrder: 0
          },
          {
            id: "",
            classes: "small-text round-thumbnail",
            title: "Argent",
            link: "https://www.argent.xyz/blog/layer-2-plans/",
            thumbnail: "argent.svg",
            thumbnailAlt: "Argent at @argentHQ",
            thumbnailTitle: "Argent at @argentHQ",
            text: `...Our choice came down to the fact that zkSync has been live on mainnet for months, has lower transaction costs and fast finality.
            ZkSync also does not have a one week delay on withdrawals`,
            order: 3,
            mobileOrder: 3
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
            order: 4,
            mobileOrder: 4
          }
        ] as Array<Review>;
      },
      required: false,
      type: Array
    } as PropOptions<Review[]>,
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
    preparedReviews(): Review[] {
      return (this.reviewsData as Review[]).sort((reviewItem1, reviewItem2) => {
        const sortParam = window.screen.availWidth > 768 ? "order":"mobileOrder";
        return reviewItem1[sortParam] > reviewItem2[sortParam] ? 1:-1;
      });
    },
    leftPosition(): number {
      if (this.$refs.container && Math.max(1, this.itemsInView())===1) {
        return Math.max(0, this.currentItem * 257 - 10);
      }
      return Math.max(0, this.currentItem * 257 - 10);
    },
    rightArrowDisplayed(): boolean {
      return this.currentItem < this.totalItems - 1 && this.displayRightArrow;
    }
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
    const $hammer = new Hammer(galleryBlock as HTMLElement);
    $hammer.on("pan", (e) => {
      if (e.direction!==2 && e.direction!==4) {
        return;
      }
      this.scrollOffset = Math.min(Math.abs(e.deltaX), 360) * Math.sign(e.deltaX);
    });
    $hammer.on("panend ", () => {
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
      const containerSizes = ((this.$refs.container as Vue).$el as Element).getBoundingClientRect();
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
