export default function bestProductCard(props) {
    return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-4">
              <div class="ratio ratio-1x1">
                  <img src="${props.img}" class="img-fluid rounded-start">
              </div>
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">${props.name}</h5>
                  <p class="card-text">R$ ${props.price}</p>
                  <p class="card-text">
                      <small class="text-body-secondary">
                          <i class="fa fa-star ${props.rate > 0 ? 'text-primary' : ''}"></i>
                          <i class="fa fa-star ${props.rate > 1 ? 'text-primary' : ''}"></i>
                          <i class="fa fa-star ${props.rate > 2 ? 'text-primary' : ''}"></i>
                          <i class="fa fa-star ${props.rate > 3 ? 'text-primary' : ''}"></i>
                          <i class="fa fa-star ${props.rate > 4 ? 'text-primary' : ''}"></i>
                      </small>
                  </p>
              </div>
          </div>
      </div>
    </div>
  `
}