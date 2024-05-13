const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

window.onload = async () => {
    await fetch('http://localhost:8080/access/session', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }).then(response => {
        if(response.status === 200) 
            tipoControl();
        else {
            alert("Inicie a sessão para continuar!");
            window.location.href = "../index.html";
        }
    });
} 