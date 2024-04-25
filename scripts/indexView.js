const criarElemento = (tag, attributes, textContent) => {
  const element = document.createElement(tag);
  if (attributes) {
      for (const key in attributes) {
          element.setAttribute(key, attributes[key]);
      }
  }
  if (textContent) {
      element.textContent = textContent;
  }
  return element;
}

const criarInput = (type, placeholder, id, name, classes) => {
  const input = criarElemento('input', {
      type: type,
      placeholder: placeholder,
      id: id,
      name: name,
      class: classes
  });
  return input;
}

const criarBotao = (type, text, onclick, classes) => {
  const button = criarElemento('button', {
      type: type,
      class: classes,
      onclick: onclick
  }, text);
  return button;
}

const registerView = () => {
  let interact = document.querySelector("#interact");
  const container = criarElemento('div', { class: 'container' });

  const row = criarElemento('div', { class: 'row text-center' });
  const h1 = criarElemento('h1', { class: 'display-3 fw-bold text-capitalize' }, 'Cadastre-se');
  const headingLine = criarElemento('div', { class: 'heading-line' });

  row.appendChild(h1);
  row.appendChild(headingLine);
  container.appendChild(row);

  const innerRow = criarElemento('div', { class: 'row text-white' });

  const leftColumn = criarElemento('div', { class: 'col-12 col-lg-6 gradient shadow p-3' });
  const ctaInfoLeft = criarElemento('div', { class: 'cta-info w-100' });
  const h4Left = criarElemento('h4', { class: 'display-4 fw-bold' }, '100% de Segurança de Dados');
  const pLeft = criarElemento('p', { class: 'lh-lg' }, 'Cadastre-se agora em nossa plataforma para realizar as denúncias em sua região! Fique tranquilo, seus dados estarão seguros e anônimos.');
  const h3Left = criarElemento('h3', { class: 'display-3--brief' }, 'Qual o próximo passo?');
  const ulLeft = criarElemento('ul', { class: 'cta-info__list' });
  const li1 = criarElemento('li', null, 'Fazer o cadastro.');
  const li2 = criarElemento('li', null, 'Logar na tela abaixo.');
  const li3 = criarElemento('li', null, 'Cadastrar suas denúncias.');

  ulLeft.appendChild(li1);
  ulLeft.appendChild(li2);
  ulLeft.appendChild(li3);

  ctaInfoLeft.appendChild(h4Left);
  ctaInfoLeft.appendChild(pLeft);
  ctaInfoLeft.appendChild(h3Left);
  ctaInfoLeft.appendChild(ulLeft);
  leftColumn.appendChild(ctaInfoLeft);
  innerRow.appendChild(leftColumn);

  const rightColumn = criarElemento('div', { class: 'col-12 col-lg-6 bg-white shadow p-3' });
  const formRight = criarElemento('div', { class: 'form w-100 pb-2' });
  const h4Right = criarElemento('h4', { class: 'display-3--title mb-5' }, 'Cadastro');
  const form = criarElemento('form', { action: '#', class: 'row' }, 'Cadastro');
  const col1 = criarElemento('div', { class: 'col-lg-12 col-md mb-3' });
  const inputCPF = criarInput('text', 'CPF', null, null, 'shadow form-control form-control-lg');
  const col2 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
  const inputSenha = criarInput('text', 'Senha', null, null, 'shadow form-control form-control-lg');
  const col3 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
  const inputSenhaRep = criarInput('text', 'Repita a senha', null, null, 'shadow form-control form-control-lg');
  const col4 = criarElemento('div', { class: 'col-lg-12 mb-3' });
  const inputEmail = criarInput('email', 'Email', null, null, 'shadow form-control form-control-lg');
  const buttonDiv = criarElemento('div', { class: 'text-center d-grid mt-1' });
  const button = criarBotao('button', 'Cadastrar!', null, 'btn btn-primary rounded-pill pt-3 pb-3');

  col1.appendChild(inputEmail);
  col2.appendChild(inputSenha);
  col3.appendChild(inputSenhaRep);
  col4.appendChild(inputCPF);
  buttonDiv.appendChild(button);

  form.appendChild(col1);
  form.appendChild(col2);
  form.appendChild(col3);
  form.appendChild(col4);
  form.appendChild(buttonDiv);
  formRight.appendChild(h4Right);
  formRight.appendChild(form);
  rightColumn.appendChild(formRight);

  const buttonRow = criarElemento('div', { class: 'text-center d-grid mt-3', style: 'max-width: 50%; margin: 0 auto;' });
  const buttonBack = criarBotao('button', 'Já cadastrado? Clique aqui', 'loginView()', 'btn btn-primary rounded-pill pt-3 pb-3');

  buttonRow.appendChild(buttonBack);
  rightColumn.appendChild(buttonRow);

  innerRow.appendChild(rightColumn);
  container.appendChild(innerRow);

  interact.innerHTML = "";
  interact.appendChild(container);
}

const loginView = () => {
  let interact = document.querySelector("#interact");
  const container = criarElemento('div', { class: 'container' });

  const row = criarElemento('div', { class: 'row text-center' });
  const h1 = criarElemento('h1', { class: 'display-3 fw-bold text-capitalize' }, 'Acesse');
  const headingLine = criarElemento('div', { class: 'heading-line' });

  row.appendChild(h1);
  row.appendChild(headingLine);
  container.appendChild(row);

  const innerRow = criarElemento('div', { class: 'row text-white' });

  const leftColumn = criarElemento('div', { class: 'col-12 col-lg-6 gradient shadow p-3' });
  const ctaInfoLeft = criarElemento('div', { class: 'cta-info w-100' });
  const h4Left = criarElemento('h4', { class: 'display-4 fw-bold' }, 'Portal de Denúncias');
  const pLeft = criarElemento('p', { class: 'lh-lg' }, 'Faça o Login para acessar a página de denúncias e reportar os casos que merecem atenção!');
  const h3Left = criarElemento('h3', { class: 'display-3--brief' }, 'Qual o próximo passo?');
  const ulLeft = criarElemento('ul', { class: 'cta-info__list' });
  const li1 = criarElemento('li', null, 'Login.');
  const li2 = criarElemento('li', null, 'Redirecionamento para a página.');
  const li3 = criarElemento('li', null, 'Cadastrar suas denúncias.');

  ulLeft.appendChild(li1);
  ulLeft.appendChild(li2);
  ulLeft.appendChild(li3);

  ctaInfoLeft.appendChild(h4Left);
  ctaInfoLeft.appendChild(pLeft);
  ctaInfoLeft.appendChild(h3Left);
  ctaInfoLeft.appendChild(ulLeft);
  leftColumn.appendChild(ctaInfoLeft);
  innerRow.appendChild(leftColumn);

  const rightColumn = criarElemento('div', { class: 'col-12 col-lg-6 bg-white shadow p-3' });
  const formRight = criarElemento('div', { class: 'form w-100 pb-2' });
  const h4Right = criarElemento('h4', { class: 'display-3--title mb-5' }, 'Login');
  const form = criarElemento('form', { action: '#', class: 'row' });
  const col1 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
  const inputEmail = criarInput('email', 'Email', null, null, 'shadow form-control form-control-lg');
  const col2 = criarElemento('div', { class: 'col-lg-6 col-md mb-3' });
  const space = criarElemento('div', { class: 'col-lg-12 col-md mb-3' });
  const inputSenha = criarInput('text', 'Senha', null, null, 'shadow form-control form-control-lg');
  const buttonDiv = criarElemento('div', { class: 'text-center d-grid mt-1' });
  const button = criarBotao('button', 'Logar!', null, 'btn btn-primary rounded-pill pt-3 pb-3');

  col1.appendChild(inputEmail);
  col2.appendChild(inputSenha);
  buttonDiv.appendChild(button);

  form.appendChild(col1);
  form.appendChild(col2);
  form.appendChild(space);
  form.appendChild(buttonDiv);
  formRight.appendChild(h4Right);
  formRight.appendChild(form);
  rightColumn.appendChild(formRight);

  const buttonRow = criarElemento('div', { class: 'text-center d-grid mt-3', style: 'max-width: 50%; margin: 0 auto;' });
  const buttonBack = criarBotao('button', 'Não possui cadastro? Clique aqui', 'registerView()', 'btn btn-primary rounded-pill pt-3 pb-3');

  buttonRow.appendChild(buttonBack);
  rightColumn.appendChild(buttonRow);

  innerRow.appendChild(rightColumn);
  container.appendChild(innerRow);

  interact.innerHTML = "";
  interact.appendChild(container);
}



// window.onload = registerView();

// const registerView = () => {
//   let interact = document.querySelector("#interact");
//   interact.innerHTML = ` <div class="container">
//   <div class="row text-center">
//     <h1 class="display-3 fw-bold text-capitalize">Cadastre-se</h1>
//     <div class="heading-line"></div>
//   </div>


//   <div class="row text-white">
//     <div class="col-12 col-lg-6 gradient shadow p-3">
//       <div class="cta-info w-100">
//         <h4 class="display-4 fw-bold">100% de Segurança de Dados</h4>
//         <p class="lh-lg">
//           Cadastre-se agora em nossa plataforma para realizar as denúncias em 
//           sua região! Fique tranquilo, seus dados estarão seguros e anônimos.
//         </p>
//         <h3 class="display-3--brief">Qual o próximo passo?</h3>
//         <ul class="cta-info__list">
//           <li>Fazer o cadastro.</li>
//           <li>Logar na tela abaixo.</li>
//           <li>Cadastrar suas denúncias.</li>
//         </ul>
//       </div>
//     </div>
//     <div class="col-12 col-lg-6 bg-white shadow p-3">
//       <div class="form w-100 pb-2">
//         <h4 class="display-3--title mb-5">Cadastro</h4>
//         <form action="#" class="row">
//           <div class="col-lg-12 col-md mb-3">
//             <input type="text" placeholder="CPF" id="" name="" class="shadow form-control form-control-lg">
//           </div>
//           <div class="col-lg-6 col-md mb-3">
//             <input type="text" placeholder="Senha" id="" name="" class="shadow form-control form-control-lg">
//           </div>
//           <div class="col-lg-6 col-md mb-3">
//               <input type="text" placeholder="Repita a senha" id="" name="" class="shadow form-control form-control-lg">
//             </div>
//           <div class="col-lg-12 mb-3">
//             <input type="email" placeholder="Email" id="" name="" class="shadow form-control form-control-lg">
//           </div>
//           <div class="text-center d-grid mt-1">
//             <button type="button" class="btn btn-primary rounded-pill pt-3 pb-3">
//               Cadastrar!
//               <i class="fas fa-paper-plane"></i>
//             </button>
//           </div>
//         </form>
//       </div>
//       <div class="text-center d-grid mt-3">
//         <button type="button" onclick="loginView()" class="btn btn-primary rounded-pill pt-3 pb-3" style="max-width: 50%;  margin: 0 auto;">
//           Já cadastrado? Clique aqui
//         </button>
//       </div>
      
//     </div>
//   </div>
// </div>`;
// }


// const loginView = () => {
//     let interact = document.querySelector("#interact");
//     interact.innerHTML = `<div class="container">
//     <div class="row text-center">
//       <h1 class="display-3 fw-bold text-capitalize">Acesse</h1>
//       <div class="heading-line"></div>
//     </div>

//     <!-- START THE CTA CONTENT  -->
//     <div class="row text-white">
//       <div class="col-12 col-lg-6 gradient shadow p-3">
//         <div class="cta-info w-100">
//           <h4 class="display-4 fw-bold">Portal de Denúncias</h4>
//           <p class="lh-lg">
//             Faça o Login para acessar a página de denúncias e reportar os
//             casos que merecem atenção!
//           </p>
//           <h3 class="display-3--brief">Qual o próximo passo?</h3>
//           <ul class="cta-info__list">
//             <li>Login.</li>
//             <li>Redirecionamento para a página.</li>
//             <li>Cadastrar suas denúncias.</li>
//           </ul>
//         </div>
//       </div>
//       <div class="col-12 col-lg-6 bg-white shadow p-3">
//         <div class="form w-100 pb-2">
//           <h4 class="display-3--title mb-5">Login</h4>
//           <form action="#" class="row">
//             <div class="col-lg-6 col-md mb-3">
//               <input type="text" placeholder="CPF" id="" name="" class="shadow form-control form-control-lg">
//             </div>
//             <div class="col-lg-6 col-md mb-3">
//               <input type="text" placeholder="Senha" id="" name="" class="shadow form-control form-control-lg">
//             </div>
//             <div class="col-lg-12 mb-3">
//               <input type="email" placeholder="Email" id="" name="" class="shadow form-control form-control-lg">
//             </div>
//             <div class="text-center d-grid mt-1">
//               <button type="button" class="btn btn-primary rounded-pill pt-3 pb-3">
//                 Logar!
//                 <i class="fas fa-paper-plane"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//         <div class="text-center d-grid mt-3">
//           <button type="button" onclick="registerView()" class="btn btn-primary rounded-pill pt-3 pb-3" style="max-width: 50%;  margin: 0 auto;">
//             Não possui cadastro? Clique aqui
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>` ;
// }