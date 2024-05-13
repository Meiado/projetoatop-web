
const validaSessaoAdmin = async () => {
    await fetch('http://localhost:8080/access/session', {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }).then(response => {
        if(response.ok && parseInt(localStorage.getItem('access')) === 1) 
            adminHome();
        else {
            alert("Entre como administrador para continuar!");
            localStorage.removeItem('access');
            localStorage.removeItem('token');
            window.location.href = "../index.html";
        }
    });
} 