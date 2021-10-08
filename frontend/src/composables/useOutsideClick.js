import { onMounted, onUnmounted } from 'vue';
import { unrefEl } from '@/composables/elementUtils';

export function useOutsideClick(target, visibility, exclude, handler) {
  const onOutsideClick = (e) => {
    let tNaked = unrefEl(target);

    let clickOnExcluded = false;
    exclude.forEach((el) => {
      let elNaked = unrefEl(el);

      if (!clickOnExcluded) clickOnExcluded = elNaked.contains(e.target);
    });

    if (!tNaked.contains(e.target) && visibility.value && !clickOnExcluded)
      handler();
  };

  onMounted(() => {
    document.addEventListener('click', onOutsideClick);
  });

  onUnmounted(() => {
    document.removeEventListener('click', onOutsideClick);
  });
}
