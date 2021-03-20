<template>
  <div>
    <i-table class="tg" responsive hover varint="dark">
      <thead>
      <tr>
        <th></th>
        <th class="_text-center _border-left _border-right">Optimistic</th>
        <th class="_text-center">
          <emphasis :show-logo="true" brand-name=""/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Solidity smart contracts</td>
        <td class="_bg-green">Yes</td>
        <td class="_bg-green">Yes</td>
      </tr>
      <tr>
        <td>Max secure Total Locked Value</td>
        <td class=" _bg-red _bg-react">
          &lt;$50M
          <sup><a
            class="_fancyUnderline" title="Nearly-zero cost attack scenario on Optimistic Rollup"
            href="https://ethresear.ch/t/nearly-zero-cost-attack-scenario-on-optimistic-rollup/6336" target="_blank"
          >1</a></sup>
        </td>
        <td class="_bg-green">Unlimited</td>
      </tr>

      <tr>
        <td>Finality / capital-efficient exit time</td>
        <td class=" _bg-red _bg-react">
          1-2 weeks <sup><a
          class="_fancyUnderline" title="“The Optimistic Rollup Dilemma” by StarkWare"
          href="https://medium.com/starkware/the-optimistic-rollup-dilemma-c8fc470ca10c" target="_blank"
        >2</a></sup>
        </td>
        <td class="_bg-green">5 min</td>
      </tr>
      <tr>
        <td>Cost of privacy (over normal tx)</td>
        <td class="  _bg-red _bg-react">
          10-100x
          <sup><a class="_fancyUnderline" title="“A rollup-centric ethereum roadmap” by V.Buterin"
                  href="https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698/20" target="_blank">3</a></sup>
        </td>
        <td class="_bg-green">2x</td>
      </tr>
      </tbody>
    </i-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Emphasis from "@/components/Emphasis.vue";

export default Vue.extend({
  components: {
    Emphasis,
  },
});
</script>
