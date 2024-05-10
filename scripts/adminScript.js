window.onload = async () => {
    await fetch('http://localhost:8080/access/session', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }).then(response => {
        if(response.status === 200) {}
            //carrega pagina
        else {
            alert("Inicie a sessão para continuar!");
            window.location.href = "../index.html";
        }
    });
} 