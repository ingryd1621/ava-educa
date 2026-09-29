# AVA-EDUCA+

## Descrição do projeto

O AVA-EDUCA+ é um protótipo de ambiente virtual desenvolvido para centralizar informações acadêmicas de uma empresa de educação.
A proposta do sistema é facilitar o trabalho da equipe pedagógica, reunindo em uma única aplicação informações que antes poderiam estar distribuídas.
O projeto permite realizar autenticação de usuários, visualizar os cursos vinculados a ele e cadastrar novos alunos, utilizando uma interface responsiva.

## Tecnologias e técnicas utilizadas

O projeto foi desenvolvido utilizando:

- HTML para estruturação das páginas e uso de tags semânticas;
- CSS para estilização, Flexbox, CSS Grid e responsividade com Media Queries;
- JavaScript para lógica da aplicação, manipulação do DOM, eventos e validações;
- sessionStorage para armazenar os dados do usuário logado durante a sessão;
- Promises para tratamento assíncrono nas funcionalidades de autenticação, cursos e cadastro de alunos;
- Fetch API para consulta de endereço (ViaCEP);
- Moment.js para validação da data de nascimento;
- Módulos JavaScript com import e export para organização e reutilização do código;
- Programação Orientada a Objetos (POO), utilizando a classe Aluno;
- Git e GitHub para versionamento do projeto, utilizando branches e commits descritivos;
- Trello para organização e acompanhamento das atividades através de um quadro Kanban.
- ChatGPT para auxílio na organização do projeto, na utilização de Git e GitHub e na revisão final.

## Estrutura do projeto

```text
ava-educa/
|
|--- cadastro-aluno/
|    |--- cadastro-aluno.html
|    |--- cadastro-aluno.css
|    |--- cadastro-aluno.js
|
|--- css/
|    |--- style.css
|
|--- dashboard/
|    |--- dashboard.html
|    |--- dashboard.css
|    |--- dashboard.js
|
|--- dados/
|    |--- listagem-alunos.js
|    |--- listagem-cursos.js
|    |--- listagem-usuarios.js
|
|--- js/
|    |--- Aluno.js
|    |--- alunos.js
|    |--- app.js
|    |--- auth.js
|    |--- cursos.js
|
|--- login/
|    |--- login.html
|    |--- login.css
|    |--- login.js
|
|--- index.html
|--- package.json
|--- README.md
```

## Como executar

Para executar o AVA-EDUCA+ corretamente, é necessário utilizar um servidor local, pois o projeto utiliza módulos JavaScript com import e export.
Uma opção é utilizar a extensão Live Server no VS Code.
Seguindo estes passos:

1. Clone ou faça download deste repositório.
2. Abra a pasta do projeto no VS Code.
3. Instale a extensão Live Server, caso ainda não esteja instalada.
4. Abra o arquivo index.html.
5. Clique com o botão direito sobre o arquivo e selecione Open With Live Server.
6. A aplicação será aberta no navegador e redicionará automaticamente para a tela de login.

### Usuários para teste

Nome: Ana Carolina Silva
Email: ana.silva@edutech.com
Senha: 123456

Nome: Carlos Eduardo Santos
Email: carlos.santos@edutech.com
Senha: 654321

Nome: Mariana Oliveira Costa
Email: mariana.costa@edutech.com
Senha: edu2026

Após o login, o usuário será direcionado para o Dashboard, onde poderá visualizar os cursos vinculados ao seu email e acessar a página de cadastro de alunos.