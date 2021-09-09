<template>
  <div class="topbar">
    <div class="t-left">
      <slot name="left" />
    </div>
    <div class="t-center">
      <slot name="center" />
    </div>
    <div class="t-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '@/scss/components/containers' as *;

.topbar {
  @include container(topbar);
  border: {
    top: none;
    left: none;
    right: none;
  }

  display: flex;
  flex-flow: var(--topbar-direction, row) nowrap;
  justify-content: var(--justify, space-between);
  align-items: var(--topbar-align, stretch);

  padding: 0;

  [class*='t-'] {
    display: flex;
    flex-flow: var(--topbar-direction, row) nowrap;
  }

  .t-left {
    flex: var(--topbar-left-flex, 1);
    justify-content: var(--topbar-left-justify, left);
    align-items: var(--topbar-left-align, center);
    padding: var(
      --topbar-left-padding,
      var(--space-xs) 0 var(--space-xs) var(--space-s)
    );
  }

  .t-center {
    flex: var(--topbar-center-flex, 1);
    justify-content: var(--topbar-center-justify, center);
    align-items: var(--topbar-center-align, center);
    padding: var(--topbar-center-padding, var(--space-xs) 0);
  }

  .t-right {
    flex: var(--topbar-right-flex, 1);
    justify-content: var(--topbar-right-justify, right);
    align-items: var(--topbar-right-align, center);
    padding: var(
      --topbar-right-padding,
      var(--space-xs) var(--space-s) var(--space-xs) 0
    );
  }
}
</style>
