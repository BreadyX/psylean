<template>
  <div v-if="success" class="verify">
    <h1 class="heading">Il tuo account è stato verificato!</h1>
    <colorable-button class="suggested login-btn">
      Esegui il login
    </colorable-button>
  </div>
  <div v-else-if="success === false" class="verify">
    <h1 class="heading">Si è verificato un errore</h1>
    <p>
      L'account che si vuole verificare non esiste oppure non può essere
      verificato.
    </p>
    <p>
      Riprova a creare l'account e usa il link allegato. Se il problema
      persiste, contattare il supporto.
    </p>
  </div>
  <div v-else class="verify">
    <spinner />
  </div>
</template>

<script>
import axios from 'axios';

import Spinner from '@/components/Spinner.vue';
import ColorableButton from '@/components/ColorableButton.vue';

export default {
  components: { ColorableButton, Spinner },
  data() {
    return { success: undefined };
  },
  mounted() {
    if (this.$route.query.u === undefined) {
      this.success = false;
    } else {
      axios
        .post('/api/doctor/verify/' + decodeURIComponent(this.$route.query.u))
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.success = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.verify {
  text-align: center;

  padding: {
    left: var(--space-xs);
    right: var(--space-xs);
  }
  max-width: 560px;

  .login-btn {
    font-size: var(--text-m);
  }
}
</style>
