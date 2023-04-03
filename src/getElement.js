function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no such element selected");
}

export default getElement;
