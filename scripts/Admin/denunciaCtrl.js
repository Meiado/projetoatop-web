let listaDenuncias = [];

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
        if(denuncia.feedback)
            denuncias += `
                <tr>
                    <td>${denuncia.id}</td>
                    <td>${denuncia.tipo.id}</td>
                    <td>${denuncia.titulo}</td>
                    <td>${new Date(denuncia.data)}</td>
                    <td>${denuncia.urgencia}</td>
                    <td>${denuncia.feedback.texto}</td>
                    <td>Adicionar feedback</td>
                    <td>Visualizar imagem</td>
                </tr>
            `;
        else
            denuncias += `
                <tr>
                    <td>${denuncia.id}</td>
                    <td>${denuncia.tipo.id}</td>
                    <td>${denuncia.titulo}</td>
                    <td>${new Date(denuncia.data)}</td>
                    <td>${denuncia.urgencia}</td>
                    <td id="${denuncia.id}">Sem feedback</td>
                    <td>Adicionar feedback</td>
                    <td>Visualizar imagem</td>
                </tr>
            `;

    }
    tableBody.innerHTML = denuncias;
    table.appendChild(tableHead);
    table.appendChild(tableBody);
}

const denunciaControl = async () => {
    document.querySelector('#formSection').innerHTML='';
    document.querySelector('#buttonSection').innerHTML = '';
    await loadDenuncias();
}