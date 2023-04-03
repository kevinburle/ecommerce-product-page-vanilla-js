function getByDataSet(dataAttribute, value) {
  const element = document.querySelector(
    `[data-${dataAttribute} = "${value}"]`
  );
  if(element) return element
  throw new Error("no such element selected");
}

export default getByDataSet