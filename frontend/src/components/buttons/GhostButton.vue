<template>
  <button class="ghost-button" :disabled="disabled">
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

.ghost-button {
  @extend %button;

  color: var(--c-text);
  background-color: transparent;
  border-color: var(--c-button);

  &:hover {
    color: var(--c-button-text);
    background-color: var(--c-button-hover);
    border-color: transparent;
  }

  &:active {
    background-color: var(--c-button-active);
  }

  &:disabled {
    color: var(--c-text-secondary);
    background-color: var(--c-button-disabled);
    border-color: transparent;
  }
}
</style>
