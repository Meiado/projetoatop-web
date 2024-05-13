const denunciaForm = () => {
    let denunciaSection = document.querySelector("#interact");
    denunciaSection.innerHTML = '';

    const container = criarElemento('div', { class: 'container' });
    let headBanner = criarElemento('div', { class: 'row text-center'});
    headBanner.innerHTML = `
        <h1 class="display-3 fw-bold text-capitalize" style="color: white;">Denúncia</h1>
        <div class="heading-line"></div>
        `;
    container.appendChild(headBanner);

    const painelPrincipal = criarElemento('div', { class: 'row text-white '});
    const painelEsq = criarElemento('div', { class: 'col-12 col-lg-6 gradient shadow p-3' })
    let painelEsqInfo = criarElemento('div', { class: 'cta-info w-100' });
    painelEsqInfo.innerHTML = `
        <h4 class="display-4 fw-bold">Cadastro de Denúncias</h4>
        <p class="lh-lg">
        Cadastre-aqui a sua denúncia e selecione corretamente 
        o departamento responsável. Além disso, forneça as descrições
        e imagem.
        </p>
        <h3 class="display-3--brief">Qual o próximo passo?</h3>
        <ul class="cta-info__list">
        <li>Preencher todos os campos</li>
        <li>Inserir valores válidos</li>
        <li>Confirmar envio</li>
        </ul>
        `;

    painelEsq.appendChild(painelEsqInfo);

    const painelDir = criarElemento('div', { class: 'col-12 col-lg-6 bg-white shadow p-3' });
    const divForm = criarElemento('div', { class: 'form w-100 pb-2' });
    const formHead = criarElemento('h4', { class: 'display-3--title mb-5' }, 'Insira as informações');
    const form = criarElemento('form', { class: 'row', action: '#', id: 'denunciaForm' });
    divForm.appendChild(formHead);
    divForm.appendChild(form);

    const divTitle = criarElemento('div', { class:'col-lg-12 col-md mb-3' });
    const inputTitle = criarInput('text', 'Título', 'titulo', 'titulo', 'shadow form-control form-control-lg');
    divTitle.appendChild(inputTitle);
    form.appendChild(divTitle);

    const divText = criarElemento('div', { class:'col-lg-12 col-md mb-3' });
    const inputText = criarElemento('textarea',  { placeholder: 'Descrição', id: 'descricao', name: 'descricao', class: 'shadow form-control form-control-lg' });
    divText.appendChild(inputText);
    form.appendChild(divText);

    const divUrg = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
    const parUrg = criarElemento('p', { style: 'color: black; text-align: center;' }, 'Urgência' );
    let selUrg = criarElemento('select', { class: 'form-control', id: 'urgenciaSelect', name: 'urgenciaSelect' });
    selUrg.innerHTML = `
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    `;
    divUrg.appendChild(parUrg);
    divUrg.appendChild(selUrg);
    form.appendChild(divUrg);

    const divTipo = criarElemento('div', { class: 'col-lg-6 mb-3' });
    const parTipo = criarElemento('p', {style: 'color: black; text-align: center'}, 'Tipo de problema');
    const selTipo = criarElemento('select', { class: 'form-control', id: 'tipoSelect', name: 'tipoSelect'} );
    divTipo.appendChild(parTipo);
    divTipo.appendChild(selTipo);
    form.appendChild(divTipo);

    const divOrg = criarElemento('div', { class:'col-lg-12 mb-3' });
    const parOrg = criarElemento('p', {style: 'color: black; text-align: center'}, 'Órgão competente');
    const selOrg = criarElemento('select', { class: 'form-control', id: 'orgaoSelect', name: 'orgaoSelect'} );
    divOrg.appendChild(parOrg);
    divOrg.appendChild(selOrg);
    form.appendChild(divOrg);

    const divImg = criarElemento('div', { class: 'col-lg-12 mb-3' });
    const parImg = criarElemento('p', {style: 'color: black; text-align: center'}, 'Insira uma imagem');
    const inputImg = criarInput('file', 'Imagem', 'imagemInput', 'imagemInput', 'form-control-file form-control');
    divImg.appendChild(parImg);
    divImg.appendChild(inputImg);
    form.appendChild(divImg);

    const divBut = criarElemento('div', { class: 'text-center d-grid mt-1', style: 'display: flex; flex-direction: column; justify-content: center;'});
    const button = criarBotao('submit', '', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    button.innerHTML = 'Confirmar <i class="fas fa-paper-plane"></i>'
    button.setAttribute('style', 'margin-top: 5px; width: 100%;');
    const cancelar = criarBotao('button', 'Cancelar', '#', 'btn btn-danger rounded-pill pt-2 pb-2');
    cancelar.addEventListener('click', () => window.location.reload());
    cancelar.setAttribute('style', 'margin-top: 5px; max-width: 150px;');
    divBut.appendChild(button);
    divBut.appendChild(cancelar);
    form.appendChild(divBut);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        await sendDenuncia();
    });

    painelDir.appendChild(divForm);
    
    painelPrincipal.appendChild(painelEsq);
    painelPrincipal.appendChild(painelDir);
    container.appendChild(painelPrincipal);
    denunciaSection.appendChild(container);
    preencherSelect();
}


const preencherSelect = async () => {
    loadTipos();
    loadOrgaos();
}

const cidadaoHome = () => {
    const home = document.querySelector('#interact');
    home.innerHTML = `<div class="row align-items-center text-white">
        <!-- START THE CONTENT FOR THE INTRO  -->
        <div class="col-md-6 intros text-start">
        <h1 class="display-2">
            <span class="display-2--intro">Bem-vindo, cidadão.</span>
            <span class="display-2--description lh-base">
            Ao lado estão as funcionalidades disponíveis. 
            </span>
        </h1>
        </div>
        <!-- START THE CONTENT FOR THE VIDEO -->
        <div id="funcionalidades" class="col-md-6 intros text-end">
        <div class="list-group" style="gap: 3px; text-align: center;">
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="denunciaForm()">Enviar denúncia</a>
            <a class="list-group-item list-group-item-action disabled" aria-disabled="true">Visualizar minhas denúncias</a>
        </div>
        </div>
  </div>
  `;
}

window.onload = async () => validaSessaoCidadao();