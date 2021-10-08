<template>
  <div class="field">
    <input
      :value="modelValue"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{ error: error }"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('update:error', false)"
      @keyup.enter="$emit('submit', modelValue)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => ''
    },
    modelValue: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => 'text',
      validator(val) {
        return [
          'text',
          'password',
          'email',
          'number',
          'search',
          'tel',
          'url'
        ].includes(val);
      }
    },
    error: {
      type: Boolean,
      default: () => false
    }
  },
  emits: {
    'update:modelValue': null,
    'update:error': null,
    submit(val) {
      if (val.length === 0) return false;
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/input' as *;

.field {
  display: inline-block;

  & > input {
    @include input();

    appearance: none;
    font-size: inherit;
    width: 100%;
  }
}
</style>
