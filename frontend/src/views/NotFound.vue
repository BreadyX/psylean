<template>
  <div class="not-found">
    <div />
    <div>
      <logo redirect :width="80" />
      <h1>Ops!</h1>
      <floating-dialog>
        <h2>La pagina non esiste!</h2>
        <p>Verifica di aver digitato l'indirizzo correttamente.</p>
        <colored-button @click="$router.push({ name: 'home' })">
          Torna alla home
        </colored-button>
      </floating-dialog>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/graphics/Logo.vue';
import FloatingDialog from '@/components/containers/FloatingDialog.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Logo,
    FloatingDialog,
    ColoredButton
  }
};
</script>

<style lang="scss" scoped>
.not-found {
  --floating-dialog-shadow-color: var(--c-shadow-on-blue);
  --logo-shadow-color: var(--c-shadow-on-blue);

  & > div:nth-child(1) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: var(--c-sky-gradient);
  }

  & > div:nth-child(2) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    .logo {
      margin: var(--space-xl) auto;
    }

    h1 {
      font-size: var(--text-xl);
      font-weight: var(--text-light);
      margin: 0 auto var(--space-s) auto;
    }

    .floating-dialog {
      width: 340px;
      text-align: center;

      h2 {
        font-size: var(--text-m);
        font-weight: var(--text-normal);
        margin: 0 0 var(--space-xs) 0;
      }

      p {
        font-size: var(--text-s);
        margin: 0;
      }
    }

    .colored-button {
      margin-top: var(--space-l);
      width: 100%;
    }
  }
}
</style>
