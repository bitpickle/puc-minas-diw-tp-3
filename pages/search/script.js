import apiService from "../../services/api.service.js";

const components = ['layout/navbar', 'layout/footer', 'cards/details', 'cards/productCard'];

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
      <productCard img="${product.image}"
      id="${product.id}"
      name="${product.title}" price="${product.price}"></productCard>
      `
  }, "");
}


window.onload = async () => {
  const query = new URLSearchParams(window.location.search).get('query');
  const products = await apiService.searchProduct(query);

  document.getElementById('products-cards').innerHTML = productJsonToHtml(products)

  render();
}