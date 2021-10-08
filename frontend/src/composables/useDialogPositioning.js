import { unrefEl } from '@/composables/elementUtils';

function shouldBeOnTop(boundPositioned) {
  return boundPositioned.bottom > window.innerHeight;
}

export function useVertical(target, positioned, margin = 0, windowPadding = 0) {
  const bound = unrefEl(target).getBoundingClientRect();
  const boundPositioned = unrefEl(positioned).getBoundingClientRect();

  let top = 'auto';
  let bottom = 'auto';
  let maxHeight = 'none';

  if (shouldBeOnTop(boundPositioned)) {
    maxHeight = bound.top - margin - windowPadding + 'px';
    bottom = bound.height + margin + 'px';
  } else {
    maxHeight = window.innerHeight - bound.top - margin - windowPadding + 'px';
    top = bound.height + margin + 'px';
  }

  return {
    top: top,
    bottom: bottom,
    maxHeight: maxHeight
  };
}
