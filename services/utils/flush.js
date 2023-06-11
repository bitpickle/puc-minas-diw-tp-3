export function flush(tag) {
  const elements = Array.from(document.getElementsByTagName(tag));

  elements.forEach((element) => {
    element.remove();
  })
}