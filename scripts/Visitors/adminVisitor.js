let listaTipos = [
    { id: 1, nome: 'Segurança' },
    { id: 2, nome: 'Saúde pública' },
    { id: 3, nome: 'Urbano' },
    { id: 4, nome: 'Meio ambiente' },
    { id: 5, nome: 'Transporte' }
];
let listaOrgaos = [
    { id: 1, nome: 'Secretaria de Saúde' },
    { id: 2, nome: 'Departamento de Segurança Pública' },
    { id: 3, nome: 'Departamento de Meio Ambiente' },
    { id: 4, nome: 'Departamento de Transporte' }
];

const denuncias = [
    { id: 1, tipo: 'Segurança', titulo: 'Risco de queda de árvore', data: '19/06/2024', urgencia: 4, feedback: 'Feedback ainda não fornecido' },
    { id: 2, tipo: 'Saúde pública', titulo: 'Lixo acumulado em terreno baldio', data: '20/06/2024', urgencia: 5, feedback: 'Equipe enviada para avaliação' },
    { id: 3, tipo: 'Urbano', titulo: 'Manutenção das vias públicas', data: '21/06/2024', urgencia: 2, feedback: 'Feedback ainda não fornecido' }
];

const registerAdmin =  () => {
    const email = document.querySelector('#emailCadastro').value;
    const senha = document.querySelector('#senhaCadastro').value;
    const senhaRepetida = document.querySelector('#senhaRepetida').value
    const cpf = document.querySelector('#cpfCadastro').value;
    const mensagem = document.querySelector('#mensagem');
    if (!email) {
        mensagem.innerHTML = 'Insira um email';
        return;
    }
    if (!cpf) {
        mensagem.innerHTML = 'Informe um CPF';
        return;
    }
    if (senha.trim() === '' || senha.length < 6) {
        mensagem.innerHTML = 'Senha precisa ser maior';
        return;
    }
    if (senha !== senhaRepetida) {
        mensagem.innerHTML = 'As senhas não coincidem';
        return;
    }
    let usuario = {
      email: email,
      senha: senha,
      cpf: cpf,
    };
    alert('Administrador registrado');
    registerAdminView();
}

window.onload = () => adminHome();

const adminHome = () => {
    const home = document.querySelector('#home');
    home.innerHTML = `<div class="row align-items-center text-white" >
        <!-- START THE CONTENT FOR THE INTRO  -->
        <div  class="col-md-4 intros text-start">
        <h1 class="display-2">
            <span class="display-2--intro">Bem-vindo, administrador</span>
            <span class="display-2--description lh-base">
            Ao lado estão as funcionalidades disponíveis. 
            </span>
        </h1>
        </div>
        <div class="col-md-4">
        <img src="../images/services/service-2.png" style="margin-left: 5rem; max-width: 100%; ">
        </div>
        <!-- START THE CONTENT FOR THE VIDEO -->
        <div id="funcionalidades"  class="col-md-4 intros text-end">
        <div class="list-group" style="gap: 3px; text-align: center;">
            <button class="list-group-item list-group-item-action" style="cursor: pointer; " onclick="gerenciarTipos()">Gerenciar Tipos</button>
            <button class="list-group-item list-group-item-action" style="cursor: pointer; " onclick="gerenciarOrgao()">Gerenciar Órgãos Públicos</button>
            <button class="list-group-item list-group-item-action" style="cursor: pointer; " onclick="visualizarDenuncias()">Visualizar Denúncias</button>
            <button class="list-group-item list-group-item-action" style="cursor: pointer; " onclick="registrarAdmin()">Cadastrar administrador</button>
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

const registerAdminView = () => {
    let interact = document.querySelector("#home");
    const container = criarElemento('div', { class: 'container' });
  
    const innerRow = criarElemento('div', { class: 'row text-white' });
  
    const leftColumn = criarElemento('div', { class: 'col-12 col-lg-6 gradient shadow p-3' });
    const ctaInfoLeft = criarElemento('div', { class: 'cta-info w-100' });
    const h4Left = criarElemento('h4', { class: 'display-4 fw-bold' }, 'Cadastrar novo administrador');
    const p1Left = criarElemento('h6', { class: 'lh-lg' }, 'Precisando expandir a tripulação? Traga-os a bordo por aqui!');
    const p2Left = criarElemento('p', { class: 'lh-lg' }, 'Fique tranquilo, seus dados estarão seguros e anônimos.');    
  
    ctaInfoLeft.appendChild(h4Left);
    ctaInfoLeft.appendChild(p1Left);
    ctaInfoLeft.appendChild(p2Left);
    leftColumn.appendChild(ctaInfoLeft);
    innerRow.appendChild(leftColumn);
  
    const rightColumn = criarElemento('div', { class: 'col-12 col-lg-6 bg-white shadow p-3' });
    const formRight = criarElemento('div', { class: 'form w-100 pb-2' });
    const form = criarElemento('form', { action: '#', class: 'row' }, 'Cadastro');
    const col1 = criarElemento('div', { class: 'col-lg-12 col-md mb-3' });
    const inputCPF = criarInput('text', 'CPF', 'cpfCadastro', 'cpfCadastro', 'shadow form-control form-control-lg');
    inputCPF.setAttribute('onkeyup', 'cpf()');
    inputCPF.setAttribute('maxlength', '14');
    const col2 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
    const inputSenha = criarInput('password', 'Senha', 'senhaCadastro', 'senhaCadastro', 'shadow form-control form-control-lg');
    const col3 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
    const inputSenhaRep = criarInput('password', 'Repita a senha', 'senhaRepetida', 'senhaRepetida', 'shadow form-control form-control-lg');
    const col4 = criarElemento('div', { class: 'col-lg-12 mb-3' });
    const inputEmail = criarInput('email', 'Email', 'emailCadastro', 'emailCadastro', 'shadow form-control form-control-lg');
    const buttonDiv = criarElemento('div', { class: 'text-center d-grid mt-1' });
    const button = criarBotao('submit', 'Cadastrar!', null, 'btn btn-primary rounded-pill pt-3 pb-3');
  
    col1.appendChild(inputEmail);
    col2.appendChild(inputSenha);
    col3.appendChild(inputSenhaRep);
    col4.appendChild(inputCPF);
    buttonDiv.appendChild(button);
  
    form.appendChild(col1);
    form.appendChild(col2);
    form.appendChild(col3);
    form.appendChild(col4);
    const par = criarElemento('p', { class: 'mensagem-denuncia', id: 'mensagem' });
    form.appendChild(par);
    form.appendChild(buttonDiv);
    formRight.appendChild(form);
    rightColumn.appendChild(formRight);
  
    const buttonRow = criarElemento('div', { class: 'text-center d-grid mt-3', style: 'max-width: 50%; margin: 0 auto;' });
    const buttonBack = criarBotao('button', 'Voltar', 'window.location.reload()', 'btn btn-primary rounded-pill pt-3 pb-3');
  
    buttonRow.appendChild(buttonBack);
    rightColumn.appendChild(buttonRow);
  
    innerRow.appendChild(rightColumn);
    container.appendChild(innerRow);
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      await registerAdmin();
    })
    interact.innerHTML = "";
    interact.appendChild(container);
    
  }

  const loadTipos = () => {
    const table = document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipos de Problemas</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
    `;
    tableHead.setAttribute('style', 'border-top-color: aliceblue;');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('class', 'table-group-divider');
    tableBody.setAttribute('style', 'border-top-color: aliceblue;');


    let tipos = "";
    for (let i = 0; i < listaTipos.length; i++) {
        const tipo = listaTipos[i];
        let itemTipo = `
            <tr>
                <td>${i + 1}</td>
                <td id="${tipo.id}">${tipo.nome}</td>
                <td><button class="btn btn-primary rounded-pill pt-1 pb-1" onclick="montaTipoForm('${tipo.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
              </svg></td>
                <td><button class="btn btn-danger rounded-pill pt-1 pb-1" onclick="deleteTipo('${tipo.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
              </svg></td>
            </tr>
        `;
        tipos += itemTipo;
    }
    
    tableBody.innerHTML = tipos;
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    const divButton = criarElemento('div', { class: 'container', style: 'display: flex; justify-content: center; gap: 3px;' });
    const novo = criarBotao('button', 'Adicionar novo', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    novo.addEventListener('click', () => montaTipoForm());
    novo.setAttribute('style', 'margin-top: 5px');
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    voltar.addEventListener('click', () => window.location.reload());
    voltar.setAttribute('style', 'margin-top: 5px');
    divButton.appendChild(novo);
    divButton.appendChild(voltar);
    document.querySelector('#buttonSection').appendChild(divButton);
};

const montaTipoForm = (id) => {
    const formSection = document.querySelector('#formSection');
    formSection.innerHTML = '';
    const form = criarElemento('form',{ id: 'tipoForm' });
    const div = criarElemento('div', { class: 'input-group mb-3', style: 'display: flex; justify-content: center;' });
    const span = criarElemento('span', { class: 'input-group-text', id: 'inputGroup-sizing-default' }, 'Nome');
    const input = criarInput('text', '', 'tipoNome');
    div.appendChild(span);
    div.appendChild(input);
    const button = criarBotao('submit', 'Enviar','#', 'btn btn-primary rounded-pill pt-1 pb-1');
    button.setAttribute('style', 'margin-left: 5px');
    if(id) {
        input.value = listaTipos.find(tipo => tipo.id === parseInt(id)).nome;
    }
    div.appendChild(button);
    form.appendChild(div);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        enviaTipo(id);
    });
    formSection.appendChild(form);
}
const enviaTipo = (id) => {
    const nome = document.querySelector('#tipoNome').value;
    const mensagem = document.querySelector('#mensagem');
    
    if (nome.trim() !== "") {
        mensagem.textContent = '';

        if (id) {
            // Atualizar tipo existente
            const tipoIndex = listaTipos.findIndex(tipo => tipo.id === parseInt(id));
            if (tipoIndex !== -1) {
                listaTipos[tipoIndex].nome = nome;
                alert('Tipo alterado');
            }
        } else {
            // Adicionar novo tipo
            const novoTipo = { id: listaTipos.length + 1, nome: nome };
            listaTipos.push(novoTipo);
            alert('Tipo adicionado');
        }
        tipoControl();
        document.querySelector('#tipoNome').value = '';
    } else {
        mensagem.textContent = 'Por favor insira um nome.';
    }
};

const deleteTipo = (id) => {
    // Encontrar o índice do tipo com o ID fornecido
    const tipoIndex = listaTipos.findIndex(tipo => tipo.id === parseInt(id));
    
    if (tipoIndex !== -1) {
        // Remover o tipo da lista
        listaTipos.splice(tipoIndex, 1);
        // Recarregar a tabela para refletir a alteração
        tipoControl();
        alert(`Tipo com ID ${id} foi deletado.`);
    } else {
        alert(`Tipo com ID ${id} não encontrado.`);
    }
};


const tipoControl = () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    loadTipos();
}



const loadOrgaos = () => {
    const table = document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">#</th>
          <th scope="col">Órgãos Públicos</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
    `;
    tableHead.setAttribute('style', 'border-top-color: aliceblue;');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('class', 'table-group-divider');
    tableBody.setAttribute('style', 'border-top-color: aliceblue;');

    let orgaos = "";
    for (let i = 0; i < listaOrgaos.length; i++) {
        const orgao = listaOrgaos[i];
        let itemOrgao = `
            <tr>
                <td>${i + 1}</td>
                <td id="${orgao.id}">${orgao.nome}</td>
                <td><button class="btn btn-primary rounded-pill pt-1 pb-1" onclick="montaOrgaoForm('${orgao.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
              </svg></td>
                <td><button class="btn btn-danger rounded-pill pt-1 pb-1" onclick="deleteOrgao('${orgao.id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
              </svg></td>
            </tr>
        `;
        orgaos += itemOrgao;
    }
    tableBody.innerHTML = orgaos;
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    const divButton = criarElemento('div', { class: 'container', style: 'display: flex; justify-content: center; gap: 3px;' });
    const novo = criarBotao('button', 'Adicionar novo', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    novo.addEventListener('click', () => montaOrgaoForm());
    novo.setAttribute('style', 'margin-top: 5px');
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    voltar.addEventListener('click', () => window.location.reload());
    voltar.setAttribute('style', 'margin-top: 5px');
    divButton.appendChild(novo);
    divButton.appendChild(voltar);
    document.querySelector('#buttonSection').appendChild(divButton);
};
const montaOrgaoForm = (id) => {
    const formSection = document.querySelector('#formSection');
    formSection.innerHTML = '';
    const form = criarElemento('form',{ id: 'orgaoForm' });
    const div = criarElemento('div', { class: 'input-group mb-3', style: 'display: flex; justify-content: center;' });
    const span = criarElemento('span', { class: 'input-group-text', id: 'inputGroup-sizing-default' }, 'Nome');
    const input = criarInput('text', '', 'orgaoNome');
    div.appendChild(span);
    div.appendChild(input);
    const button = criarBotao('submit', 'Enviar','#', 'btn btn-primary rounded-pill pt-1 pb-1');
    button.setAttribute('style', 'margin-left: 5px');
    if(id) {
        input.value = listaOrgaos.find(orgao => orgao.id === parseInt(id)).nome;
    }
    div.appendChild(button);
    form.appendChild(div);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        enviaOrgao(id);
    });
    formSection.appendChild(form);
}
const enviaOrgao = (id) => {
    const nome = document.querySelector('#orgaoNome').value;
    const mensagem = document.querySelector('#mensagem');
    
    if (nome.trim() !== "") {
        mensagem.textContent = '';

        if (id) {
            const orgaoIndex = listaOrgaos.findIndex(orgao => orgao.id === parseInt(id));
            if (orgaoIndex !== -1) {
                listaOrgaos[orgaoIndex].nome = nome;
                alert('Órgão público alterado');
            }
        } else {
            const novoOrgao = { id: listaOrgaos.length + 1, nome: nome };
            listaOrgaos.push(novoOrgao);
            alert('Órgão público adicionado');
        }
        orgaoControl();
        document.querySelector('#orgaoNome').value = '';
    } else {
        mensagem.textContent = 'Por favor insira um nome.';
    }
};


const deleteOrgao = (id) => {
    const orgaoIndex = listaOrgaos.findIndex(orgao => orgao.id === parseInt(id));
    
    if (orgaoIndex !== -1) {
        listaOrgaos.splice(orgaoIndex, 1);
        orgaoControl();
        alert(`Órgão com ID ${id} foi deletado.`);
    } else {
        alert(`Órgão com ID ${id} não encontrado.`);
    }
};


const orgaoControl = () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    loadOrgaos();
}

const denunciaControl = () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    loadDenuncias();
    
}

const loadDenuncias = () => {
    const table =  document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo</th>
          <th scope="col">Título</th>
          <th scope="col">Data</th>
          <th scope="col">Urgência</th>
          <th scope="col">Feedback</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
    `;
    tableHead.setAttribute('style', 'border-top-color: aliceblue;');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('class', 'table-group-divider');
    tableBody.setAttribute('style', 'border-top-color: aliceblue;');

   

    let denunciasHTML = '';
    denuncias.forEach((denuncia, index) => {
        denunciasHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${denuncia.tipo}</td>
                <td>${denuncia.titulo}</td>
                <td>${denuncia.data}</td>
                <td>${denuncia.urgencia}</td>
                <td name="feedback" id="feedback${denuncia.id}">${denuncia.feedback}</td>
                <td><button id="button${denuncia.id}" onclick="montaFeedbackForm(${denuncia.id})" type="button" class ="btn btn-primary rounded-pill pt-1 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                    </svg>
                </button></td>
                `;
        if(denuncia.id !== 3) {
            denunciasHTML += `<td id="imagem${denuncia.id}">Sem imagem</td>
            </tr>
        `;
        } else {
            denunciasHTML += `
                <td id="imagem${denuncia.id}">
                    <button onclick="window.open('https://www.sintfub.org.br/wp-content/uploads/2021/07/DENUNCIA.jpg', '_blank')" class="btn btn-secondary rounded-pill pt-1 pb-1">Visualizar</button>
                </td>
            </tr>`;
        }
    });

    tableBody.innerHTML = denunciasHTML;
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    const divButton = criarElemento('div', {class: 'container', style: 'display: flex; justify-content: center; gap: 3px;'});
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    voltar.addEventListener('click', () => window.location.reload());
    voltar.setAttribute('style', 'margin-top: 5px');
    divButton.appendChild(voltar);
    document.querySelector('#buttonSection').appendChild(divButton);
};

const montaFeedbackForm = (id) => {
    const formSection = document.querySelector('#formSection');
    formSection.innerHTML = '';
    const form = criarElemento('form',{ id: 'feedbackForm' });
    const div = criarElemento('div', { class: 'input-group mb-3', style: 'display: flex; justify-content: center;' });
    const span = criarElemento('span', { class: 'input-group-text', id: 'inputGroup-sizing-default' }, 'Feedback');
    const input = criarInput('text', '', 'textoFeedback');
    div.appendChild(span);
    div.appendChild(input);
    const button = criarBotao('submit', 'Enviar','#', 'btn btn-primary rounded-pill pt-1 pb-1');
    button.setAttribute('style', 'margin-left: 5px');
    const feedbackElement = document.querySelector(`#feedback${id}`);
    if (feedbackElement && feedbackElement.textContent !== 'Feedback ainda não fornecido') {
        input.value = feedbackElement.textContent;
    }
    div.appendChild(button);
    form.appendChild(div);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        enviaFeedback(id);
    });
    formSection.appendChild(form);
};

const enviaFeedback = (id) => {
    const texto = document.querySelector('#textoFeedback').value;
    if (texto.trim() !== "") {
        const denunciaIndex = denuncias.findIndex(denuncia => denuncia.id === parseInt(id));
        if (denunciaIndex !== -1) {
            denuncias[denunciaIndex].feedback = texto;
            alert('Feedback alterado');
            denunciaControl();
        }
    } else {
        document.querySelector('#mensagem').textContent = 'Por favor insira o feedback.';
    }
};


const gerenciarTipos = () => {
    preparaTabela();
    tipoControl();
}

const gerenciarOrgao = () => {
    preparaTabela();
    orgaoControl();
}

const visualizarDenuncias = () => {
    preparaTabela();
    denunciaControl();
}

const registrarAdmin = () => {
    registerAdminView();
}