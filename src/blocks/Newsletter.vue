<template>
  <div class="newsletterContainer">
    <label  class="newsletterHeadline">Newsletter sign-up</label>
    <form v-if="!success" action="//dev.us4.list-manage.com/subscribe/post?u=ef8545da9c594ae082297352d&id=fa715c9af0" method="post" target="_blank" :class="{'focused': focused}" class="newsletterInput" @submit="submit">
      <input v-model="email" :disabled="loading" placeholder="Your e-mail" required type="email" name="EMAIL" @blur="focused=false" @focus="focused=true">
      <i-button type="submit" class="submitBtn" size="lg" variant="secondary">
        Subscribe
      </i-button>
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input name="b_ef8545da9c594ae082297352d_fa715c9af0" tabindex="-1" value=""></div>
      <!-- <div v-else class="submitBtn loading">
        <loader size="xs"/>
      </div> -->
    </form>
    <!-- <div v-else class="succesBlock">
      Successfully registered
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      focused: false,
      loading: false,
      success: false,
    };
  },
  methods: {
    async submit() {
      /* e.preventDefault();
      this.loading = true;
      try {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
        this.success = true;
      } catch (error) {}
      this.loading = false; */
    },
  },
};
</script>
