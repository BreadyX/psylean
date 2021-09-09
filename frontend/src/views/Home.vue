<template>
  <div class="home">
    <topbar>
      <template #left>
        <logo :shadow="false" :size="45" />
        <span>Psylean</span>
      </template>
      <template #center>
        <div class="nav">
          <router-link
            class="nav__entry"
            :class="{ active: isSection(sections.home) }"
            to="/about/home"
            >Home</router-link
          >
          <router-link
            class="nav__entry"
            :class="{ active: isSection(sections.functions) }"
            to="/about/functions"
            >Funzionalità</router-link
          >
          <router-link
            class="nav__entry"
            :class="{ active: isSection(sections.plans) }"
            to="/about/plans"
            >Piani</router-link
          >
        </div>
      </template>
      <template #right>
        <div class="separator" />
        <div class="signin">
          <div class="login-button">
            <flat-button
              ref="loginButton"
              @click="clickedLogin = !clickedLogin"
            >
              Accedi
            </flat-button>
            <dropdown ref="loginDropdown" :visible="clickedLogin">
              <div class="dropdown__content">
                <flat-button @click="$router.push({ name: 'signinGuest' })">
                  Paziente
                </flat-button>
                <flat-button @click="$router.push({ name: 'signinLogin' })">
                  Psicologo
                </flat-button>
              </div>
            </dropdown>
          </div>
          <colored-button @click="$router.push({ name: 'signinSignup' })">
            Iscriviti
          </colored-button>
        </div>
      </template>
    </topbar>

    <div class="content">
      <div v-show="isSection(sections.home)" class="section">
        <h1>Cos'è Psylean?</h1>
        <p>
          Uno strumento che facilità l'organizzazione, l'erogazione e i
          pagamenti di tutti i professionisti della salute mentale
        </p>
      </div>
      <div v-show="isSection(sections.functions)" class="section">
        <div class="subsection">
          <h1>
            I tuoi appuntamenti,<br />
            in un'unica app
          </h1>
          <p>
            Psylean offre la possibilità di organizzare il tuo lavoro attraversi
            l'utilizzo di un calendario semplice e intuitivo
          </p>
        </div>
        <div class="subsection">
          <h1>I tuoi incontri direttamente online</h1>
          <p>
            Appositamente create per professionisti della salute mentale,
            Psylean consente di erogare sedute e incontri tramite un sistema di
            video-calling direttamente integrato
          </p>
        </div>
        <div class="subsection">
          <h1>Pagamenti facili e immediati</h1>
          <p>
            Di addio a bonifici e contanti.<br />
            Con Psylean i clienti possono pagare direttamente online
          </p>
        </div>
      </div>
      <div v-show="isSection(sections.plans)" class="section">
        <h1>Scegli il tuo piano</h1>
        <p>...</p>
      </div>
    </div>
    <div class="footer">Footer</div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useOutsideClick } from '@/composables/useOutsideClick';

import Topbar from '@/components/containers/Topbar.vue';
import Logo from '@/components/graphics/Logo.vue';
import FlatButton from '@/components/buttons/FlatButton.vue';
import Dropdown from '@/components/containers/Dropdown.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Topbar,
    Logo,
    FlatButton,
    Dropdown,
    ColoredButton
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const loginDropdown = ref(null);
    const loginButton = ref(null);
    let clickedLogin = ref(false);
    let rightFlex = ref('0');
    let centerJustify = ref('center');

    const sections = {
      home: 'home',
      functions: 'functions',
      plans: 'plans'
    };
    let section = ref(sections.home);

    const isSection = (s) => {
      return section.value === s;
    };
    const sectionValidator = (newVal) => {
      if (newVal === '' || newVal === undefined) section.value = 'home';
      else if (!Object.values(sections).includes(newVal))
        router.push({ name: '404' });
      else section.value = newVal;
    };
    sectionValidator(route.params.section);
    watch(() => route.params.section, sectionValidator);

    useOutsideClick(loginDropdown, clickedLogin, [loginButton], () => {
      clickedLogin.value = !clickedLogin.value;
    });

    return {
      loginDropdown,
      loginButton,
      clickedLogin,
      section,
      sections,
      centerJustify,
      rightFlex,
      isSection
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  .topbar {
    position: sticky;

    @include media('|<250px') {
      position: static;
    }

    @include media('>tablet') {
      --topbar-center-justify: right;
      --topbar-right-flex: 0;
    }

    @include media('<tablet') {
      --topbar-direction: column;
      --topbar-align: stretch;
      --topbar-left-padding: var(--space-xs) var(--space-xs) 0 var(--space-xs);
      --topbar-center-padding: 0 var(--space-xs) 0 var(--space-xs);
      --topbar-right-padding: 0 var(--space-xs) var(--space-xs) var(--space-xs);
    }

    span {
      font-size: var(--text-m);
      margin: 0 0 0 var(--space-xs);

      @include media('<tablet') {
        margin: var(--space-xxs) 0 0 0;
      }
    }

    .nav {
      @include media('<tablet') {
        margin: var(--space-xs) 0 0 0;
      }

      .nav__entry {
        color: var(--c-text);
        text-decoration: none;
        transition-duration: var(--transition-speed);

        &.active {
          font-weight: var(--text-bold);
          color: #{$accent};
          cursor: default;
        }

        &:hover {
          color: #{accent};
        }
      }

      .nav__entry + .nav__entry {
        margin-left: var(--space-s);
      }
    }

    .separator {
      display: inline-block;
      background-color: var(--c-border);

      padding: 0;

      width: 1px;
      height: 1.8em;

      margin: 0 0 0 var(--space-s);

      @include media('<tablet') {
        margin: var(--space-s) 0;
        height: 1px;
        width: 100%;
      }
    }

    .signin {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      @include media('<tablet') {
        margin-bottom: var(--space-xxs);
      }

      .login-button {
        position: relative;
        margin: 0;

        @include media('<tablet') {
          margin-right: var(--space-s);
        }

        .dropdown {
          position: absolute;
          right: -25%;
          padding: var(--space-xxs);

          .dropdown__content {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
          }
        }
      }
    }
  }

  .content {
    padding: var(--space-m) var(--space-l);

    @include media('<tablet') {
      padding: var(--space-m) var(--space-s);
    }

    .section,
    .subsection {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      text-align: center;

      & > h1 {
        font-size: var(--text-xxl);
        text-transform: uppercase;
      }

      & > p {
        font-size: var(--text-m);
      }
    }

    .section {
      min-height: 500px;
    }

    .subsection {
      min-height: 300px;
    }

    .subsection + .subsection {
      margin-top: var(--space-xxxl);
    }
  }

  .footer {
    background-color: var(--c-bg-inverse);
    color: var(--c-text-inverse);
    padding: var(--space-m);
  }
}
</style>
