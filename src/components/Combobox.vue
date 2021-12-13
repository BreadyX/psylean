<template>
  <div class="combobox-div">
    <select
      ref="select"
      :autofocus="$attrs.autofocus"
      :disabled="$attrs.disbled"
      :form="$attrs.form"
      :multiple="$attrs.multiple"
      :name="$attrs.name"
      :required="$attrs.required"
      :size="$attrs.size"
      class="input combobox"
      @change="updateModel($event.target.value)"
    >
      <slot />
    </select>
    <box-icon name="chevron-down" class="chevron"></box-icon>
  </div>
</template>

<script>
import 'boxicons';

export default {
  props: {
    modelValue: {
      type: String,
      default: () => ''
    }
  },
  emits: ['update:modelValue'],
  mounted() {
    this.updateModel(this.$refs.select.value);
  },
  methods: {
    updateModel(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/classes/input';

.combobox-div {
  display: inline-block;
  position: relative;
}

.combobox {
  cursor: pointer;
  padding-right: var(--space-xl);
  padding-left: var(--space-xxxs);
}

.chevron {
  position: absolute;
  right: 2px;
  height: 100%;
  pointer-events: none;
  fill: var(--color-text);
  z-index: 1;
}
</style>
