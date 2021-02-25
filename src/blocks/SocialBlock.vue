<template>
  <div class="socialIcons">
    <a
      v-for="(socialProfile, numIndex) in socialNetworks"
      :key="numIndex"
      :href="socialProfile['url']"
      class="socialItem"
      target="_blank">
      <i :class="[socialProfile['icon'],'fab']"/>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        {
          name: "medium",
          icon: ["fa-medium-m", "fab"],
          url: "https://medium.com/matter-labs",
        },
        {
          name: "github",
          icon: ["fa-github", "fab"],
          url: "https://github.com/matter-labs/zksync",
        },
        {
          name: "twitter",
          icon: ["fa-twitter", "fab"],
          url: "https://twitter.com/zksync",
        },
        {
          name: "gitter:",
          icon: ["fa-gitter", "fab"],
          url: "https://gitter.im/matter-labs/zksync",
        },
        {
          name: "telegram",
          icon: ["fa-telegram-plane", "fab"],
          url: "https://t.me/zksync",
        },
        {
          name: "contacts",
          icon: ["fa-at", "fal"],
          url: "/contact.html",
        },
      ],
    };
  },
};
</script>
