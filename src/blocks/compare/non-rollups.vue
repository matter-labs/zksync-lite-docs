<template>
  <i-table class="tg" responsive variation="dark">
    <thead>
    <tr>
      <th class="tg-0pky"></th>
      <th class="tg-0pky"><span>State channels</span></th>
      <th class="tg-0pky">
        <i-tooltip placement="left-start">
          <a class="_fancyUnderline" href="https://twitter.com/gakonst/status/1146793685545304064" target="_blank">Sidechains <i class="fad fa-question-circle"/></a>
          <div slot="body" style="white-space: normal; width: 150px;">
            Some researchers do not consider them to be part of L2 space at all, see
          </div>
        </i-tooltip>
      </th>
      <th class="tg-0pky"><span>Plasma</span></th>
      <th class="tg-0pky"><span>Optimistic rollups</span></th>
      <th class="tg-0pky"><span>Validium</span></th>
      <th class="tg-0pky"><span><logo/></span></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="tg-za14" colspan="7">Security</td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Liveliness assumption (e.g. watch-towers)</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>The mass exit assumption</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Quorum of validators can freeze funds</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Quorum of validators can confiscate funds</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="color: #8c8dfc !important; background-color: #ff1717 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">Yes <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Depends on the implementation of the upgrade mechanism, but usually applies.
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Vulnerability to hot-wallet key exploits</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>High</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>High</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>High</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Immune</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Vulnerability to crypto-economic attacks</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>High</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Moderate</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Immune</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Cryptographic primitives</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Standard</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Standard</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Standard</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Standard</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>New</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>New</span></td>
    </tr>
    <tr>
      <td class="tg-za14" colspan="7">Performance / economics</td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Max throughput on ETH 1.0</span></td>


      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1k..9k TPS <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Complex limitations apply
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>10k+ TPS</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1k..9k TPS <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Complex limitations apply
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">2k TPS <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            To keep compatibility with EVM throughput must be capped at 300 TPS
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>20k+ TPS</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>2k TPS</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Max throughput on ETH 2.0</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1..∞ TPS <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Complex limitations apply
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>10k+ TPS</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1k..9k TPS <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Complex limitations apply
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>20k+ TPS</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>20k+ TPS</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>20k+ TPS</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Capital-efficient</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Separate onchain tx to open new account</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">No <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Depends on the implementation. Not needed in zkSync but required in Loopring.
          </div>
        </i-tooltip>
      </td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Cost of tx</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Very low</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Low</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Very low</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Low</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Low</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Low</span></td>
    </tr>
    <tr>
      <td class="tg-za14" colspan="7">Usability</td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Withdrawal time</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>1 confirm.</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>1 confirm.</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1 week <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            This parameter is configurable, but most researchers consider 1 or 2 weeks to be secure.<br>
            Can be accelerated with liquidity providers but will make the solution capital-inefficient.
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="background-color: #ff1717 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1 week <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            This parameter is configurable, but most researchers consider 1 or 2 weeks to be secure.<br>
            Can be accelerated with liquidity providers but will make the solution capital-inefficient.
          </div>
        </i-tooltip>


      </td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1..10 min <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Can be accelerated with liquidity providers but will make the solution capital-inefficient
          </div>
        </i-tooltip>
      </td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important">
        <i-tooltip placement="left-start">
          <span class="_fancyUnderline">1..10 min <i class="fad fa-question-circle"/></span>
          <div slot="body" style="white-space: normal; width: 150px;">
            Can be accelerated with liquidity providers but will make the solution capital-inefficient
          </div>
        </i-tooltip>
      </td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Time to subjective finality</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Instant</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>N/A (trusted)</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>1 confirm.</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>1 confirm.</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>1..10 min</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>1..10 min</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Client-side verification of subjective finality</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>N/A (trusted)</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Instant tx confirmations</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Full</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Bonded</span></td>
    </tr>
    <tr>
      <td class="tg-za14" colspan="7">Other aspects</td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Smart contracts</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Limited</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Flexible</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Limited</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Flexible</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Flexible</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Flexible</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>EVM-bytecode portable</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Yes</span></td>
    </tr>
    <tr>
      <td class="tg-za14"><span>Native privacy options</span></td>
      <td class="tg-za14" style="color: #000000; background-color: #b6d7a8 !important"><span>Limited</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #ff1717 !important"><span>No</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Full</span></td>
      <td class="tg-za14" style="background-color: #6aa84f !important"><span>Full</span></td>
    </tr>
    </tbody>
  </i-table>
</template>
<script>
import Logo from "@/blocks/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>
