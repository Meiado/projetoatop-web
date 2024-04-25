const loadTipos = async () => {
    try {
        let response = await fetch('http://localhost:8080/api/cidadao/tipos');
        let data = await response.json();
        const select = document.querySelector("#tipoSelect");
        
        data.forEach(tipo => {
            const option = document.createElement('option');
            option.value = tipo.id;
            option.textContent = tipo.nome;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao obter tipos', error);
    };
}

const loadOrgaos = async () => {
    try {
        let response = await fetch('http:localhost:8080/api/cidadao/orgaos');
        let data =  await response.json();
        const select = document.querySelector("#orgaoSelect");

        data.forEach(orgao => {
            const option = document.createElement('option');
            option.value = orgao.id;
            option.textContent = orgao.nome;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao obter órgãos', error);
    }
}
