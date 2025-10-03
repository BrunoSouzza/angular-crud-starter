## Angular CRUD Project

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) desenvolvida em Angular. O objetivo do projeto é demonstrar na prática como criar, listar, atualizar e deletar registros de forma simples e eficiente utilizando o framework Angular para o frontend e o json-server para simular o backend.

### Funcionalidades

- **Cadastro** de novos itens/registros.
- **Listagem** de todos os registros cadastrados.
- **Edição** de registros existentes.
- **Exclusão** de registros.

A interface permite a interação completa com os dados, atualizando a tela automaticamente após cada operação.

---

### 🔥 Como rodar o projeto

#### 1. Clone o repositório

```
git clone https://github.com/BrunoSouzza/angular_crud.git
```

#### 2. Backend (API Fake)

Este projeto utiliza o [json-server](https://github.com/typicode/json-server) para simular uma API RESTful.

No terminal, navegue até a pasta do projeto e execute:

```
json-server --watch db.json --port 9000
```

O arquivo `db.json` serve como banco de dados fake, onde os registros do CRUD serão armazenados e manipulados.

#### 3. Instale as dependências do Frontend

Abra o projeto no seu editor de código favorito e instale as dependências com:

```
npm install
```
ou
```
yarn
```

#### 4. Inicie o Frontend

O frontend foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 12.0.3.

Para rodar o servidor de desenvolvimento, execute:

```
ng serve
```

Acesse o aplicativo em `http://localhost:4200/`. O app irá recarregar automaticamente ao salvar alterações nos arquivos fonte.

---

### Estrutura do Projeto

- **Angular**: Responsável pela interface e lógica de interação com o usuário.
- **json-server**: Simula o backend, expondo endpoints REST para o CRUD dos dados em `db.json`.

---

### Observações

- O projeto é ideal para quem deseja aprender conceitos práticos de Angular e integração com APIs REST.
- Pode ser expandido para consumir uma API real, adicionar autenticação, paginação, filtros, entre outros recursos.

---
