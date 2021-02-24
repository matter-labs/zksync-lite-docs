<template>
  <div class="indexPage">
    <z-hero/>

    <reviews-slider class="_padding-y-2 _padding-top-md-4 _padding-bottom-md-4"/>
    <div id="about" ref="scrollToBlock" class="featuresContainer _margin-sm-2 _margin-y-md-4 _padding-y-2 _padding-top-md-4 _padding-bottom-md-4">
      <i-container>
        <div class="h2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
          Security and UX first
        </div>
        <div class="grayText subheaderText" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
          zkSync is Ethereum’s most user-centric ZK rollup
        </div>
        <div class="featuresGrid">
          <div class="featureItem">
            <img class="featureItemIcon" src="@/assets/images/pages/index/shield.svg" alt="Uncapped Security">
            <div class="featureHeadline h3">
              Uncapped Security
            </div>
            <div class="divider _margin-y-1"/>
            <div class="bottomBlock">
              <p class="featureDescription">
                Unlike any other scaling approach, ZK rollup has no upper bound on the value it can securely handle in L2.
              </p>
              <i class="arrowDown fal fa-arrow-down"/>
              <p class="featureDescription">
                zkSync DeFi ecosystem can grow without limits.
              </p>
            </div>
          </div>
          <div class="featureItem">
            <img class="featureItemIcon" src="@/assets/images/pages/index/clock.svg" alt="10-Minute Finality">
            <div class="featureHeadline h3">
              15-Minute<br>Finality
            </div>
            <div class="divider _margin-y-1"/>
            <div class="bottomBlock">
              <p class="featureDescription">
                Unlike optimistic rollups, all assets can be moved capital-efficiently and fast between ZK rollup and L1.
              </p>
              <i class="arrowDown fal fa-arrow-down"/>
              <p class="featureDescription">
                Protocols can migrate<br> from L1 to L2 gradually.
              </p>
            </div>
          </div>
          <div class="featureItem">
            <img class="featureItemIcon" src="@/assets/images/pages/index/weights.svg" alt="0.5k Gas per tx">
            <div class="featureHeadline h3">
              0.5k Gas<br> per tx
            </div>
            <div class="divider _margin-y-1"/>
            <div class="bottomBlock">
              <p class="featureDescription">
                Live since June 2020,
                zkSync has the lowest real tx costs across all existing and planned rollups.
              </p>
              <i class="arrowDown fal fa-arrow-down"/>
              <p class="featureDescription">
                VISA-scale is possible today with 2000+ TPS.
              </p>
            </div>
          </div>
        </div>
        <div class="grayText _margin-top-2 _margin-bottom-1">
          zkSync also supports meta-transactions, instant confirmations with<br>
          economic finality, low-cost privacy, and more.
        </div>
        <i-row center-xs>
          <a :href="'/faq/tech.html'" target="_blank" class="underlinedLink">
            How all of this works
          </a>
        </i-row>
      </i-container>
    </div>

    <i-container id="zksync-vs-rollup-solutions" fluid class="_padding-top-3 _text-center">
      <i-row>
        <i-column xs="12">
          <div class="h2 _margin-bottom-1 _padding-0" data-aos="fade-up" data-aos-delay="50" data-aos-offset="-100" data-aos-duration="1200">
            <img
              src="@/assets/images/pages/index/logo.svg" alt="zkSync is Ethereum’s most user-centric ZK rollup" title="zkSync solves Ethereum scalability
with zero security compromises"
            /> in comparison
          </div>
          <div class="grayText subheaderText _margin-bottom-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
            based on well-known pros and const of the
            <emphasis/>
            against the other L2-scaling solutions
          </div>
          <i-collapsible variant="dark" class="_width-full">
            <i-collapsible-item>
              <template slot="title">zkSync vs <span>optimistic rollups</span></template>
              <optimistic/>
            </i-collapsible-item>
            <i-collapsible-item>
              <template slot="title">zkSync vs <span>other ZK rollups</span></template>
              <other-zk/>
            </i-collapsible-item>
          </i-collapsible>
        </i-column>
      </i-row>
    </i-container>

    <i-container class="codeContainer _padding-y-2 _padding-top-md-4 _padding-bottom-md-4 _margin-y-3 _margin-bottom-8">
      <div class="h2" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800" data-aos-offset="0">
        By developers, for developers
      </div>
      <div class="grayText subheaderText _margin-bottom-3" data-aos="fade-up" data-aos-delay="50" data-aos-offset="0" data-aos-duration="1200">
        Ease and fun of development are at the<br> core of
        <Emphasis/>
        design
      </div>

      <reviews-slider class="_padding-y-2 _padding-top-md-4 _padding-bottom-md-4" :reviews-data="dataForDevelopers"/>
      <div class="codeGrid _margin-top-3">
        <div class="columnGrid">

          <div class="textItem" :class="{'chosen': chosenBlock===0}" @click="chosenBlock=0">
            <div class="h2">
              Powerful, easy-to-use API
            </div>
            <div class="grayText">
              Integrate payments and atomic swaps in a few lines of code.
            </div>
          </div>
          <div class="textItem">
            <div class="h2">
              Smart contracts in
              <Emphasis brand-name="Zinc"/>
            </div>
            <div class="grayText">
              Develop type-safe, functional style smart contracts on Zinc: a Rust-based framework.
            </div>
            <z-button
              css-class='width-300'
              href='https://zksync.curve.fi'
              outline="outline"
              size='md'
              target='_blank'
            >Try <strong>Curve + zkSync</strong> testnet
            </z-button>
          </div>
          <div class="textItem">
            <div class="h2 _position-relative _text-nowrap">
              Smart contracts in Solidity
              <i-badge variant="secondary _upcoming-h3">upcoming</i-badge>
            </div>
            <div class="grayText">
              Deploy your existing EVM codebase with minimum modifications.
            </div>
          </div>
        </div>
        <transition-group tag="div" class="codeBlockSpace" name="slideRight">
          <code-block key="code"/>
        </transition-group>
      </div>
    </i-container>

    <div class="decentralizedContainer _padding-y-2 _padding-top-md-4 _padding-bottom-md-4">
      <i-container>
        <img
          alt="Decentralized, on principle"
          class="mainImg _margin-bottom-4"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          src="@/assets/images/pages/index/decentralized.jpg"
        >
        <div class="decentralizedGrid">
          <div data-aos="fade-right">
            <div class="h2 _margin-bottom-2">
              Decentralized,<br>
              on principle
            </div>
            <div class="grayText">
              <p>
                <Emphasis/>
                is a mission-driven project. Its purpose is to break financial barriers and enhance world’s freedom — by accelerating the mass adoption of
                public blockchains. We take this mission to heart: check out our <a
                href="https://www.notion.so/matterlabs/Matter-Labs-Team-Handbook-43342b471fe14f05b2baf250cb7c7a02"
              >Team Handbook</a>.
              </p>
              <p>While healthy pragmatism is necessary to move fast,
                <emphasis/>
                will never betray the ethos of crypto. Over the past two years, we’ve <a
                  href="https://medium.com/matter-labs/tagged/l2" target="_blank"
                >fought relentlessly</a> to make sure that the widely adopted L2 is as secure, open, and reliable as Ethereum itself. And we won’t rest until <a
                  href="https://medium.com/matter-labs/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58" target="_blank"
                >the original zkSync vision</a> is fully materialized.
              </p>
            </div>
            <z-button class="_padding-x-2 _margin-top-2" href="https://www.notion.so/matterlabs/Freedom-d36a797ff1aa47d2859f9e0c5ffbd0ab" size="lg" variant="secondary">More about
              our philosophy
            </z-button>
          </div>
          <div class="textGrid">
            <div class="ourValues _text-bold">
              Our values
            </div>
            <div class="textItem">
              <div class="h2">
                Fairness
              </div>
              <div class="grayText">
                The rules of the game must be equal for all, with no preferences to the wealthy or powerful.
                <emphasis/>
                reinforces this by making Ethereum affordable.
              </div>
            </div>
            <div class="textItem">
              <div class="h2">
                Inclusion
              </div>
              <div class="grayText">
                Free access to finance is a fundamental right.
                <Emphasis/>
                is unconditionally permissionless from day one, and will also bring strong censorship-resistance to L2.
              </div>
            </div>
            <div class="textItem">
              <div class="h2">
                Resilience
              </div>
              <div class="grayText">
                We believe that only the paranoid survive.
                <Emphasis/>
                is being <a :href="'/faq/decentralization.html'" target="_blank">progressively decentralized</a> to resist even the most powerful
                potential
                adversaries.
              </div>
            </div>
          </div>
        </div>
      </i-container>
    </div>

    <i-container class="_margin-y-lg-2 _margin-y-xs-2 communityOwned">
      <div class="topBlock _padding-bottom-2">
        <div class="h2 _padding-top-1">Owned by the community</div>
        <div class="grayText _margin-top-2 _margin-bottom-0">
          <p class="_margin-bottom-0">
            <Emphasis/>
            is 100% <i class="fab fa-github"/> <a href="https://github.com/matter-labs/zksync">free open source</a></p>
          <p class="_margin-bottom-0 _zk-font-18">The supermajority of the network governance rights will be distributed to the community in a fair and transparent way.</p>
        </div>
      </div>
      <div class="bottomBlock">
        <div class="h2 _padding-top-1">Get involved</div>
        <div class="grayText _zk-font-18">
          Take part in the community discussions and don’t miss important updates
        </div>
        <social-block class="_margin-y-lg-2 _margin-y-xs-1 "/>
        <newsletter/>
      </div>
    </i-container>
  </div>
</template>

<script>
import codeBlock from "@/blocks/CodeBlock.vue";
import Optimistic from "@/blocks/compare/optimistic";
import OtherZk from "@/blocks/compare/other-zk";
import newsletter from "@/blocks/Newsletter.vue";
import ReviewsSlider from "@/blocks/ReviewsSlider.vue";
import socialBlock from "@/blocks/SocialBlock.vue";
import Emphasis from "@/components/Emphasis";
import ZButton from "@/components/ZButton";
import ZHero from "~/components/ZHero";

export default {
  components: {
    ZHero,
    OtherZk,
    Optimistic,
    ZButton,
    Emphasis,
    ReviewsSlider,
    codeBlock,
    socialBlock,
    newsletter,
  },
  layout: "index",
  data() {
    return {
      dataForDevelopers: [
        {
          id: null,
          ref: 1,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Powerful, easy-to-use API",
          text: "Integrate payments and atomic swaps in a few lines of code.",
        },
        {
          id: null,
          ref: 2,
          link: null,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          title: "Smart contracts in Zinc",
          text: "Develop type-safe, functional style smart contracts on Zinc: a Rust-based framework.",
        },
        {
          id: null,
          ref: 3,
          link: "https://zksync.curve.fi",
          isButton: true,
          thumbnail: null,
          thumbnailAlt: null,
          thumbnailTitle: null,
          isUpcoming: true,
          title: "Powerful, easy-to-use API",
          text: "Smart contracts in Solidity ",
        },
      ],
      lockVisible: false,
      contactInfoShown: false,
      chosenBlock: 0,
    };
  },
  head() {
    const image =
      this.$socialsplash.generate("enterprise-website", {
        title: "zkSync is Ethereum's most user-centric ZK-rollup",
        subtitle: "Endorsed by V.Butering, partnered with Ethereum Foundation",
        website: "zksync.io",
        logo_url: "localhost:3000/static/logos/socialsplash.png",
        background: "#2311142",
      }) ?? "/static/social.jpg";

    return [
      { hid: "og:image", name: "og:image", content: image },
      { hid: "og:image:width", name: "og:image:width", content: "1200" },
      { hid: "og:image:height", name: "og:image:height", content: "628" },
      { hid: "twitter:image", name: "twitter:image", content: image },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    ];
  },
};
</script>
