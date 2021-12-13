<template>
  <div class="container card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/classes/container' as *;

.card {
  margin: var(--space-s);
  padding: var(--space-s);

  overflow: scroll;
}
</style>
