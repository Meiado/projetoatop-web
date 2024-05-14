let orgaoPubli = [];

const loadOrgaos = async () => {
    const table = document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Órgãos Públicos</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
    `;
    tableHead.setAttribute('style', 'border-top-color: aliceblue;');
    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('class', 'table-group-divider');
    tableBody.setAttribute('style', 'border-top-color: aliceblue;');
    const response = await fetch('http://localhost:8080/api/admin/orgao/all', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        },
    });
    orgaoPubli = await response.json();
    let orgaos = "";
    for(orgao of orgaoPubli) {
        let orgaoTipo = `
            <tr>
                <td>${orgao.id}</td>
                <td id="${orgao.id}">${orgao.nome}</td>
                <td><button class="btn btn-primary rounded-pill pt-1 pb-1" onclick="montaOrgaoForm(${orgao.id})">Alterar</td>
                <td><button class="btn btn-danger rounded-pill pt-1 pb-1" onclick="deleteOrgao(${orgao.id})">Excluir</td>
            </tr>
        `;
        orgaos += orgaoTipo;
    };
    tableBody.innerHTML = orgaos;
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    
    const divButton = criarElemento('div', {class: 'container', style: 'display: flex; justify-content: center; gap: 3px;'});
    const novo = criarBotao('button', 'Adicionar novo', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    novo.addEventListener('click', () => montaOrgaoForm());
    novo.setAttribute('style', 'margin-top: 5px');
    const voltar = criarBotao('button', 'Voltar', '#', 'btn btn-primary rounded-pill pt-2 pb-2');
    voltar.addEventListener('click', () => window.location.reload());
    voltar.setAttribute('style', 'margin-top: 5px');
    divButton.appendChild(novo);
    divButton.appendChild(voltar);
    document.querySelector('#buttonSection').appendChild(divButton);
}

const deleteOrgao = async (id) => {
    await fetch('http://localhost:8080/api/admin/orgao?id='+id, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
    }).then(res => {
        if(res.ok) {
            alert('Orgão excluído.');
            orgaoControl();
        }
    }).catch(err => console.error('Erro ao excluir orgão, ', err));
}

const montaOrgaoForm = async (id) => {
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
        input.value = orgaoPubli.find(orgao => orgao.id === id).nome;
    }
    div.appendChild(button);
    form.appendChild(div);
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        await enviaOrgao(id);
    });
    formSection.appendChild(form);
}

const enviaOrgao = async (id) => {
    const nome = document.querySelector('#orgaoNome').value;
    if(nome.trim() !== "") {
        document.querySelector('#mensagem').textContent = '';
        const novoOrgao = { nome: nome };
        if(id) {
            await fetch('http://localhost:8080/api/admin/orgao?id='+id, {
                method: 'PATCH',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoOrgao),
            }).then(res => {
                if(res.ok) {
                    alert('Orgão alterado');
                    orgaoControl();
                }
            }).catch(err => console.error('Erro ao atualizar orgão, ', err));
            
        }
        else {
            await fetch('http://localhost:8080/api/admin/orgao', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoOrgao),
            }).then(res => {
                if(res.ok) {
                    alert('Orgão adicionado');
                    orgaoControl();
                }
            }).catch(err => console.error('Erro ao cadastrar orgão, ', err));
            
        }
    }
    else
        document.querySelector('#mensagem').textContent = 'Por favor insira um nome.';
}


const orgaoControl = async () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    await loadOrgaos();
}