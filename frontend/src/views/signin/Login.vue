<template>
  <div>
    <field
      v-model="user.username"
      class="form-element"
      placeholder="Email"
      type="email"
      @submit="loginClick(user)"
    />
    <field
      v-model="user.password"
      class="form-element"
      placeholder="Password"
      type="password"
      @submit="loginClick(user)"
    />
    <div class="password-forgot">
      <a @click="resetPassword">Hai dimenticato la password?</a>
    </div>
    <colored-button
      class="submit-btn"
      :disabled="isDisabled"
      @click="loginClick(user)"
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
    ColoredButton,
    Field
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    isDisabled() {
      if (this.user.username.length > 0 && this.user.password.length > 0)
        return false;
      return true;
    }
  },
  methods: {
    loginClick() {
      if (!this.isDisabled) {
        alert(
          `Richiesta di accesso '${this.user.username}:${this.user.password}'`
        );
      }
    },
    resetPassword() {
      alert('Resettando la password');
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin' as *;

.password-forgot {
  width: 100%;
  margin-top: var(--space-xs);

  font-size: var(--text-s);
  text-align: right;

  a {
    @extend .link-secondary;
  }
}
</style>
