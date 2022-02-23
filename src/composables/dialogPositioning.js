import { ref, watch, nextTick } from 'vue';
import { unrefEl } from '@/composables/elementUtils';

export function positionHorizontally(elem) {
  const bound = unrefEl(elem).getBoundingClientRect();

  if (bound.left < 0) return 'left';
  else if (bound.right > window.innerWidth) return 'right';
  return '';
}

export function positionVeritcally(elem) {
  const bound = unrefEl(elem).getBoundingClientRect();

  if (bound.bottom > window.innerHeight) return 'top';
  else if (bound.top < 0) return 'bottom';
  return '';
}

export function clipHeight(elem, margin = '2px') {
  const bound = unrefEl(elem).getBoundingClientRect();
  const style = window.getComputedStyle(unrefEl(elem));

  let h;
  if (bound.top < 0) {
    h = `calc(${bound.bottom}px - ${style.borderTopWidth} - ${margin})`;
  } else if (bound.bottom > window.innerHeight) {
    h = `calc(${window.innerHeight - bound.top}px - ${
      style.borderBottomWidth
    } - ${margin})`;
  }
  return h;
}

export function clipWidth(elem, margin = '2px') {
  const bound = unrefEl(elem).getBoundingClientRect();
  const style = window.getComputedStyle(unrefEl(elem));

  let w;
  if (bound.left < 0) {
    w = `calc(${bound.right}px - ${style.borderRightWidth} - ${margin})`;
  } else if (bound.right > window.innerWidth) {
    w = `calc(${window.innerWidth - bound.left}px - ${
      style.borderRightWidth
    } - ${margin})`;
  }
  return w;
}

export default function (visible, elem) {
  const outFromV = ref('');
  const outFromH = ref('');

  watch(
    visible,
    async (vis) => {
      if (!vis) {
        outFromV.value = '';
        outFromH.value = '';
        elem.value.style.maxWidth = 'none';
        elem.value.style.maxHeight = 'none';
      } else {
        outFromV.value = positionVeritcally(elem);
        outFromH.value = positionHorizontally(elem);
        await nextTick();
        elem.value.style.maxWidth = clipWidth(elem);
        elem.value.style.maxHeight = clipHeight(elem);
      }
    },
    { flush: 'post' }
  );

  return { outFromH, outFromV };
}
