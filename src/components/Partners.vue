<template>
  <div id="partners" class="_padding-y-2 _margin-bottom-0 _margin-top-2">
    <i-container>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        A growing
        <emphasis brand-name="" :show-logo="true" />
        movement
      </div>
      <div class="subheaderText grayText">
        Join the for<span>eth</span>inkers in the
        <emphasis />
        ecosystem
      </div>
      <div class="sponsorsContainer _margin-y-2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <a
          v-for="(singlePartner, itemIndex) in partnersData"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="!singlePartner.link ? `https://medium.com/matter-labs/leading-defi-projects-and-exchanges-invest-to-bring-solidity-to-zksync-9a3df978f824` : singlePartner.link"
          class="antilink"
          :class="{ 'show-on-mobile': itemIndex < pagesShown * partnersPerPage }"
          target="_blank"
        >
          <img :src="getAssetUrl(singlePartner.img)" :alt="singlePartner.alt" :title="singlePartner.title" />
        </a>
      </div>
      <div v-if="morePagesAvailable" class="_padding-bottom-2">
        <z-button class="_margin-x-auto _display-block _hidden-md-and-up no-hover-effect" variant="glow" size="lg" @click.native="showMorePages()">Show more</z-button>
      </div>
    </i-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ZButton from "@/components/ZButton.vue";
import Emphasis from "@/components/Emphasis.vue";

interface PartnerDataItem {
  id: string;
  img: string;
  alt: string;
  title: string;
  link?: string;
}

export default Vue.extend({
  name: "Partners",
  components: { Emphasis, ZButton },
  props: {
    partnersData: {
      type: Array,
      default: () => {
        return [
          {
            id: "curve",
            img: "curve.svg",
            alt: "Curve + zkSync",
            title: "Curve + zkSync",
          },
          {
            id: "aave",
            img: "aave.svg",
            alt: "Aave SAGL",
            title: "Aave SAGL",
          },
          {
            id: "loopring",
            img: "loopring.svg",
            alt: "LOOPRING WALLET",
            title: "LOOPRING WALLET",
          },
          {
            id: "Balancer",
            img: "balancer.svg",
            alt: "Balancer Exchange",
            title: "Balancer Exchange",
          },
          {
            id: "oneInch",
            img: "1inch.svg",
            alt: "1inch Exchange",
            title: "1inch Exchange",
          },
          {
            id: "Paraswap",
            link: "http://paraswap.io/",
            img: "paraswap.svg",
            alt: "Paraswap",
            title: "Paraswap",
          },
          {
            id: "coinbase",
            img: "coinbase.svg",
            alt: "Coinbase Ventures",
            title: "Coinbase Ventures",
          },
          {
            id: "huobi",
            img: "huobi.svg",
            alt: "Huobi Global",
            title: "Huobi Global",
          },
          {
            id: "binance",
            img: "binance.svg",
            alt: "Binance",
            title: "Binance",
          },
          {
            id: "moonpay",
            img: "moonpay.svg",
            alt: "Moon Pay",
            title: "Moon Pay",
          },
          {
            id: "ripio",
            img: "ripio.svg",
            alt: "Ripio",
            title: "Ripio",
          },
          {
            id: "argent",
            img: "argent.svg",
            alt: "Argent Wallet",
            title: "Argent Wallet",
          },
          {
            id: "imtoken",
            img: "imtoken.svg",
            alt: "imToken Ventures",
            title: "imToken Ventures",
          },
          {
            id: "mykey",
            img: "mykey.svg",
            alt: "MYKEY Wallet",
            title: "MYKEY Wallet",
          },
          {
            id: "flexa",
            img: "flexa.svg",
            alt: "Flexa payments",
            title: "Flexa payments",
          },
          {
            id: "coingecko",
            img: "coingecko.svg",
            alt: "CoinGecko Ventures",
            title: "CoinGecko Ventures",
          },
          {
            id: "Storj",
            link: "https://twitter.com/kleffew94/status/1360260821524369410",
            img: "storj.svg",
            alt: "Decentralized Cloud Storage",
            title: "Coop w/t zkSync will decrease transaction fees, increase privacy, and enable STORJ nodes to interact directly with the world of DeFi",
          },
          {
            id: "stablepay",
            link: "https://stablepayio.medium.com/update-stablepay-integrates-the-zksync-l2-protocol-2cc3a9b458be",
            img: "stablepay.svg",
            alt: "StablePay decentralized payment platform",
            title: "Update: StablePay integrates the zkSync L2 protocol",
          },
          {
            id: "Golem",
            link: "https://blog.golemproject.net/zksync/",
            img: "golem.svg",
            alt: "The Golem Network",
            title: "Sliding (we mean - rolling!) into Layer 2 with zkSync🌀: scalability on Golem + Ethereum",
          },
          {
            id: "Gitcoin",
            link: "https://gitcoin.co/blog/gitcoin-grants-round-7/",
            img: "gitcoin.svg",
            alt: "Gitcoin",
            title: "Gitcoin Grants R7 Improvements: Scalability & Identity thanks to Layer 2 Integration w/ zkSync",
          },
          {
            id: "Numio",
            link: "https://twitter.com/GetNumio/status/1346421335438872576",
            img: "numio.png",
            alt: "Numio",
            title: "Numio is using zkRollups from zkSync in the mobile payments app",
          },
        ] as Array<PartnerDataItem>;
      },
      required: false,
    },
    partnersPerPage: {
      type: Number,
      default: 6,
      required: false,
    },
  },
  data() {
    return {
      pagesShown: 1,
    };
  },
  computed: {
    morePagesAvailable(): boolean {
      return this.pagesShown * this.partnersPerPage < this.partnersData.length;
    },
  },
  methods: {
    getAssetUrl(img: string) {
      return require("@/assets/images/investors/" + img);
    },
    showMorePages() {
      if (this.morePagesAvailable) {
        this.pagesShown += 1;
      }
    },
  },
});
</script>
