<template>
  <div class="view-switcher">
    <div class="container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :class="{ selected: item == modelValue }"
        :style="{ minWidth: minWidth }"
        :tabindex="item == modelValue ? '-1' : '0'"
        @click="$emit('update:modelValue', item)"
        @keyup.enter="updateIfFocused($event, item)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      minWidth: 'none'
    };
  },
  mounted() {
    this.$emit('update:modelValue', this.items[this.initial]);

    let max = 0;
    this.$props.items.forEach((e) => {
      max = e.length > max ? e.length : max;
    });
    this.minWidth = max + 'ch';
  },
  methods: {
    updateIfFocused(event, item) {
      if (document.hasFocus(event.target)) {
        this.$emit('update:modelValue', item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.view-switcher {
  display: block;

  .container {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    .item {
      $bg-color: tint(get-from-map($light, -1), 50%);

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      transition-duration: var(--transition-speed-faster);

      &:hover,
      &:focus,
      &.selected {
        outline: none;
        background-color: #{$bg-color};
      }

      span {
        flex: 1;
        text-align: center;
        padding: var(--space-xxs) var(--space-xs);
      }

      &::before,
      &:last-child::after {
        content: '';
        background-color: var(--c-border);
        width: 1px;
        height: 1em;
      }

      &.selected::before,
      &.selected::after {
        content: '';
        background-color: transparent;
      }
    }
  }

  .item.selected + .item::before {
    content: '';
    background-color: transparent;
  }
}
</style>
