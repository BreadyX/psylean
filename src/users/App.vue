<template>
  <div class="users-page">
    <logo class="users-logo" :shadow="false" />
    <router-view />
  </div>
</template>

<script>
import { toRef } from 'vue';
import { useRoute } from 'vue-router';

import useDynamicTitle from '@/composables/useDynamicTitle';

import Logo from '@/components/Logo.vue';

export default {
  components: {
    Logo
  },
  setup() {
    const route = useRoute();
    useDynamicTitle(toRef(route, 'fullPath'), route);
  }
};
</script>

<style lang="scss">
@use '@/scss/global' as *;
@use '@/scss/breakpoints' as *;

.users-page {
  width: 100%;

  @include media('portrait') {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  padding: {
    top: var(--space-m);
    bottom: var(--space-m);
  }

  .users-logo {
    margin-top: var(--space-l);
  }

  h1.heading {
    text-align: center;
    margin: {
      top: var(--space-xxs);
      bottom: var(--space-m);
    }
  }
}
</style>
