<template>
  <div
    class='theme-container'
    :class='containerClass'
    @touchstart='onTouchStart'
    @touchend='onTouchEnd'
  >
    <slot name='navbar'>
      <Navbar v-if='shouldShowNavbar' @toggle-sidebar='toggleSidebar'>
        <template #before>
          <slot name='navbar-before' />
        </template>
        <template #after>
          <slot name='navbar-after' />
        </template>
      </Navbar>
    </slot>

    <div class='sidebar-mask' @click='toggleSidebar(false)' />

    <slot name='sidebar'>
      <Sidebar>
        <template #top>
          <slot name='sidebar-top' />
        </template>
        <template #bottom>
          <slot name='sidebar-bottom' />
        </template>
      </Sidebar>
    </slot>

    <slot name='page'>
      <Home v-if='frontmatter.home' />

      <Transition
        v-else
        name='fade-slide-y'
        mode='out-in'
        @before-enter='onBeforeEnter'
        @before-leave='onBeforeLeave'
      >
        <Page :key='page.path'>
          <template #top>
            <slot name='page-top' />
          </template>
          <template #bottom>
            <slot name='page-bottom' />
          </template>
        </Page>
      </Transition>
    </slot>
  </div>
</template>

<script setup lang='ts'>
import Home from '@vuepress/theme-default/lib/client/components/Home.vue';
import Navbar from '@vuepress/theme-default/lib/client/components/Navbar.vue';
import Page from '@vuepress/theme-default/lib/client/components/Page.vue';
import Sidebar from '@vuepress/theme-default/lib/client/components/Sidebar.vue';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { computed, onMounted, onUnmounted, ref, Transition } from 'vue';
import { useRouter } from 'vue-router';
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared';
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData
} from '@vuepress/theme-default/lib/client/composables';

const page = usePageData();
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
);

// sidebar
const sidebarItems = useSidebarItems();
const isSidebarOpen = ref(false);
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value;
};
const touchStart = { x: 0, y: 0 };
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
};
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true);
    } else {
      toggleSidebar(false);
    }
  }
};

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value
  },
  frontmatter.value.pageClass
]);

// close sidebar after navigation
let unregisterRouterHook;
onMounted(() => {
  const router = useRouter();
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false);
  });
});
onUnmounted(() => {
  unregisterRouterHook();
});

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>
<style lang='scss'>
/* import variables from palette */
//noinspection CssUnknownTarget
@import '@vuepress/plugin-palette/palette';

body {
  //noinspection CssUnknownProperty
  aside.sidebar {
    --webkit-scrollbar-color: #ccc !important;
    scrollbar-color: $badgeTipColor !important;
    scrollbar-track-color: $badgeTipColor !important;
  }
}

.dark {
  body {
    .theme-container
    {
      padding-top: 64px;

      display: flex;
      justify-content: stretch;

      aside.sidebar {
        position: initial;
        border-width: 0;
      }
    }
    header.navbar {
      flex-wrap: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &>.navbar-items-wrapper
      {
        flex-wrap: nowrap;
        position: initial;
      }

      -webkit-text-size-adjust: 100%;
      tab-size: 4;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --app-height: 1325px;
      line-height: inherit;
      -webkit-font-smoothing: antialiased;
      font-style: normal;
      font-feature-settings: normal;
      font-variant: normal;
      text-rendering: optimizeSpeed;
      font-size: 16px;
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e5e7eb;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scroll-snap-strictness: proximity;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgb(59 130 246 / 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      overflow: hidden;
      --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      --tw-backdrop-blur: blur(12px);
      backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
      transition: background-color .2s ease;
      will-change: background-color;
      position: fixed;
      width: 100%;
      z-index: 1000;
      height: 64px;
      background: rgba(24,24,32,.85);
    }

    &::before {
      content: "";
      opacity: .75;
      background: radial-gradient(19.49% 58.52% at 50% 0, rgba(249, 196, 60, .3) 0, rgba(231, 166, 1, 0) 100%), radial-gradient(50% 50% at 100% 100%, #520aeb 10.27%, rgba(159, 115, 255, 0) 100%), radial-gradient(77.86% 77.86% at 100% 0, #00a7ff 0, rgba(0, 166, 254, .12) 100%), radial-gradient(50% 50% at 0 0, #ff8d6c 0, rgba(255, 92, 0, .6) 100%), radial-gradient(70.24% 70.24% at 0 100%, #e81d72 0, rgba(255, 0, 0, 0) 100%);
      background-blend-mode: overlay, normal, normal, color-dodge, normal;
      mix-blend-mode: screen;
      -webkit-filter: blur(150px);
      filter: blur(150px);
      position: absolute;
      left: 50%;
      width: 40vw;
      height: 40vh;
      transform: translate(-50%);
      will-change: opacity, width, height;
    }
  }
}
</style>
