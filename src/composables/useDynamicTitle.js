import { watch } from 'vue';

export default function (source, route) {
  watch(
    source,
    () => {
      document.title =
        route.meta.title === undefined
          ? 'Psylean'
          : `${route.meta.title} - Psylean`;
    },
    { immediate: true }
  );
}
