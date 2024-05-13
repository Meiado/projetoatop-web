
const register = async () => {
    const email = document.querySelector('#emailCadastro').value;
      const senha = document.querySelector('#senhaCadastro').value;
      const cpf = document.querySelector('#cpfCadastro').value;
      let usuario = {
        email: email,
        senha: senha,
        cpf: cpf
      };
      try {
        const loginResponse = await fetch('http://localhost:8080/access/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        })
        const token = await loginResponse.text();
        console.log(token);
    
        localStorage.setItem('token', token);
  
        const accessResponse = await fetch('http://localhost:8080/access?token=' + token, {
          method: 'GET',
        })
        const access = parseInt(await accessResponse.text());
        localStorage.setItem('access', access); 
        if(access === 1) {
          window.location.href = './views/AdminView.html';
        } else if (access === 2) {  
          window.location.href = './views/CidadaoView.html';
        } else {
          localStorage.removeItem('access-token');
          localStorage.removeItem('access');
          alert('Houve um erro com seu nível de acesso. Status: inválido!');
        }
  
      } catch (err) {
        console.error(err);
      }
  }
  
const login = async () => {
    const email = document.querySelector('#emailLogin').value;
    const senha = document.querySelector('#senhaLogin').value;
    let usuario = { email: email, senha: senha };
    try {
        const res = await fetch('http://localhost:8080/access/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
        })
        const token = await res.text();
        localStorage.setItem('token', token);

        const accessResponse = await fetch('http://localhost:8080/access?token=' + token, {
        method: 'GET',
        })
        const access = parseInt(await accessResponse.text());
        localStorage.setItem('access', access); 
        if(access === 1) {
          window.location.href = './views/AdminView.html';
        } else if (access === 2) {  
          window.location.href = './views/CidadaoView.html';
        } else {
          localStorage.removeItem('access-token');
          localStorage.removeItem('access');
          alert('Houve um erro com seu nível de acesso. Status: inválido!');
        }

    } catch (err) {
        console.error(err);
    }
}