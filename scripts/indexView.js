const loginView = () => {
    let interact = document.querySelector("#interact");
    interact.innerHTML = `<div class="container">
    <div class="row text-center">
      <h1 class="display-3 fw-bold text-capitalize">Acesse</h1>
      <div class="heading-line"></div>
    </div>

    <!-- START THE CTA CONTENT  -->
    <div class="row text-white">
      <div class="col-12 col-lg-6 gradient shadow p-3">
        <div class="cta-info w-100">
          <h4 class="display-4 fw-bold">Portal de Denúncias</h4>
          <p class="lh-lg">
            Faça o Login para acessar a página de denúncias e reportar os
            casos que merecem atenção!
          </p>
          <h3 class="display-3--brief">Qual o próximo passo?</h3>
          <ul class="cta-info__list">
            <li>Login.</li>
            <li>Redirecionamento para a página.</li>
            <li>Cadastrar suas denúncias.</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-6 bg-white shadow p-3">
        <div class="form w-100 pb-2">
          <h4 class="display-3--title mb-5">Login</h4>
          <form action="#" class="row">
            <div class="col-lg-6 col-md mb-3">
              <input type="text" placeholder="CPF" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Senha" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="col-lg-12 mb-3">
              <input type="email" placeholder="Email" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="text-center d-grid mt-1">
              <button type="button" class="btn btn-primary rounded-pill pt-3 pb-3">
                Logar!
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="text-center d-grid mt-3">
          <button type="button" onclick="registerView()" class="btn btn-primary rounded-pill pt-3 pb-3" style="max-width: 50%;  margin: 0 auto;">
            Não possui cadastro? Clique aqui
          </button>
        </div>
      </div>
    </div>
  </div>` ;
}

const registerView = () => {
    let interact = document.querySelector("#interact");
    interact.innerHTML = `<div class="container">
    <div class="row text-center">
      <h1 class="display-3 fw-bold text-capitalize">Cadastre-se</h1>
      <div class="heading-line"></div>
    </div>

    <!-- START THE CTA CONTENT  -->
    <div class="row text-white">
      <div class="col-12 col-lg-6 gradient shadow p-3">
        <div class="cta-info w-100">
          <h4 class="display-4 fw-bold">100% de Segurança de Dados</h4>
          <p class="lh-lg">
            Cadastre-se agora em nossa plataforma para realizar as denúncias em 
            sua região! Fique tranquilo, seus dados estarão seguros e anônimos.
          </p>
          <h3 class="display-3--brief">Qual o próximo passo?</h3>
          <ul class="cta-info__list">
            <li>Fazer o cadastro.</li>
            <li>Logar na tela abaixo.</li>
            <li>Cadastrar suas denúncias.</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-6 bg-white shadow p-3">
        <div class="form w-100 pb-2">
          <h4 class="display-3--title mb-5">Cadastro</h4>
          <form action="#" class="row">
            <div class="col-lg-12 col-md mb-3">
              <input type="text" placeholder="CPF" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Senha" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="col-lg-6 col-md mb-3">
                <input type="text" placeholder="Repita a senha" id="" name="" class="shadow form-control form-control-lg">
              </div>
            <div class="col-lg-12 mb-3">
              <input type="email" placeholder="Email" id="" name="" class="shadow form-control form-control-lg">
            </div>
            <div class="text-center d-grid mt-1">
              <button type="button" class="btn btn-primary rounded-pill pt-3 pb-3">
                Cadastrar!
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="text-center d-grid mt-3">
          <button type="button" onclick="loginView()" class="btn btn-primary rounded-pill pt-3 pb-3" style="max-width: 50%;  margin: 0 auto;">
            Já cadastrado? Clique aqui
          </button>
        </div>
        
      </div>
    </div>
  </div>`;
}