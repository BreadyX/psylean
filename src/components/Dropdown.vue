<template>
  <div
    ref="dropdown"
    class="container dropdown"
    :class="{
      visible: visible,
      center: !outFromV && !outFromH,
      left: outFromH === 'left',
      right: outFromH === 'right',
      top: outFromV === 'top',
      bottom: outFromV === 'bottom'
    }"
  >
    <slot />
  </div>
</template>

<script>
import { ref, toRef } from 'vue';
import useDialogPositioning from '@/composables/dialogPositioning.js';

export default {
  props: {
    visible: {
      type: Boolean,
      default: () => false
    }
  },
  setup(props) {
    const dropdown = ref(null);

    const { outFromV, outFromH } = useDialogPositioning(
      toRef(props, 'visible'),
      dropdown
    );

    return { dropdown, outFromV, outFromH };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/classes/container' as *;

.dropdown {
  display: none;

  border-radius: var(--border-radius-element);

  padding: var(--space-xs) var(--space-xs);
  margin-top: var(--space-xxxs);
  margin-bottom: var(--space-xxxs);

  box-shadow: 0 0 var(--box-shadow-far) var(--color-shadow);

  overflow: auto;

  &.center {
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  &.top {
    bottom: 100%;
  }

  &.bottom {
    top: 0;
  }

  &.visible {
    display: block;
    position: absolute;
    z-index: 1;
  }
}
</style>
