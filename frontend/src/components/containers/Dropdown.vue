<template>
  <div :aria-hidden="!visible" class="dropdown" :class="{ visible: visible }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/containers' as *;

.dropdown {
  @include container(dropdown);
  border-radius: var(--radius-element);
  padding: var(--space-xs) var(--space-xs);
  display: none;

  &.visible {
    display: block;
    position: absolute;
    z-index: 1;
  }
}
</style>
