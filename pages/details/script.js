import apiService from "../../services/api.service.js";

const components = ['layout/navbar', 'layout/footer', 'cards/details'];

const render = async () => {
  for (const componentName of components) {
    const { default: component } = await import('../../components/' + componentName + '.js');

    const elements = Array.from(document.getElementsByTagName(component.name));
    elements.forEach((element) => {
      element.style.display = 'none';
      const props = Array.from(element.attributes).reduce((acc, current) => {
        acc[current.name] = current.value;
        return acc;
      }, {});
      element.insertAdjacentHTML('afterend', component(props));
    });
  };
}

const productJsonToHtml = (products) => {
  return products.reduce((acc, product) => {
    return acc + `
      <details 
      img="${product.image}"
      description='${product.description}'
      category="${product.category}"
      id="${product.id}"
      name="${product.title}" price="${product.price}"></details>
      `
  }, "");
}


window.onload = async () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const product = await apiService.getProduct(id);

  document.getElementById('details').innerHTML = productJsonToHtml([product])

  render();
}