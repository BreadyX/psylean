<template>
  <a :href="home ? '/' : undefined">
    <img
      class="logo"
      :class="{ shadow: shadow }"
      src="/static/logo.svg"
      :width="size"
      :height="size"
    />
  </a>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: Number,
      default: () => 80
    },
    shadow: {
      type: Boolean,
      default: () => true
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  display: block;

  &.shadow {
    filter: drop-shadow(0 0 var(--drop-shadow-far) var(--color-shadow));
  }
}
</style>
