<template>
  <div class="codeBlockContainer">
    <div class="codeBlockTop">
      <div class="codeBlockHeader">
        <div class="codeBlockCircles">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
        <div class="fileTab codeText">filename.{{ !transpiled ? 'sol' : 'rs' }}</div>
        <div class="errorText">{{ error }}</div>
      </div>
      <transition name="fade">
        <div v-if="opened===false || loading===true" class="overlay">
          <img v-if="!loading" alt="By developers, for developers" src="@/assets/images/pages/index/code.jpg">
          <div v-else class="loaderContainer">
            <loader/>
          </div>
        </div>
      </transition>
      <prism-editor v-if="!transpiled" v-model="code" class="editor" :highlight="highlighter" line-numbers/>
      <prism-editor v-else v-model="transpiled" class="editor" readonly :highlight="rustHighlighter" line-numbers/>
    </div>
    <div class="codeBlockFooter">
      <div class="buttonBlock">
        <i-button v-if="opened===false" class="_padding-x-2" size="lg" variant="secondary" @click="opened=true">
          Try our transpiler!
        </i-button>
        <i-button v-else-if="transpiled===false" class="_padding-x-2" size="lg" variant="secondary" :disabled="!code || code.length<=0 || loading" @click="transpile()">
          Transpile into Zinc
        </i-button>
        <div v-else class="buttonGrid">
          <i-tooltip trigger="click">
            <i-button class="_padding-x-2" size="lg" variant="secondary" @click="copy()">
              Copy
            </i-button>
            <template slot="body">Copied!</template>
          </i-tooltip>
          <i-button class="_padding-x-2" size="lg" variant="secondary" @click="transpiled=false">
            Edit
          </i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-solidity";

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    code: "",
    error: "",
    loading: false,
    opened: false,
    transpiled: false,
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.solidity, languages.solidity);
    },
    rustHighlighter(code) {
      return highlight(code, languages.rust, languages.rust);
    },
    async transpile() {
      this.loading = true;
      this.error = "";
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
        this.transpiled = "Transpiled code";
      } catch (error) {
        this.error = error.message;
      }
      this.loading = false;
    },
    copy() {
      const elem = document.createElement("textarea");
      elem.style.position = "absolute";
      elem.style.left = -99999999 + "px";
      elem.style.top = -99999999 + "px";
      elem.value = this.transpiled;
      document.body.appendChild(elem);
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
    },
  },
};
</script>
