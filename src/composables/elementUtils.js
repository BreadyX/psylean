export function unrefEl(el) {
  if (!el.value) {
    console.warn('unrefEl: should pass ref, not plain object!');
    return null;
  }

  if (el.value.$) return el.value.$el;
  else return el.value;
}

export function getNthChild(el, n) {
  return unrefEl(el).children[n];
}
