export default function footer() {
    return `
    <div class="container mt-5">
      <footer class="py-5">
          <div class="row">
              <div class="col-6 col-md-3 mb-3">
                  <h5>Links Úteis</h5>
                  <ul class="nav flex-column">
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Início</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Atendimento ao
                              Cliente</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Rastreio de
                              Pedido</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Trabalhe
                              Conosco</a></li>
                      <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sobre nós</a>
                      </li>
                  </ul>
              </div>

              <div class="col-6 col-md-4 mb-3">
                  <h5>Métodos de Pagamento</h5>
                  <i class="fa fa-cc-visa fs-1"></i>
                  <i class="fa fa-cc-mastercard fs-1"></i>
                  <i class="fa fa-cc-discover fs-1"></i>
                  <i class="fa fa-cc-paypal fs-1"></i>
                  <br>
                  <i class="fa-brands fa-bitcoin fs-1"></i>
                  <i class="fa-brands fa-pix fs-1"></i>

              </div>

              <div class="col-md-4 offset-md-1 mb-3">
                  <h5>Dados do Aluno</h5>
                  <p class="fw-bold">
                      <a>Nome: Péricles Amaral Pires</a>
                  </p>
                  <p class="fw-bold">
                      <a>Matrícula: 00811867</a>
                  </p>
                  <hr>
                  <p>
                      Engenharia de Software - PUC Minas
                  </p>
              </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2023 Péricles Pires, Kaotic. Todos os direitos reservados.</p>
              <ul class="list-unstyled d-flex">
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa fa-twitter"></i></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa fa-instagram"></i></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa fa-whatsapp"></i></a></li>
              </ul>
          </div>
      </footer>
    </div>
  `
}