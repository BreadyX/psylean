<template>
  <button
    class="button"
    :class="{
      suggested: suggested,
      destructive: destructive,
      outline: outline,
      flat: flat,
      pill: pill,
      circle: circle
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: () => false
    },
    flat: {
      type: Boolean,
      default: () => false
    },
    pill: {
      type: Boolean,
      default: () => false
    },
    circle: {
      type: Boolean,
      default: () => false
    },
    suggested: {
      type: Boolean,
      default: () => false
    },
    destructive: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/classes/button';
</style>
