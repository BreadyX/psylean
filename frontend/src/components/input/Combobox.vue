<template>
  <div class="combobox">
    <div>
      <label v-if="label !== ''" :for="id">{{ label }}</label>
      <select
        :id="id"
        :name="name"
        :disabled="disabled"
        @change="updateModel($event.target.value)"
      >
        <slot />
      </select>
    </div>
  </div>
</template>

<script>
import { v1 as uuid } from 'uuid';

export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    modelValue: {
      type: String,
      default: () => ''
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      id: uuid()
    };
  },
  mounted() {
    this.updateModel(this.$el.value);
  },
  methods: {
    updateModel(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/input' as *;

.combobox {
  display: inline-block;

  & > div {
    display: flex;
    flex-flow: column nowrap;

    label {
      flex: 0;
      width: 100%;
      margin : {
        left: 2px;
        bottom: 2px;
      }
    }

    select {
      @include input();

      appearance: none;
      font-size: inherit;
      margin: 0;
      padding: {
        right: var(--space-l);
        left: var(--space-xxxs);
      }
      background-image: var(--dropdown-arrow-src);
      background-size: 0.8em 0.8em;
      background-repeat: no-repeat;
      background-position: {
        x: 95%;
        y: 50%;
      }
    }
  }
}
</style>
