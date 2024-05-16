
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


const registerAdmin = async () => {
    const email = document.querySelector('#emailCadastro').value;
    const senha = document.querySelector('#senhaCadastro').value;
    const cpf = document.querySelector('#cpfCadastro').value;
    let usuario = {
      email: email,
      senha: senha,
      cpf: cpf,
    };
    await fetch('http://localhost:8080/api/admin/register', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    }).then(response => {
        if(response.ok) {
            alert('Administrador registrado');
            registerAdminView();
        }
        else if(response.status === 400) {
            alert('Este email já está cadastrado!');
            registerAdminView();
        }
    }).catch(err => console.error('Ocorrreu um erro, ', err));

}