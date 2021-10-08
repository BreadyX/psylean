<template>
  <div>
    <field
      v-model="user.email"
      class="form-element"
      placeholder="Email"
      type="email"
    />
    <field
      v-model="user.password"
      class="form-element"
      placeholder="Password"
      type="password"
    />
    <hr class="separator" />
    <field v-model="user.name" class="form-element" placeholder="Nome" />
    <field v-model="user.surname" class="form-element" placeholder="Cognome" />
    <div class="beside form-element">
      <combobox v-model="user.job" label="Professione">
        <option>Psichiatra</option>
        <option>Psicologo</option>
      </combobox>
      <combobox v-model="user.district" label="Regione">
        <option>Abruzzo</option>
        <option>Basilicata</option>
        <option>Calabria</option>
        <option>Campania</option>
        <option>Emilia-Romagna</option>
        <option>Friuli-Venezia Giulia</option>
        <option>Lazio</option>
        <option>Liguria</option>
        <option>Lombardia</option>
        <option>Marche</option>
        <option>Molise</option>
        <option>Piemonte</option>
        <option>Puglia</option>
        <option>Sardegna</option>
        <option>Sicilia</option>
        <option>Toscana</option>
        <option>Trentino-Alto Adige</option>
        <option>Umbria</option>
        <option>Valle d'Aosta</option>
        <option>Venet</option>
      </combobox>
    </div>
    <field
      v-model="user.number"
      class="form-element"
      placeholder="Numero albo"
    />
    <colored-button
      class="signin-submit-btn"
      :disabled="!canRegister"
      @click="register"
    >
      Registrati
    </colored-button>
  </div>
</template>

<script>
import Field from '@/components/input/Field.vue';
import Combobox from '@/components/input/Combobox.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Field,
    Combobox,
    ColoredButton
  },
  data() {
    return {
      user: {
        name: '',
        surname: '',
        email: '',
        password: '',
        district: '',
        job: '',
        number: ''
      }
    };
  },
  computed: {
    canRegister() {
      for (let v of Object.values(this.user)) if (v === '') return false;
      return true;
    }
  },
  methods: {
    register() {
      alert(
        `Richiesta di iscrizione per ${this.user.email}:${this.user.password}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin' as *;

.separator {
  color: var(--c-border);
  background-color: var(--c-border);
  border-width: 0;
  height: 1px;
  margin: var(--space-m) 0;
}

.beside {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;

  .combobox:nth-child(1) {
    width: 40%;
    margin-right: var(--space-s);
  }

  .combobox:nth-child(2) {
    flex: 1;
  }
}

.form-element + .form-element.beside {
  margin-top: var(--space-s);
}
</style>
