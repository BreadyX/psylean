<template>
  <h1 class="heading">Registrati su Psylean</h1>
  <form class="register-form" novalidate>
    <list-view :rows="8" class="register-listview" noborder>
      <template #row-0>
        <list-view-title for="email" title="Email" />
        <text-field
          id="email"
          v-model="email"
          type="email"
          placeholder="email"
          required
        />
      </template>
      <template #row-1>
        <list-view-title
          for="password"
          title="Password"
          subtitle="Minimo 8 caratteri"
          required
        />
        <text-field id="password" placeholder="password" type="password" />
      </template>
      <template #row-2>
        <list-view-title for="password2" title="Ripeti password" required />
        <text-field id="password2" placeholder="password" type="password" />
      </template>
      <template #row-3>
        <list-view-title for="name" title="Nome" subtitle="Nome e cognome" />
        <text-field id="name" placeholder="nome" required />
      </template>
      <template #row-4>
        <list-view-title for="job" title="Professione" />
        <combobox id="job" required>
          <option value="psichiatra">Psichiatra</option>
          <option value="psicologo">Psicologo</option>
        </combobox>
      </template>
      <template #row-5>
        <list-view-title for="region" title="Regione" />
        <combobox id="region" required>
          <option value="abruzzo">Abruzzo</option>
          <option value="basilicata">Basilicata</option>
          <option value="calabria">Calabria</option>
          <option value="campania">Campania</option>
          <option value="emilia-romagna">Emilia-Romagna</option>
          <option value="friuli-venezia giulia">Friuli-Venezia Giulia</option>
          <option value="lazio">Lazio</option>
          <option value="liguria">Liguria</option>
          <option value="lombardia">Lombardia</option>
          <option value="marche">Marche</option>
          <option value="molise">Molise</option>
          <option value="piemonte">Piemonte</option>
          <option value="puglia">Puglia</option>
          <option value="sardegna">Sardegna</option>
          <option value="sicilia">Sicilia</option>
          <option value="toscana">Toscana</option>
          <option value="trentino-alto adige">Trentino-Alto Adige</option>
          <option value="umbria">Umbria</option>
          <option value="valle d'aosta">Valle d'Aosta</option>
          <option value="veneto">Veneto</option>
        </combobox>
      </template>
      <template #row-6>
        <list-view-title for="registerNumber" title="Numero Albo" />
        <text-field id="registerNumber" placeholder="numero albo" required />
      </template>
      <template #row-7>
        <colorable-button suggested class="submit" type="submit">
          Registrati
        </colorable-button>
      </template>
    </list-view>
  </form>
</template>

<script>
import ListView from '@/components/ListView.vue';
import ListViewTitle from '@/components/ListViewTitle.vue';
import TextField from '@/components/TextField.vue';
import Combobox from '@/components/Combobox.vue';
import ColorableButton from '@/components/ColorableButton.vue';

export default {
  components: { ListView, ListViewTitle, Combobox, TextField, ColorableButton },
  data() {
    return {
      email: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/breakpoints' as *;

.register-form {
  width: 75%;
  max-width: 450px;
  min-width: fit-content;

  @include media('<phone') {
    width: auto;
    max-width: none;
    min-width: 0;
  }

  .register-listview {
    --listview-justify: space-between;
    margin: 0;

    .submit {
      width: 100%;
    }
  }
}
</style>
