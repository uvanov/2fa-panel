export function prepareGridLayout(layout) {
  if (typeof layout === 'number') {
    return `repeat(${layout}, 1fr)`;
  } else {
    return layout.join(' ');
  }
}