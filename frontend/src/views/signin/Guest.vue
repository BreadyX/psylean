<template>
  <div>
    <field
      v-model="guestCode"
      placeholder="Codice di accesso"
      @submit="codeSubmit"
    />
    <colored-button
      class="submit-btn"
      :disabled="isDisabled"
      @click="loginGuest(guestCode)"
    >
      Accedi
    </colored-button>
  </div>
</template>

<script>
import Field from '@/components/input/Field.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Field,
    ColoredButton
  },
  data() {
    return { guestCode: '' };
  },
  computed: {
    isDisabled() {
      if (this.guestCode.length > 0) return false;
      return true;
    }
  },
  methods: {
    codeSubmit(code) {
      if (this.isDisabled === false) this.loginGuest(code);
    },
    loginGuest(code) {
      alert("Richiesta di accesso con codice '" + code + "'");
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin' as *;
</style>
