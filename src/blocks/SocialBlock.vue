<template>
  <div class="socialIcons">
    <a
      v-for="(socialProfile, numIndex) in socialNetworks"
      :key="numIndex"
      :href="socialProfile.url"
      class="socialItem"
      target="_blank">
      <i :class="[socialProfile.icon,'fab']"/>
      <span>{{socialProfile.name}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        {
          name: "Read our story",
          icon: ["fa-medium-m", "fab"],
          url: "https://medium.com/matter-labs",
        },
        {
          name: "Integrate zkSync",
          icon: ["fa-github", "fab"],
          url: "https://github.com/matter-labs/zksync",
        },
        {
          name: "Join dev community",
          icon: ["fa-gitter", "fab"],
          url: "https://gitter.im/matter-labs/zksync",
        },
        {
          name: "Follow us on Twitter",
          icon: ["fa-twitter", "fab"],
          url: "https://twitter.com/zksync",
        },
        {
          name: "Join the discussion",
          icon: ["fa-telegram-plane", "fab"],
          url: "https://t.me/zksync",
        },
        {
          name: "Contact us directly",
          icon: ["fa-at", "fal"],
          url: "/contact.html",
        },
      ],
    };
  },
};
</script>
