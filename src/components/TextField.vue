<template>
  <input
    class="input"
    :class="{ validatable: validatable }"
    :value="modelValue"
    :type="type"
    @input="onInput($event)"
    @keydown.enter.prevent="say('enter')"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text',
      validator(val) {
        return ['text', 'password', 'email', 'url'].includes(val);
      }
    }
    //validatable: {
    //  type: Boolean,
    //  default: () => false
    //}
  },
  emits: {
    'update:modelValue': null
  },
  data() {
    return {
      validatable: false
    };
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value);
      this.validatable = true;
      e.target.checkValidity();
    },
    say(s) {
      console.log(s);
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/classes/input' as *;
</style>
