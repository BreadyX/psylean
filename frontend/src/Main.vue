<template>
  <div>
    Benvenuti su Psylean!
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler(to) {
        document.title =
          to.meta.title === undefined
            ? 'Psylean'
            : `${to.meta.title} | Psylean`;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
