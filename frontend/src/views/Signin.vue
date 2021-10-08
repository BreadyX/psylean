<template>
  <div class="signin">
    <div />
    <div>
      <logo redirect shadow :size="80" />
      <h1>Entra in Psylean</h1>
      <floating-dialog>
        <router-view></router-view>
      </floating-dialog>
      <div class="switcher">
        <p>
          Sei un paziente? Inserisci il
          <router-link :to="{ name: 'signinGuest' }"
            >codice di accesso</router-link
          >.
        </p>
        <p>
          Sei uno psicologo?
          <router-link :to="{ name: 'signinLogin' }">Accedi</router-link> oppure
          <router-link :to="{ name: 'signinSignup' }">registrati</router-link>.
        </p>
      </div>
      <div class="footer">
        <router-link to="/terms">Termini e condizioni</router-link>
        <router-link to="/privacy">Privacy</router-link>
        <router-link to="/support">Supporto</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/graphics/Logo.vue';
import FloatingDialog from '@/components/containers/FloatingDialog.vue';

export default {
  components: {
    Logo,
    FloatingDialog
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin' as *;

.signin {
  --floating-dialog-shadow-color: var(--c-shadow-on-blue);
  --logo-shadow-color: var(--c-shadow-on-blue);

  & > div:nth-child(1) {
    background-image: var(--c-sky-gradient);
    background-repeat: no-repeat;
    background-attachment: fixed;

    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;

    .logo {
      margin: var(--space-xl) auto;
    }

    h1 {
      margin: 0 auto var(--space-s) auto;
      font-size: var(--text-xl);
      font-weight: var(--text-light);
    }

    .floating-dialog {
      display: flex;
      flex-direction: column;

      margin-bottom: var(--space-m);

      width: 340px;
    }

    .switcher {
      font-size: var(--text-s);
      margin: 0 auto var(--space-xl) auto;

      a {
        @extend .link;
      }

      p {
        margin: 0;
      }
    }

    .footer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: stretch;

      width: 250px;
      font-size: var(--text-xs);
      margin: 0 auto var(--space-l) auto;

      a {
        @extend .link-secondary;
      }
    }
  }
}
</style>
