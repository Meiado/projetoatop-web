const denuncias = [
    {
        data: '19/06/2024',
        titulo: 'Risco de queda de árvore',
        tipo: 'Segurança',
        urgencia: 4,
        descricao: 'Árvores com risco de queda no parque',
        feedback: 'Feedback ainda não fornecido',
        imagemUrl: '',
        id: 1
    },
    {
        data: '20/06/2024',
        titulo: 'Lixo acumulado em terreno baldio',
        tipo: 'Saúde pública',
        urgencia: 5,
        descricao: 'Estão descartando lixo no terreno há semanas',
        feedback: 'Equipe enviada para avaliação',
        imagemUrl: '',
        id: 2
    },
    {
        data: '21/06/2024',
        titulo: 'Manutenção das vias públicas',
        tipo: 'Urbano',
        urgencia: 2,
        descricao: 'Ruas estão muito esburacadas no centro',
        feedback: 'Feedback ainda não fornecido',
        imagemUrl: 'https://www.sintfub.org.br/wp-content/uploads/2021/07/DENUNCIA.jpg',
        id: 3
    }
];

const denunciaForm = (data) => {
    let denunciaSection = document.querySelector("#interact");
    denunciaSection.innerHTML = '';

    const container = criarElemento('div', { class: 'container' });

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
        <img src="../images/services/service-1.png" style="width: 60%; margin-left: 40%;">
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
    const button = criarBotao('button', '', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    button.innerHTML = 'Enviar <i class="fas fa-paper-plane"></i>'
    button.setAttribute('style', 'margin-top: 5px; width: 100%;');
    button.setAttribute('id', 'botao1');
    button.addEventListener('click',() => sendDenuncia());
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-secondary rounded-pill pt-2 pb-2');
    voltar.setAttribute('style', 'margin-top: 5px; max-width: 150px;');
    voltar.setAttribute('id', 'botao2');
    voltar.addEventListener('click', () => cidadaoHome());
    divBut.appendChild(button);
    divBut.appendChild(voltar);
    const par = criarElemento('p', { class: 'mensagem-denuncia', id: 'mensagem' });
    form.appendChild(par);
    form.appendChild(divBut);
    painelDir.appendChild(divForm);

    painelPrincipal.appendChild(painelEsq);
    painelPrincipal.appendChild(painelDir);
    container.appendChild(painelPrincipal);
    denunciaSection.appendChild(container);
    preencherSelect();

    if(data) {
        inputTitle.value = data.get('titulo');
        inputText.value = data.get('texto');
        if(data.getAll('imagem')[0]) {
            const imagem = data.getAll('imagem')[0];
            const fileList = new DataTransfer();
            fileList.items.add(new File([imagem], imagem.name));
            inputImg.files = fileList.files;
        }
    }
}

const loadTipos = () => {
    const select = document.querySelector('#tipoSelect');
    const tipos = [
        { id: 1, nome: 'Segurança' },
        { id: 2, nome: 'Saúde pública' },
        { id: 3, nome: 'Urbano' },
        { id: 4, nome: 'Meio ambiente' },
        { id: 5, nome: 'Transporte' }
    ];

    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.id;
        option.textContent = tipo.nome;
        select.appendChild(option);
    });
};

const loadOrgaos = () => {
    const select = document.querySelector('#orgaoSelect');
    const orgaos = [
        { id: 1, nome: 'Prefeitura Municipal' },
        { id: 2, nome: 'Secretaria de Saúde' },
        { id: 3, nome: 'Departamento de Trânsito' },
        { id: 4, nome: 'Secretaria de Meio Ambiente' },
        { id: 5, nome: 'Corpo de Bombeiros' }
    ];

    orgaos.forEach(orgao => {
        const option = document.createElement('option');
        option.value = orgao.id;
        option.textContent = orgao.nome;
        select.appendChild(option);
    });
};

const preencherSelect = async () => {
    loadTipos();
    loadOrgaos();
};

const cidadaoHome = () => {
    const home = document.querySelector('#interact');
    home.innerHTML = `<div class="row align-items-center text-white">
        <!-- START THE CONTENT FOR THE INTRO  -->
        <div class="col-md-5 intros text-start" style="position: relative;">
        <h1 class="display-2">
            <span class="display-2--intro">Bem-vindo, cidadão</span>
            <span class="display-2--description lh-base">
            Ao lado estão os serviços disponíveis. 
            </span>
        </h1>
        </div>
        <div class="col-md-4">
        <img src="../images/services/service-3.png" style="max-width: 100%;">
        </div>
        <!-- START THE CONTENT FOR THE VIDEO -->
        <div id="funcionalidades"  class="col-md-3 intros text-end">
        <div class="list-group" style="gap: 3px; text-align: center;">
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="denunciaForm()">Enviar denúncia</a>
            <a class="list-group-item list-group-item-action" style="cursor: pointer;" onclick="visualizarDenuncias()">Visualizar minhas denúncias</a>
        </div>
        </div>
  </div>
  `;
}

const preparaTabela = () => {
    const home = document.querySelector('#interact');
    home.innerHTML = `    
        <table class="table table-secondary table-hover" id="table"></table>
        <section id="formSection"></section>
        <div id="mensagemDiv" style="display:flex; justify-content:center; margin: 10px;">
            <p id="mensagem" style="color: white;"></p>
        </div>
        <section id="buttonSection"></section>
    `;
}

const visualizarDenuncias = async () => {
    preparaTabela();
    loadDenuncias();
}

let listaDenuncias = [];
let listaFeedbacks = [];

const loadDenuncias = () => {
    
    const table = document.querySelector('#table');
    table.innerHTML = '';

    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
            <th scope="col">Data</th>
            <th scope="col">Título</th>
            <th scope="col">Tipo</th>
            <th scope="col">Urgência</th>
            <th scope="col">Descrição</th>
            <th scope="col">Feedback</th>
            <th scope="col"></th>
            <th scope="col">Imagem</th>
            <th scope="col"></th>
        </tr>
    `;
    tableHead.setAttribute('style', 'border-top-color: aliceblue;');

    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('class', 'table-group-divider');
    tableBody.setAttribute('style', 'border-top-color: aliceblue;');

    denuncias.forEach(denuncia => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${denuncia.data}</td>
            <td>${denuncia.titulo}</td>
            <td>${denuncia.tipo}</td>
            <td>${denuncia.urgencia}</td>
            <td>${denuncia.descricao}</td>
            <td id="feedback${denuncia.id}" name="feedback">${denuncia.feedback}</td>
            <td></td>
            <td id="imagem${denuncia.id}">
                ${denuncia.imagemUrl ? `<button onclick="window.open('${denuncia.imagemUrl}', '_blank')" class="btn btn-secondary rounded-pill pt-1 pb-1">Visualizar</button>` : 'Sem imagem'}
            </td>
            <td>
                <button class="btn btn-danger rounded-pill pb-1 pt-1" onclick="confirmarExclusao('${denuncia.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);

    const divButton = criarElemento('div', {class: 'container', style: 'display: flex; justify-content: center; gap: 3px;'});
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    voltar.addEventListener('click', () => window.location.reload());
    voltar.setAttribute('style', 'margin-top: 5px');
    divButton.appendChild(voltar);
    document.querySelector('#buttonSection').appendChild(divButton);
};

// const loadImagem = async () => {
//     for (let item of listaDenuncias) {
//         const res = await fetch(`http://localhost:8080/api/cidadao/denuncia/${item.id}/imagem`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': localStorage.getItem('token'),
//             },
//         });
//         if(res.status === 200) {
//             const blob = await res.blob();
//             const url = URL.createObjectURL(blob);
//             const button = document.createElement('button');
//             button.setAttribute('class','btn btn-secondary rounded-pill pt-1 pb-1');
//             button.textContent = 'Visualizar';
//             button.onclick = () => {
//                 window.open(url, '_blank');
//             };
//             const tagId = 'imagem'+item.id;
//             document.querySelector('#'+tagId).innerHTML = '';
//             document.querySelector('#'+tagId).appendChild(button);
//         }
//     }
// }

const sendDenuncia = async () => {
    document.querySelector('#mensagem').innerHTML = '';
    const titulo = document.querySelector('#titulo').value;
    const texto = document.querySelector('#descricao').value;
    const urgencia = parseInt(document.querySelector('#urgenciaSelect').value);
    const idTipo = parseInt(document.querySelector('#tipoSelect').value)
    const idOrgao = parseInt(document.querySelector('#orgaoSelect').value);
    const imagem = document.querySelector('input[type=file]').files[0];

    if(!titulo) {
        document.querySelector('#mensagem').innerHTML = 'Por favor informe um título';
    }
    else if(!texto) {
        document.querySelector('#mensagem').innerHTML = 'Por insira uma descrição';
    }
    else {
        const data = new FormData();
        data.append('titulo', titulo);
        data.append('texto', texto);
        data.append('urgencia', urgencia);
        data.append('idTipo', idTipo);
        data.append('idOrgao', idOrgao);
        if(imagem)
            data.append('imagem', imagem);
        document.querySelector('#mensagem').innerHTML = 'Confirma os dados informados?';
        const button = document.querySelector('#botao1');
        button.innerHTML = 'Confirmar <i class="fas fa-paper-plane"></i>';
        button.removeAttribute('class');
        button.setAttribute('class','btn btn-success rounded-pill pt-2 pb-2');
        const cancelar = document.querySelector('#botao2');
        cancelar.innerHTML = 'Cancelar';
        cancelar.removeAttribute('class');
        cancelar.setAttribute('class','btn btn-danger rounded-pill pt-2 pb-2');
        cancelar.removeEventListener('click', () => cidadaoHome());
        cancelar.addEventListener('click', () => denunciaForm(data));
        button.removeEventListener('click', () => sendDenuncia());
        button.addEventListener('click', () => { alert('Denúncia enviada'); denunciaForm(); });     
    }
}

const confirmarExclusao = (id) => {
    if(confirm('Tem certeza que deseja remover sua denúncia?')) {
        excluirDenuncia(id);
    }
}

const excluirDenuncia = (id) => {
    const denunciaIndex = denuncias.findIndex(denuncia => denuncia.id === parseInt(id));
    
    if (denunciaIndex !== -1) {
        denuncias.splice(denunciaIndex, 1);
        alert(`Denuncia removida.`);
        visualizarDenuncias();
    } else {
        alert(`Erro ao excluir.`);
    }
        
}

window.onload = () => cidadaoHome();
