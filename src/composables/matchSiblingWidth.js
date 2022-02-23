import { ref, onMounted } from 'vue';
import { unrefEl } from '@/composables/elementUtils.js';

export default function (parent) {
  const max = ref('');

  onMounted(() => {
    let m = 0;
    let c = unrefEl(parent).firstElementChild;
    while (c) {
      const w = parseFloat(window.getComputedStyle(c).width.slice(0, -2));
      if (m < w) m = w;
      c = c.nextElementSibling;
    }
    max.value = m + 'px';
  });

  return max;
}
