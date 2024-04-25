// const form = document.querySelector('#meuFormulario');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const arquivo = formData.get('arquivo');

//   try {
//     // Envia os dados do formulário para a rota de registro de denúncia
//     const response = await fetch('url/registroDenuncia', {
//       method: 'POST',
//       body: formData
//     });
//     const data = await response.json();
    
//     // Recupera o ID da denúncia
//     const denunciaId = data.id;

//     if (arquivo) {
//       // Se há um arquivo, envia o arquivo para a rota de envio de imagem
//       const formDataImagem = new FormData();
//       formDataImagem.append('arquivo', arquivo);
//       formDataImagem.append('idDenuncia', denunciaId);

//       await fetch('url/envioImagem', {
//         method: 'POST',
//         body: formDataImagem
//       });
//     }

//     // Sucesso
//     console.log('Denúncia registrada com sucesso!');
//   } catch (error) {
//     console.error('Ocorreu um erro:', error);
//   }
// });
