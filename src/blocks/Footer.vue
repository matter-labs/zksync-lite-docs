<template>
  <footer class="mainFooter">
    <i-container>
      <i-row class="_padding-y-lg-2 _padding-y-xs-1">
        <i-column :xs="12" :md="6" class="_padding-left-0">
          <div class="secondaryText">
            Made with ❤ by <a href="https://matter-labs.io" target="_blank">Matter Labs</a>
          </div>
        </i-column>
        <i-column :xs="12" :md="6" class="_padding-right-0">
          <div class="rightSideLinks">
            <a :href="'/legal/terms.html'">Terms</a>
            <a :href="'/legal/privacy.html'">Privacy Policy</a>
          </div>
        </i-column>
      </i-row>
    </i-container>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>
