import apiService from "../../services/api.service.js";
const components = ['layout/navbar', 'layout/footer', 'cards/productCard', 'cards/bestProductCard', 'utils/cart'];

const render = async () => {
  for (const componentName of components) {
    const { default: component } = await import('../../components/' + componentName + '.js');

    const elements = Array.from(document.getElementsByTagName(component.name));
    elements.forEach((element) => {
      const props = Array.from(element.attributes).reduce((acc, current) => {
        acc[current.name] = current.value;
        return acc;
      }, {});
      element.insertAdjacentHTML('afterend', component(props));
      element.remove();
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

const bestProductJsonToHtml = (products) => {
  return products.slice(0, 3).reduce((acc, product) => {
    return acc + `
      <bestProductCard img="${product.image}"
      id="${product.id}"
      rate="${Math.round(product.rating.rate)}"
      name="${product.title}" price="${product.price}"></bestProductCard>
      `
  }, "");
}


const onLoad = async () => {
  const minPrice = document.getElementById('min-price-filter').value || 0;
  const maxPrice = document.getElementById('max-price-filter').value || 0;
  const perPage = document.getElementById('per-page-filter').value || 12;
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  const page = new URLSearchParams(window.location.search).get('page') || 1;


  const productsPromise = apiService.getProducts(page, perPage);
  const bestProductsPromise = apiService.getProducts(randomNumber, 3);

  let [{ products }, { products: bestProducts }] = await Promise.all([productsPromise, bestProductsPromise]);

  products = products.filter((p) => {
    if (minPrice && p.price < minPrice) return false;
    if (maxPrice && p.price > maxPrice) return false;
    return true;
  });

  document.getElementById('products-cards').innerHTML = productJsonToHtml(products);
  document.getElementById('best-products').innerHTML = bestProductJsonToHtml(bestProducts);

  render();
}


window.onload = onLoad;