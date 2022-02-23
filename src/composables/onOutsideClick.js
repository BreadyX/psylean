import { unref, onMounted, onUnmounted } from 'vue';
import { unrefEl } from '@/composables/elementUtils';

export function onOutsideClick(target, visibility, exclude, handler) {
  target = unrefEl(target);
  const f = (e) => {
    let clickOnExcluded = false;
    exclude.forEach((el) => {
      el = unrefEl(el);
      if (!clickOnExcluded) clickOnExcluded = el.contains(e.target);
    });

    if (!target.contains(e.target) && unref(visibility) && !clickOnExcluded)
      handler();
  };

  onMounted(() => {
    document.addEventListener('click', f);
  });

  onUnmounted(() => {
    document.removeEventListener('click', f);
  });
}
