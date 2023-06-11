const goToDetails = (id) => {
  // go to /pages/details?id=${id}
  window.location.href = `/details?id=${id}`;
}
export default function productCard(props) {
  return `
    <div class="card col" style="width: 300px;">
        <a href="/pages/details/index.html?id=${props.id}">
          <div class="ratio ratio-1x1">
              <img src="${props.img}" class="card-img-top mt-3 rounded" alt="${props.name}">
          </div>
        </a>
        <div class="card-body mt-2">
            <h5 class="card-title">${props.name}</h5>
            <p class="card-text">R$ ${props.price} <span class="badge bg-success">-8%</span></p>
            <a href="#" class="btn btn-outline-dark">Adicionar ao Carrinho</a>
        </div>
    </div>
  `;
}