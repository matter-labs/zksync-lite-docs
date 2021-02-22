<template>
  <div>
    <i-table class="tg" responsive variation="dark">
      <thead>
      <tr>
        <th class="tg-0pky"></th>
        <th class="tg-95qi">Optimistic rollup</th>
        <th class="tg-95qi">
          <logo/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="tg-pta1"><span>Solidity smart contracts</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span>Yes</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span>Yes</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span>Max secure Total Locked Value</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">
          <a
            class="_fancyUnderline underlinedLink antilink" title="Nearly-zero cost attack scenario on Optimistic Rollup"
            href="https://ethresear.ch/t/nearly-zero-cost-attack-scenario-on-optimistic-rollup/6336" target="_blank"
          >&lt;$50M <sup>1</sup></a>
        </td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span>Unlimited</span></td>
      </tr>

      <tr>
        <td class="tg-pta1"><span>Finality / capital-efficient exit time</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">
          <a
            class="_fancyUnderline underlinedLink antilink" title="“The Optimistic Rollup Dilemma” by StarkWare"
            href="https://medium.com/starkware/the-optimistic-rollup-dilemma-c8fc470ca10c" target="_blank"
          >1-2 weeks <sup>2</sup></a>
        </td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span>5 min</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span>Cost of privacy (over normal tx)</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">
          <a class="_fancyUnderline underlinedLink antilink" title="“A rollup-centric ethereum roadmap” by V.Buterin" href="https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698/20" target="_blank">10-100x
            <sup>3
            </sup></a>
        </td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span>2x</span></td>
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
