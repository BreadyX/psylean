<template>
  <card class="listview">
    <div
      v-for="(i, index) in Array(rows).keys()"
      :key="index"
      class="listview-row"
      :class="{ bordered: !noborder }"
    >
      <slot :name="'row-' + i" />
    </div>
  </card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: { Card },
  props: {
    rows: {
      type: Number,
      default: () => 1
    },
    noborder: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.listview {
  padding: 0;

  .listview-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: var(--listview-justify, start);
    align-items: stretch;

    padding: {
      left: var(--space-s);
      right: var(--space-s);
      top: var(--space-s);
      bottom: var(--space-s);
    }

    &.bordered {
      border-bottom: solid var(--border-width) var(--color-border);
    }

    &:nth-last-child(1) {
      border-bottom: none;
    }
  }
}
</style>
