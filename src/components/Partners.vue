<template>
  <div class="indexTextBlock _padding-y-2 _margin-y-3">
    <i-container>
      <a id="partners"/>
      <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        Embraced by for<span>eth</span>inkers
      </div>
      <div class="sponsorsContainer _margin-top-5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <a
          v-for="(singlePartner) in partnersData"
          :id="singlePartner.id"
          :key="singlePartner.id"
          :href="singlePartner.link"
          class="antilink"
          target="_blank"
        >
          <img
            :src="getAssetUrl(singlePartner.img)"
            :alt="singlePartner.alt"
            :title="singlePartner.title"
          />
        </a>
      </div>
    </i-container>
  </div>
</template>
<script>
export default {
  name: "Partners",
  props: {
    partnersData: {
      type: Array,
      default: () => {
        return [
          {
            id: "ethereumFoundation",
            link: "https://medium.com/matter-labs/grant-from-the-ethereum-foundation-for-matter-labs-64338f3dd938",
            img: "ethereumFoundation.svg",
            alt: "Ethereum Foundation",
            title: "Grant from the Ethereum Foundation for zkSync",
          },
          {
            id: "dekryptcapital",
            link: "https://dekrypt.capital/",
            img: "dekryptcapital.svg",
            alt: "Dekrypt Capital investment firm",
            title: "Grant from the Dekrypt Capital for zkSync",
          },
          {
            id: "hashed",
            link: "https://www.hashed.com/",
            img: "hashed.svg",
            alt: "Hashed blockchain experts and builders",
            title: "Grant from the Hashed for zkSync",
          },
          {
            id: "aave",
            link: "https://aave.com",
            img: "aave.svg",
            alt: "Aave SAGL",
            title: "Aave SAGL",
          },
          {
            id: "Balancer",
            link: "https://balancer.exchange",
            img: "balancer.svg",
            alt: "Balancer Exchange",
            title: "Balancer Exchange",
          },
          {
            id: "1inch",
            link: "https://1inch.exchange",
            img: "1inch.svg",
            alt: "1inch Exchange",
            title: "1inch Exchange",
          },
          {
            id: "curve",
            link: "https://zksync.curve.fi",
            img: "curve.svg",
            alt: "Curve + zkSync",
            title: "Curve + zkSync",
          },
          {
            id: "binance",
            link: "https://www.binance.com",
            img: "binance.svg",
            alt: "Binance",
            title: "Binance",
          },
          {
            id: "coinbase",
            link: "https://www.coinbase.com",
            img: "coinbase-ventures.svg",
            alt: "Coinbase Ventures",
            title: "Coinbase Ventures",
          },
          {
            id: "imtoken",
            link: "https://token.im",
            img: "imtoken.svg",
            alt: "imToken Ventures",
            title: "imToken Ventures",
          },
          {
            id: "loopring",
            link: "https://loopring.org",
            img: "loopring.svg",
            alt: "LOOPRING WALLET",
            title: "LOOPRING WALLET",
          },
          {
            id: "argent",
            link: "https://www.argent.xyz",
            img: "argent.svg",
            alt: "Argent Wallet",
            title: "Argent Wallet",
          },
          {
            id: "mykey",
            link: "https://mykey.org",
            img: "mykey.svg",
            alt: "MYKEY Wallet",
            title: "MYKEY Wallet",
          },
          {
            id: "huobi",
            link: "https://www.huobi.com",
            img: "huobi.svg",
            alt: "Huobi Global",
            title: "Huobi Global",
          },
          {
            id: "flexa",
            link: "https://flexa.network",
            img: "flexa.svg",
            alt: "Flexa payments",
            title: "Flexa payments",
          },
          {
            id: "moonpay",
            link: "https://www.moonpay.com",
            img: "moonpay.svg",
            alt: "Moon Pay",
            title: "Moon Pay",
          },
          {
            id: "ripio",
            link: "https://www.ripio.com",
            img: "ripio.svg",
            alt: "Ripio",
            title: "Ripio",
          },
          {
            id: "dragonfly",
            link: "https://www.dcp.capital/",
            img: "dragonfly.svg",
            alt: "Dragonfly Capital",
            title: "Investment from the Dragonfly Capital for zkSync",
          },
          {
            id: "zkv",
            link: "https://zkvalidator.com",
            img: "zkv.svg",
            alt: "ZKValidator",
            title: "ZKValidator",
          },
          {
            id: "usv",
            link: "https://www.usv.com",
            img: "usv.svg",
            alt: "Union Square Ventures",
            title: "Union Square Ventures",
          },
          {
            id: "placeholder",
            link: "https://www.placeholder.vc/",
            img: "placeholder.svg",
            alt: "Placeholder Venture Capital",
            title: "Investment from the Placeholder for the Matter Labs",
          },
          {
            id: "coingecko",
            link: "https://coingecko.ventures",
            img: "coingecko.svg",
            alt: "CoinGecko Ventures",
            title: "CoinGecko Ventures",
          },
          {
            id: "1kx",
            link: "https://t.co/j9z0U8fHDL?amp=1",
            img: "1kx.svg",
            alt: "1kx Token network fund",
            title: "Funding from the 1kx for zkSync",
          },
        ];
      },
      required: false,
    },
  },
  methods: {
    getAssetUrl(img) {
      return require("@/assets/images/investors/" + img);
    },
  },
};
</script>
