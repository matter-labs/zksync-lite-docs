<template>
  <div>
    <i-table class="tg" responsive hover varint="dark">
      <thead>
      <tr>
        <th class="_border-0"></th>
        <th class="_border-right">Optimistic rollup</th>
        <th class="_border-left">
          <logo />
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
        <td class=" _bg-red">
          <a
            class="_fancyUnderline underlinedLink antilink" title="Nearly-zero cost attack scenario on Optimistic Rollup"
            href="https://ethresear.ch/t/nearly-zero-cost-attack-scenario-on-optimistic-rollup/6336" target="_blank"
          >&lt;$50M <sup>1</sup></a>
        </td>
        <td class="_bg-green">Unlimited</td>
      </tr>

      <tr>
        <td class="_border-top">Finality / capital-efficient exit time</td>
        <td class=" _bg-red">
          <a
            class="_fancyUnderline underlinedLink antilink" title="“The Optimistic Rollup Dilemma” by StarkWare"
            href="https://medium.com/starkware/the-optimistic-rollup-dilemma-c8fc470ca10c" target="_blank"
          >1-2 weeks <sup>2</sup></a>
        </td>
        <td class="_bg-green">5 min</td>
      </tr>
      <tr>
        <td class="_border-top">Cost of privacy (over normal tx)</td>
        <td class="_border-left _border-right _bg-red">
          <a class="_fancyUnderline underlinedLink antilink" title="“A rollup-centric ethereum roadmap” by V.Buterin" href="https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698/20" target="_blank">10-100x
            <sup>3</sup>
          </a>
        </td>
        <td class="_bg-green">2x</td>
      </tr>
      </tbody>
    </i-table>
  </div>
</template>
<script>
import Logo from "@/blocks/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>
