<template>
  <div class="user-profile-pic">
    <div :style="{ width: size + 'px', height: size + 'px' }" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: () => 256
    }
  }
};
</script>

<style lang="scss" scoped>
.user-profile-pic {
  & > div {
    display: block;
    background: var(--user-profile-src) no-repeat;
    cursor: pointer;
  }
}
</style>
