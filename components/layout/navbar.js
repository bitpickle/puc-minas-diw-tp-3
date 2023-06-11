export default function navbar(props) {
  return `
    <nav class="py-2 bg-body-tertiary border-bottom">
      <div class="container d-flex flex-wrap">
        <div class="nav me-auto align-items-center">
          Bem vindo, Visitante
        </div>
        <ul class="nav">
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Entrar</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Registrar</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Meu Perfil</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Rastrear Pedido</a></li>
        </ul>
      </div>
    </nav>
    <header class="py-3 mb-4 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
          <span class="fs-4"><img src="../../img/logo.png" width="60px" /></span>
        </a>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Faça sua pesquisa..." aria-label="Recipient's username"
              aria-describedby="button-addon2" id="search-input">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="window.utils.navigate('search', {query: document.getElementById('search-input').value})">Buscar</button>
          </div>
        </form>
        <button class="btn btn-outline-primary mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions">
          <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </header>`;
}