const baseUrl = 'https://diwserver.vps.webdock.cloud';
export const getProducts = async (page = 1, limit = 10, query = '') => {
  const url = new URL(`${baseUrl}/products`);
  url.search = new URLSearchParams({
    page_items: limit,
    page
  }).toString();

  return await fetch(url).then((response) => response.json());
}

export const getProduct = async (id) => {
  return await fetch(`${baseUrl}/products/${id}`).then((response) => response.json());
}

export const searchProduct = async (query) => {
  const url = new URL(`${baseUrl}/products/search`);
  url.search = new URLSearchParams({
    query
  }).toString();
  return await fetch(url).then((response) => response.json());
}

export default {
  getProducts,
  getProduct,
  searchProduct
}