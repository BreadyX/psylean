<template>
  <div class="app">
    <topbar>
      <template #left>
        <logo :shadow="false" :size="35" redirect />
      </template>
      <template #center>
        <view-switcher v-model="view" :items="['Calendario', 'Pazienti']" />
      </template>
      <template #right>
        <user-profile-pic :size="35" />
      </template>
    </topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/containers/Topbar.vue';
import Logo from '@/components/graphics/Logo.vue';
import ViewSwitcher from '@/components/ViewSwitcher';
import UserProfilePic from '@/components/graphics/UserProfilePic.vue';

export default {
  components: {
    Topbar,
    Logo,
    ViewSwitcher,
    UserProfilePic
  },
  data() {
    return {
      view: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  .topbar {
    --topbar-center-padding: 0;
    z-index: 1;
    position: sticky;

    .view-switcher {
      height: 100%;
    }
  }
}
</style>
