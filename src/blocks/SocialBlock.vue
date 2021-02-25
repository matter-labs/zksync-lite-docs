<template>
  <div class="socialIcons">
    <a
      v-for="(socialProfile, numIndex) in socialNetworks"
      :key="numIndex"
      :href="socialProfile.url"
      class="socialItem"
      target="_blank">
      <i :class="[socialProfile.icon,'fab']"/>
      <span>{{ socialProfile.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      required: false,
      type: String,
      default: "header",
    },
  },
  computed: {
    socialNetworks() {
      const socialIcons = [
        {
          name: "Medium Blog",
          icon: ["fa-medium-m", "fab"],
          url: "https://medium.com/matter-labs",
        },
        {
          name: "Gitter Rooms",
          icon: ["fa-gitter", "fab"],
          url: "https://gitter.im/matter-labs/zksync",
        },
        {
          name: "Discord Community",
          icon: ["fa-discord", "fab"],
          url: "https://discord.com/invite/px2aR7w",
        },
        {
          name: "Telegram Community",
          icon: ["fa-telegram-plane", "fab"],
          url: "https://t.me/zksync",
        },
        {
          name: "Twitter Community",
          icon: ["fa-twitter", "fab"],
          url: "https://twitter.com/zksync",
        },
        {
          name: "All Contacts",
          icon: ["fa-at", "fal"],
          url: "/contact.html",
          hideIn: "footer",
        },
      ];
      return socialIcons.filter((item) => !item.hideIn || item.hideIn !== this.location);
    },
  },
};
</script>
