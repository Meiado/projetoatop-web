window.onload = async () => {
    await validaSessaoAdmin();
} 

const adminHome = () => {
    const home = document.querySelector('#home');
    home.innerHTML = `<div class="row align-items-center text-white">
        <!-- START THE CONTENT FOR THE INTRO  -->
        <div class="col-md-6 intros text-start">
        <h1 class="display-2">
            <span class="display-2--intro">Bem-vindo, administrador.</span>
            <span class="display-2--description lh-base">
            Ao lado estão as funcionalidades disponíveis. 
            </span>
        </h1>
        </div>
        <!-- START THE CONTENT FOR THE VIDEO -->
        <div id="funcionalidades" class="col-md-6 intros text-end">
        <div class="list-group" style="gap: 3px; text-align: center;">
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="gerenciarTipos()">Gerenciar Tipos</a>
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="gerenciarOrgao()">Gerenciar Órgãos Públicos</a>
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="visualizarDenuncias()">Visualizar Denúncias</a>
            <a class="list-group-item list-group-item-action disabled" aria-disabled="true" href="#visualizarDenuncias">Cadastrar administrador</a>
        </div>
        </div>
  </div>
  `;
}

const preparaTabela = () => {
    const home = document.querySelector('#home');
    home.innerHTML = `    
        <table class="table table-secondary table-hover" id="table"></table>
        <section id="formSection"></section>
        <div id="mensagemDiv" style="display:flex; justify-content:center; margin: 10px;">
            <p id="mensagem" style="color: white;"></p>
        </div>
        <section id="buttonSection"></section>
    `;
}

const gerenciarTipos = async () => {
    preparaTabela();
    await tipoControl();
}

const gerenciarOrgao = async () => {
    preparaTabela();
    await orgaoControl();
}

const visualizarDenuncias = async () => {
    preparaTabela();
    await denunciaControl();
}