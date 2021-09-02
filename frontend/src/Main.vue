<template>
  <div>
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

:root {
  font-weight: var(--text-normal);
}

body,
html {
  margin: 0;
  padding: 0;
  font-size: 100%;

  color: var(--c-text);
  background-color: var(--c-bg);
}
</style>
