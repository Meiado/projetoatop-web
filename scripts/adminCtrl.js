let listaTipos = [];

const loadTipos = async () => {
    const table = document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo do Problema</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
    `;
    const tableBody = document.createElement('tbody');
    const response = await fetch('http://localhost:8080/api/admin/tipo/all', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        },
    });
    listaTipos = await response.json();
    let tipos = "";
    for(tipo of listaTipos) {
        let itemTipo = `
            <tr>
                <td>${tipo.id}</td>
                <td id="${tipo.id}">${tipo.nome}</td>
                <td><button onclick="montaTipoForm(${tipo.id})">Alterar</td>
                <td><button onclick="deleteTipo(${tipo.id})">Excluir</td>
            </tr>
        `;
        tipos += itemTipo;
    };
    tableBody.innerHTML = tipos;
    const tableFoot = document.createElement('tfoot');
    const novo = criarBotao('button', 'Adicionar novo');
    novo.addEventListener('click', () => montaTipoForm());
    tableFoot.appendChild(novo);
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    table.appendChild(tableFoot);
}

const deleteTipo = async (id) => {
    await fetch('http://localhost:8080/api/admin/tipo?id='+id, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
    }).then(res => {
        if(res.ok) {
            alert('Tipo excluído.');
            tipoControl();
        }
    }).catch(err => console.error('Erro ao excluir tipo, ', err));
}

const montaTipoForm = async (id) => {
    const formSection = document.querySelector('#formSection');
    formSection.innerHTML = '';
    const form = criarElemento('form',{ id: 'tipoForm' });
    const input = criarInput('text', 'Nome', 'tipoNome');
    const button = criarBotao('submit', 'Enviar');
    if(id) {
        input.value = listaTipos.find(tipo => tipo.id === id).nome;
    }
    form.appendChild(input);
    form.appendChild(button);
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        await enviaTipo(id);
    });
    formSection.appendChild(form);
}

const enviaTipo = async (id) => {
    const nome = document.querySelector('#tipoNome').value;
    if(nome.trim() !== "") {
        document.querySelector('#mensagem').textContent = '';
        const novoTipo = { nome: nome };
        if(id) {
            await fetch('http://localhost:8080/api/admin/tipo?id='+id, {
                method: 'PATCH',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoTipo),
            }).then(res => {
                if(res.ok) {
                    alert('Tipo alterado');
                    tipoControl();
                }
            }).catch(err => console.error('Erro ao atualizar tipo, ', err));
            
        }
        else {
            await fetch('http://localhost:8080/api/admin/tipo', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoTipo),
            }).then(res => {
                if(res.ok) {
                    alert('Tipo adicionado');
                    tipoControl();
                }
            }).catch(err => console.error('Erro ao cadastrar tipo, ', err));
            
        }
    }
    else
        document.querySelector('#mensagem').textContent = 'Por favor insira um nome.';
}

const tipoControl = async () => {
    document.querySelector('#formSection').innerHTML='';
    await loadTipos();
}