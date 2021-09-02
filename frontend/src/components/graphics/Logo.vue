<template>
  <div class="logo">
    <router-link :to="{ name: 'home' }">
      <img
        :class="{ shadow: shadow }"
        src="@/assets/logo.svg"
        :width="size"
        :height="size"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    redirect: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: Number,
      default: () => 80
    },
    shadow: {
      type: Boolean,
      default: () => true
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    display: block;

    &.shadow {
      filter: drop-shadow(
        0 0 var(--logo-shadow-size, 5px)
          var(--logo-shadow-color, var(--c-shadow-on-bg))
      );
    }
  }
}
</style>
