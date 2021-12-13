<template>
  <div class="listview-title">
    <div v-if="icon" class="icon">
      <slot name="icon" />
    </div>
    <div class="title">
      <label :for="this.for">
        {{ title }}
      </label>
      <span v-if="subtitle !== ''" class="small">
        {{ subtitle }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    for: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    subtitle: {
      type: String,
      default: () => ''
    },
    icon: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
.listview-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: stretch;

  flex: 1;
  min-width: 50px;

  margin-right: var(--space-xs);

  .icon {
    flex: 0;
    margin-right: var(--space-xxxs);
  }

  .title {
    flex: 1;
    min-width: 0;

    label,
    .small {
      display: block;

      margin: 0;
      padding: 0;

      width: 100%;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .small {
      color: var(--color-text-secondary);
    }
  }
}
</style>
