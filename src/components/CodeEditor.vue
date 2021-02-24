<template>
  <prism-editor v-model="code" class="my-editor" :highlight="highlighter" line-numbers></prism-editor>
</template>

<script>
import "prismjs/components/prism-clike";
// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

export default {
  components: {
    PrismEditor,
  },
  data: () => ({ code: 'console.log("Hello World")' }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // returns html
    },
  },
};
</script>
<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
