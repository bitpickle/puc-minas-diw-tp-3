export default function details(props) {
  console.log(props);
  return `
    <div class="row">
      <div class="col-md-5">
        <div class="main-img">
          <img class="img-fluid" src="${props.img}"
            alt="ProductS">
        </div>
      </div>
      <div class="col-md-7 d-flex justify-content-center flex-column">
        <div class="main-description px-2">
          <h4 class="fw-bold">
            ${props.name}
          </h4>
          <div class="product-title text-bold my-3">
            ${props.description}
          </div>


          <div class="price-area my-4">
            <h4 class="new-price text-bold mb-1">R$ ${props.price}</h4>
          </div>
        </div>

        <div class="delivery-options my-4">
          <p class="fw-bold mb-0"><span><i class="fa-solid fa-filter"></i></span> Categoria</p>
          <p class="text-secondary">Este produto está na categoria ${props.category}</p>
        </div>
        <div class="delivery my-4">
          <p class="fw-bold mb-0"><span><i class="fa-solid fa-truck"></i></span> Entrega em até 5 dias úteis
          </p>
          <p class="text-secondary">Se pedir nas próximas 24h</p>
        </div>



      </div>
    </div>
  `
}