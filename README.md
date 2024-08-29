# Projeto Ativo Operante

Projeto Ativo Operante é uma aplicação web desenvolvida com o objetivo de aprofundar os conhecimentos do Framework Java Spring Boot e praticar as habilidades de programação. 

## Descrição

Trata-se de um portal de envio de denúncias, que podem acompanhar imagens anexadas para avaliação e acompanhar o feedback da denúncia. Administradores visualizam as denúncias recebidas e adicionam a elas o feedback, além de configurar o sistema com os tipos de problema e órgãos responsáveis disponíveis.

## Instalação
#### SERVIDOR DESLIGADO
Como é uma aplicação web, não é necessário instalar nada localmente. Basta acessar [Ativo e Operante](https://meiado.github.io/projetoatop-web/index.html) para começar a usar. 


## Uso

#### SERVIDOR DESLIGADO

A aplicação é intuitiva e fácil de usar. Após acessar o link, você pode criar uma conta ou entrar com suas credenciais existentes para registrar denúncias e acompanhar seus feedbacks. <br>
### NÃO UTILIZE INFORMAÇÕES REAIS PARA CADASTRO!<br>
As opções "Visão Cidadão" e "Visão Admin" não interagem diretamente com o servidor da aplicação, elas servem somente para mostrar como são as interfaces visuais de cada nível de acesso e simular suas funcionalidades disponíveis através de variáveis locais, sem a necessidade de cadastro e autenticação. <br>
Para se cadastrar recomendamos utilizar informações geradas através do [4Devs](https://www.4devs.com.br/gerador_de_pessoas)

## Tecnologias

O Projeto Ativo Operante foi desenvolvido utilizando as seguintes tecnologias:

### Back End
- **Java Spring Boot**: Para a construção da API RESTful.
- **JPA (Java Persistence API)**: Para o mapeamento objeto-relacional.
- **MongoDB Atlas**: Como banco de dados NoSQL hospedado em nuvem para armazenamento de dados.
- **Google Cloud**: Para hospedagem da aplicação, utilizando o serviço Cloud Run para execução de Containers Docker.
- Repositório: [Projeto ATOP API](https://github.com/HumbertoStuani/projetoatop-api)

### Front End
- **HTML/CSS/JavaScript**: Para a construção do front-end da aplicação.
- **Bootstrap**: Framework de front-end para design responsivo e mobile-first.

Essa infraestrutura garante alta disponibilidade e escalabilidade para a aplicação.


## Contribuição

Contribuições são sempre bem-vindas! Se você tem alguma sugestão ou quer melhorar algo, sinta-se à vontade para fazer um fork do repositório e submeter suas mudanças via Pull Request.

1. Faça um fork do projeto
2. Crie uma branch para sua nova feature (`git checkout -b feature/novaFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona alguma novaFeature'`)
4. Faça push para a branch (`git push origin feature/novaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.
