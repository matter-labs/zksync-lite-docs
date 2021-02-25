<template>
  <div>
    <i-table class="tg" responsive hover varint="dark">
      <thead>
      <tr>
        <th class="_border-0"></th>
        <th class="_text-center">Optimistic</th>
        <th class="_text-center">
          <emphasis :show-logo="true" brand-name=""/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="_border-0">Solidity smart contracts</td>
        <td class="_bg-green">Yes</td>
        <td class="_bg-green">Yes</td>
      </tr>
      <tr>
        <td class="_border-top">Max secure Total Locked Value</td>
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
        <td class="_border-top">Finality / capital-efficient exit time</td>
        <td class=" _bg-red _bg-react">
          1-2 weeks <sup><a
          class="_fancyUnderline" title="“The Optimistic Rollup Dilemma” by StarkWare"
          href="https://medium.com/starkware/the-optimistic-rollup-dilemma-c8fc470ca10c" target="_blank"
        >2</a></sup>
        </td>
        <td class="_bg-green">5 min</td>
      </tr>
      <tr>
        <td class="_border-top">Cost of privacy (over normal tx)</td>
        <td class="_border-left  _bg-red _bg-react">
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
<script>
import Emphasis from "@/components/Emphasis";
export default {
  components: {
    Emphasis,
  },
};
</script>
