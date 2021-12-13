<template>
  <div class="container topbar">
    <div class="topbar-section left">
      <slot name="left" />
    </div>
    <div class="topbar-section center">
      <slot name="center" />
    </div>
    <div class="topbar-section right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/classes/container' as *;
@use '@/scss/breakpoints' as *;

.topbar {
  position: sticky;

  display: flex;
  flex-flow: row nowrap;
  justify-content: var(--topbar-justify, space-between);
  align-items: var(--topbar-align, stretch);

  @include media('<tablet') {
    flex-flow: column nowrap;

    .topbar-section {
      flex-flow: column nowrap;
    }
  }

  border-radius: 0;
  border: {
    top: none;
    left: none;
    right: none;
  }

  .topbar-section {
    display: flex;
    flex-flow: row nowrap;

    &.left {
      flex: var(--topbar-left-flex, 1);
      order: var(--topbar-left-order, 0);
      justify-content: var(--topbar-left-justify, left);
      align-items: var(--topbar-left-align, center);
    }

    &.center {
      flex: var(--topbar-center-flex, 1);
      order: var(--topbar-center-order, 0);
      justify-content: var(--topbar-center-justify, center);
      align-items: var(--topbar-center-align, center);
    }

    &.right {
      flex: var(--topbar-right-flex, 1);
      order: var(--topbar-right-order, 0);
      justify-content: var(--topbar-right-justify, right);
      align-items: var(--topbar-right-align, center);
    }
  }
}
</style>
