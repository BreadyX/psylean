<template>
  <button class="flat-button" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/buttons' as *;

.flat-button {
  @extend %button;
  padding: 0;

  color: var(--c-button);
  background-color: transparent;
  border-color: transparent;

  font-weight: var(--text-bold);

  &:hover,
  &:focus {
    outline: none;
    color: var(--c-button-hover);
  }

  &:active {
    color: var(--c-button-active);
  }

  &:disabled {
    color: var(--c-text-secondary);
  }
}
</style>
