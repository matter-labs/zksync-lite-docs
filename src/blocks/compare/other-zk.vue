<template>
  <div>
    <i-table class="tg" variant="dark" responsive>
      <thead>
      <tr>
        <th class="tg-0lax"></th>
        <th class="tg-95qi">SNARK-based</th>
        <th class="tg-95qi">STARK-based</th>
        <th class="tg-0lax"><logo/></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">App-specific trusted setup</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">Required</td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Not required</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Not required</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">Smart contracts</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;"><span>None</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">EVM-compatible</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;"><span>None</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;"><span>None</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">Free open source</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;"><span>None</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">Community-owned</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;"><span>None</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">Yes</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">Verification cost on L1</span></td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">300k gas</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">5,000k gas</td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">600k gas</span></td>
      </tr>
      <tr>
        <td class="tg-pta1"><span style="font-weight:normal;font-style:normal;color:#ffffff">Gas for a unique account tx</span></td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">3k</td>
        <td class="tg-fr5z" style="color: rgb(255, 255, 255); background-color: rgb(255, 23, 23) !important;">1k</td>
        <td class="tg-rrgg" style="color: rgb(255, 255, 255); background-color: rgb(106, 168, 79) !important;"><span style="font-weight:normal;font-style:normal;color:#ffffff">0.5k</span></td>
      </tr>
      </tbody>
    </i-table>
  </div>
</template>
<script>
import Logo from '@/blocks/Logo.vue'

export default {
  components: {
    Logo,
  },
};
</script>
