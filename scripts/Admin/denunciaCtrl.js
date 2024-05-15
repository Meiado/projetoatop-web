let listaDenuncias = [];
let listaFeedbacks = [];

const loadDenuncias = async () => {
    const table =  document.querySelector('#table');
    table.innerHTML = '';
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
          <th scope="col">Denúncia</th>
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
    const response = await fetch('http://localhost:8080/api/admin/denuncia/all', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        },

    });
    listaDenuncias = await response.json();
    let denuncias = "";
    for (denuncia of listaDenuncias) {  
        denuncias += `
                <tr>
                    <td>${denuncia.id}</td>
                    <td>${denuncia.tipo.nome}</td>
                    <td>${denuncia.titulo}</td>
                    <td>${new Date(denuncia.data).toLocaleDateString('pt-BR')}</td>
                    <td>${denuncia.urgencia}</td> 
                    <td name="feedback" id="feedback${denuncia.id}">Sem feedback</td>
                    <td><button id="button${denuncia.id}" type="button" class ="btn btn-primary rounded-pill pt-1 pb-1">Alterar feedback</button></td>
                    <td id="imagem${denuncia.id}">Sem imagem</td>
                `                
    }
    tableBody.innerHTML = denuncias;
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    await loadImagem();
    await loadFeedback();
}

const loadFeedback = async () => {
    listaFeedbacks = await fetch('http://localhost:8080/api/admin/denuncia/feedbacks', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        },
    }).then(res => {
        if(res.ok)
            return res.json();
    })
    for (let denuncia of listaDenuncias){
        const feedback = listaFeedbacks.find(feed => feed.denuncia.id === denuncia.id);
        if(feedback) {
            const idTag = 'feedback'+denuncia.id;
            document.querySelector('#'+idTag).innerHTML = denuncia.feedback.texto;
        }
        const idButton = 'button'+denuncia.id;
        document.querySelector('#'+idButton).addEventListener('click', () => montaFeedbackForm(denuncia.id));
    }
}

const loadImagem = async () => {
    for (let item of listaDenuncias) {
        const res = await fetch('http://localhost:8080/api/admin/denuncia/imagem?id='+item.id, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        });
        if(res.ok) {
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const button = document.createElement('button');
            button.setAttribute('class','btn btn-secondary rounded-pill pt-1 pb-1');
            button.textContent = 'Visualizar imagem';
            button.onclick = () => {
                window.open(url, '_blank');
            };
            const tagId = 'imagem'+item.id;
            document.querySelector('#'+tagId).innerHTML = '';
            document.querySelector('#'+tagId).appendChild(button);
        } else {
            console.log('Imagem não encontrada');
        }
    }
}

const montaFeedbackForm = async (id) => {
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
    let feedback = listaFeedbacks.find(feed => feed.denuncia.id === id);
    if (feedback) {
        input.value = feedback.texto;
    }
    div.appendChild(button);
    form.appendChild(div);
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        await enviaFeedback(id);
    });
    formSection.appendChild(form);
}

const enviaFeedback = async (id) => {
    const texto = document.querySelector('#textoFeedback').value;
    if(texto.trim() !== "") {
        document.querySelector('#mensagem').textContent = '';
        const feedback = { texto: texto };
        await fetch('http://localhost:8080/api/admin/denuncia/feedback?id='+id, {
            method: 'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        }).then(res => {
            if(res.ok) {
                alert('Feedback alterado');
                denunciaControl();
            }
        }).catch(err => console.error('Erro ao alterar feedback', err));
    } 
    else
        document.querySelector('#mensagem').textContent = 'Por favor insira o feedback.';
}

const denunciaControl = async () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    await loadDenuncias();
}