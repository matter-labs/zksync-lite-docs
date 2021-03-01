<template>
  <div class="indexPage">
    <z-hero/>
    <reviews-slider class="_padding-y-2 _padding-top-md-4 _padding-bottom-md-4"/>
    <about/>
    <Comparison/>

    <i-container class="codeContainer _padding-y-2 _padding-top-md-4 _padding-bottom-md-4 _margin-y-3 _margin-bottom-8">
      <div class="h2" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800" data-aos-offset="0">
        By developers, for developers
      </div>
      <div class="grayText subheaderText _margin-bottom-3" data-aos="fade-up" data-aos-delay="50" data-aos-offset="0" data-aos-duration="1200">
        Ease and fun of development are at the<br> core of
        <Emphasis/>
        design
      </div>

      <div class="codeGrid _margin-top-3">
        <div class="columnGrid" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200">
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
              Smart contracts in Zinc
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
            <div class="h2 _position-relative">
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
          <div data-aos="fade-right" data-aos-delay="50" data-aos-offset="-100" data-aos-duration="1200" >
            <div class="h2 _margin-bottom-2">
              Decentralized,<br>
              on principle
            </div>
            <div class="grayText">
              <p>
                <Emphasis/>
                is a mission-driven project. Its purpose is to break financial barriers and enhance world’s freedom — by accelerating the mass adoption of
                public blockchains. We take this mission to heart: check out our public <z-cta
                href="https://www.notion.so/matterlabs/Matter-Labs-Team-Handbook-43342b471fe14f05b2baf250cb7c7a02"
              >Team Handbook</z-cta>
              </p>
              <p>While healthy pragmatism is necessary to move fast,
                <emphasis/>
                will never betray the ethos of crypto. Over the past two years, we’ve <z-cta
                  href="https://medium.com/matter-labs/tagged/l2" target="_blank"
                >fought relentlessly</z-cta> to make sure that the widely adopted L2 is as secure, open, and reliable as Ethereum itself. We won’t rest until the original <z-cta
                  href="https://medium.com/matter-labs/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58" target="_blank"
                >zkSync vision</z-cta> is fully materialized.
              </p>
            </div>
            <z-button class="_margin-x-xs-auto _margin-top-2" href="https://www.notion.so/matterlabs/Freedom-d36a797ff1aa47d2859f9e0c5ffbd0ab" size="lg" variant="secondary">More
              about
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
                To resist even the most powerful potential adversaries, <Emphasis/> is going down the path of <z-cta :href="'/faq/decentralization.html'"
                                                                                                                     target="_blank">progressive
                decentralization</z-cta>
              </div>
            </div>
          </div>
        </div>
      </i-container>
    </div>

    <i-container class="_margin-y-lg-2 _margin-y-xs-2 communityOwned">
      <div class="topBlock _padding-bottom-2">
        <div class="h2 _padding-top-1">Owned by the community</div>
        <div  class="grayText _margin-top-2 _margin-bottom-0">
          <p id="community" class="_margin-bottom-0">
            <Emphasis/>
            is 100% <z-cta href="https://github.com/matter-labs/zksync"><i class="fab fa-github"/> open source</z-cta></p>
          <p class="_margin-bottom-0 _zk-font-18">The supermajority of the network governance rights will be distributed to the community in a fair and transparent way.</p>
        </div>
      </div>
      <div class="bottomBlock">

        <div class="h2 _padding-top-1">Get involved</div>
        <div class="grayText _zk-font-18">
          Take part in the community discussions and don’t miss important updates
        </div>
        <social-block class="_margin-y-lg-2 _margin-y-xs-1" location="footer"/>
        <newsletter/>
      </div>
    </i-container>
  </div>
</template>

<script>
import About from "@/blocks/About";
import codeBlock from "@/blocks/CodeBlock.vue";
import newsletter from "@/blocks/Newsletter.vue";
import ReviewsSlider from "@/blocks/ReviewsSlider.vue";
import socialBlock from "@/blocks/SocialBlock.vue";
import Emphasis from "@/components/Emphasis";
import ZButton from "@/components/ZButton";
import ZCta from "@/components/ZCta";
import ZHero from "@/components/ZHero";
import Comparison from "@/components/Comparison";

export default {
  components: {
    Comparison,
    About,
    ZCta,
    ZHero,
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
};
</script>
