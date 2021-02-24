<template>
  <div>
    <i-table class="tg" variant="dark" responsive>
      <thead>
      <tr>
        <th ></th>
        <th class="_text-center">SNARK<br>based</th>
        <th class="_text-center">STARK<br>based</th>
        <th class="_text-center">
          <emphasis :show-logo="true" brand-name=""/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td >App-specific trusted setup</td>
        <td class=" _bg-red">Required</td>
        <td class=" _bg-green">Not required</td>
        <td class=" _bg-green">Not required</td>
      </tr>
      <tr>
        <td >Smart contracts</td>
        <td class=" _bg-red">None</td>
        <td class=" _bg-green">Yes</td>
        <td class=" _bg-green">Yes</td>
      </tr>
      <tr>
        <td >EVM-compatible</td>
        <td class=" _bg-red">None</td>
        <td class=" _bg-red">None</td>
        <td class=" _bg-green">Yes</td>
      </tr>
      <tr>
        <td >Free open source</td>
        <td class=" _bg-green">Yes</td>
        <td class=" _bg-red">None</td>
        <td class=" _bg-green">Yes</td>
      </tr>
      <tr>
        <td >Community-owned</td>
        <td class=" _bg-green">Yes</td>
        <td class=" _bg-red">None</td>
        <td class=" _bg-green">Yes</td>
      </tr>
      <tr>
        <td >Verification cost on L1</td>
        <td class=" _bg-green">300k gas</td>
        <td class=" _bg-red">5,000k gas</td>
        <td class=" _bg-green">600k gas</td>
      </tr>
      <tr>
        <td >Gas for a unique account tx</td>
        <td class=" _bg-red">3k</td>
        <td class=" _bg-red">1k</td>
        <td class=" _bg-green">0.5k</td>
      </tr>
      </tbody>
    </i-table>
  </div>
</template>
<script>
import Emphasis from "@/components/Emphasis.vue";

export default {
  components: {
    Emphasis,
  },
};
</script>
