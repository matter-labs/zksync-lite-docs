<template>
  <div class="codeBlockContainer" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200">
    <div class="codeBlockTop">
      <div class="codeBlockHeader">
        <div class="codeBlockCircles">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
        <div class="fileTab codeText" :class="{ error: !!error }">filename.{{ transpiled ? "zinc" : "sol" }}</div>
        <div class="errorText">{{ error }}</div>
      </div>
      <transition name="fade">
        <div v-if="opened === false || loading === true" class="overlay">
          <img v-if="!loading" alt="By developers, for developers" src="@/assets/images/pages/index/code.jpg" />
          <div v-else class="loaderContainer">
            <loader />
          </div>
        </div>
      </transition>
    </div>
    <div class="codeBlockFooter">
      <div class="buttonBlock">
        <i-button v-if="opened === false" class="_padding-x-2 antilink" size="lg" variant="secondary" :href="'/dev'" target="_blank"> Get started! </i-button>
        <div v-else-if="transpiled === false" class="buttonGrid">
          <i-button class="_padding-x-2" size="lg" variant="secondary" :disabled="!code || code.length <= 0 || loading" @click="transpile()"> Transpile! </i-button>
          <i-button
            size="lg"
            class="fal fa-times-circle _text-white _padding-x-2"
            @click="
              transpiled = false;
              opened = false;
            "
          >
          </i-button>
        </div>
        <div v-else class="buttonGrid">
          <i-tooltip trigger="click">
            <i-button class="_padding-x-2" size="lg" variant="transparent" @click="copy()">
              <em class="fal fa-copy _text-white"></em>
            </i-button>
            <template slot="body">Copied!</template>
          </i-tooltip>
          <i-button class="_padding-x-2" size="lg" variant="transparent" @click="transpiled = false">
            <em class="fal fa-pen-alt _text-white" />
          </i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * @var document
 */

export default Vue.extend({
  data: () => ({
    error: "",
    loading: false,
    opened: false,
    transpiled: false as false | string,
  }),
  methods: {
    copy() {
      if (process.client && document) {
        const elem = document.createElement("textarea");
        elem.style.position = "absolute";
        elem.style.left = -99999999 + "px";
        elem.style.top = -99999999 + "px";
        elem.value = this.transpiled as string;
        document.body.appendChild(elem);
        elem.select();
        // noinspection JSUnresolvedFunction
        document.execCommand("copy");
        document.body.removeChild(elem);
      }
    },
  },
});
</script>
