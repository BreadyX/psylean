<template>
  <div ref="switcher" class="view-switcher">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :class="{ selected: item == modelValue }"
      :style="{ minWidth: maxWidth }"
      :tabindex="item == modelValue ? '-1' : '0'"
      @click="$emit('update:modelValue', item)"
      @keyup.enter="updateIfFocused($event, item)"
    >
      <div class="content">
        <slot :item="item">
          <span>{{ item }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import matchSiblingWidth from '@/composables/matchSiblingWidth.js';

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    initial: {
      type: Number,
      default: () => 0
    },
    modelValue: {
      type: String,
      default: () => ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const switcher = ref(null);
    const maxWidth = matchSiblingWidth(switcher);

    const updateIfFocused = (event, item) => {
      if (document.hasFocus(event.target)) emit('update:modelValue', item);
    };

    onMounted(() => {
      emit('update:modelValue', props.items[props.initial]);
    });

    return { switcher, maxWidth, updateIfFocused };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/color' as *;

.view-switcher {
  .item {
    display: inline-flex;
    align-items: center;

    cursor: pointer;

    transition-duration: var(--transition-duration-faster);

    .content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: var(--space-xxs) var(--space-xs);
    }

    &:hover {
      background-color: var(--color-entry-hover);
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0px 1px var(--accent);
    }

    &:active,
    &.selected {
      background-color: var(--color-entry);
    }
  }

  .item::before,
  .item:last-child::after {
    content: '';
    display: inline-block;
    background-color: var(--color-border);
    width: 1px;
    height: 1em;
  }

  .item.selected::before,
  .item.selected::after,
  .item.selected + .item::before {
    content: '';
    background-color: transparent;
  }
}
</style>
