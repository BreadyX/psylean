<template>
  <button class="colored-button" :disabled="disabled">
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

.colored-button {
  @extend %button;

  background-color: var(--c-button);
  color: var(--c-button-text);
  border-color: transparent;

  &:hover {
    background-color: var(--c-button-hover);
    box-shadow: 0 0 3px
      var(--colored-button-shadow-color, var(--c-shadow-on-bg));
  }

  &:active {
    background-color: var(--c-button-active);
    box-shadow: 0 0 6px
      var(--colored-button-shadow-color, var(--c-shadow-on-bg));
  }

  &:disabled {
    color: var(--c-text-secondary);
    background-color: var(--c-button-disabled);
    box-shadow: none;
  }
}
</style>
