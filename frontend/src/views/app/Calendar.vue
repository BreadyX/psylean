<template>
  <div class="calendar">
    <div class="nav">
      <span>{{ display }}</span>
      <div class="button-group">
        <flat-button @click="page--">&lt;</flat-button>
        <flat-button @click="page++">&gt;</flat-button>
      </div>
      <div class="flex-spacer" />
      <flat-button>Oggi</flat-button>
    </div>
    <router-view>
      <template #default="{ Component }">
        <component
          :is="Component"
          v-model="display"
          :page="page"
          @update:page="page = $event"
        />
      </template>
    </router-view>
  </div>
</template>

<script>
import { ref } from 'vue';

import FlatButton from '@/components/buttons/FlatButton.vue';

export default {
  components: {
    FlatButton
  },
  setup() {
    const display = ref('');
    const page = ref(0);

    return {
      display,
      page
    };
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  flex: 1;

  padding: var(--space-s);
  display: flex;
  flex-flow: column nowrap;

  .nav {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;

    margin-bottom: var(--space-xs);

    span:nth-child(1) {
      font-size: var(--text-xxl);
    }

    .button-group {
      margin: 0 var(--space-s);

      .flat-button + .flat-button {
        margin-left: var(--space-s);
      }
    }

    .flat-button {
      margin: var(--space-xs) 0;
    }
  }
}

.flex-spacer {
  flex: 1;
}
</style>
