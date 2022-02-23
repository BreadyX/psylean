<template>
  <box-icon
    name="loader-alt"
    animation="spin"
    flip="vertical"
    class="spinner"
  ></box-icon>
</template>

<script>
import 'boxicons';
export default {};
</script>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  fill: var(--color-text);
  width: 40px;
  height: 100%;
  margin: var(--space-xs);
}
</style>
