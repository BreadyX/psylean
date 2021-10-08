<template>
  <div class="floating-dialog">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/components/containers' as *;

.floating-dialog {
  @include container(floating-dialog);
  border-radius: var(--radius-dialog);
  padding: var(--space-l);
}
</style>
