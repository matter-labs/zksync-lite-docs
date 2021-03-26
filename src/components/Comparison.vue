<template>
    <i-container id="zksync-vs-rollup-solutions" fluid class="_margin-y-3 _padding-y-2 _text-center container-fluid">
        <i-row class="function container">
            <i-column xs="12">
                <div class="h2 _margin-bottom-1 _margin-top-0 _padding-0" data-aos="fade-up" data-aos-delay="50" data-aos-offset="-100" data-aos-duration="1200">
                    <img
                            src="@/assets/images/pages/index/symbol-logo.svg" alt="zkSync is Ethereum’s most user-centric ZK rollup" title="zkSync solves Ethereum scalability
with zero security compromises"
                    /> zkSync in comparison
                </div>
                <i-collapsible variant="dark" class="_width-full" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
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
</template>

<script lang="ts">
import Vue from "vue";

import Optimistic from "@/blocks/compare/optimistic.vue";
import OtherZk from "@/blocks/compare/other-zk.vue";

export default Vue.extend({
  name: "Comparison",
  components: {
    Optimistic,
    OtherZk,
  },
});
</script>
