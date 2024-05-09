const criarElemento = (tag, attributes, textContent) => {
  const element = document.createElement(tag);
  if (attributes) {
      for (const key in attributes) {
          element.setAttribute(key, attributes[key]);
      }
  }
  if (textContent) {
      element.textContent = textContent;
  }
  return element;
}

const criarInput = (type, placeholder, id, name, classes) => {
  const input = criarElemento('input', {
      type: type,
      placeholder: placeholder,
      id: id,
      name: name,
      class: classes
  });
  return input;
}

const criarBotao = (type, text, onclick, classes) => {
  const button = criarElemento('button', {
      type: type,
      class: classes,
      onclick: onclick
  }, text);
  return button;
}

const loadTipos = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    await fetch('http://localhost:8080/api/cidadao/tipos', {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    })
    .then(response => response.json())
    .then(data => {
        const select = document.querySelector("#tipoSelect");
    
        data.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo.id;
            option.textContent = tipo.nome;
            select.appendChild(option);
        })
    }).catch (error => console.error('Erro ao obter tipos', error));
}

const loadOrgaos = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    await fetch('http://localhost:8080/api/cidadao/orgaos', {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    })
    .then(response => response.json())
    .then(data => {
        const select = document.querySelector("#orgaoSelect");
    
        data.forEach(orgao => {
            const option = document.createElement('option');
            option.value = orgao.id;
            option.textContent = orgao.nome;
            select.appendChild(option);
        })
    }).catch (error => console.error('Erro ao obter tipos', error));
}

const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

const denunciaForm = () => {
    let denunciaSection = document.querySelector("#interact");

    const container = criarElemento('div', { class: 'container' });
    let headBanner = criarElemento('div', { class: 'row text-center'});
    headBanner.innerHTML = `
        <h1 class="display-3 fw-bold text-capitalize">Denúncia</h1>
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
    const form = criarElemento('form', { class: 'row', action: '#' });
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

    const divBut = criarElemento('div', { class: 'text-center d-grid mt-1'});
    let button = criarBotao('button', '', '#', 'btn btn-primary rounded-pill pt-3 pb-3');
    button.innerHTML = 'Confirmar <i class="fas fa-paper-plane"></i>'
    divBut.appendChild(button);
    form.appendChild(divBut);

    painelDir.appendChild(divForm);
    
    painelPrincipal.appendChild(painelEsq);
    painelPrincipal.appendChild(painelDir);
    container.appendChild(painelPrincipal);

    denunciaSection.appendChild(container);

}

window.onload = denunciaForm();