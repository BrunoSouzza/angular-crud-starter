# Angular CRUD Starter Kit

> Projeto base para aplicações CRUD (Create, Read, Update, Delete) utilizando Angular. Ideal para iniciar projetos que envolvem manipulação de dados via API REST, com arquitetura moderna e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **[Angular](https://angular.io/)**: Framework SPA para construção de interfaces web modernas.
- **[Angular CLI](https://github.com/angular/angular-cli)**: Ferramenta oficial para scaffolding e gerenciamento do projeto.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript adotado pelo Angular.
- **[json-server](https://github.com/typicode/json-server)**: Simula uma API RESTful para desenvolvimento e testes.
- **RxJS**: Programação reativa, utilizada para manipulação assíncrona de dados.
- **HTML5/CSS3**: Estrutura e estilos da interface.
- **Node.js & npm/yarn**: Gerenciamento de dependências e execução de scripts.

## 🧩 Padrões e Boas Práticas

- Estruturação em **componentes** e **serviços**.
- Separação clara de responsabilidades (componentes, serviços, modelos).
- Consumo de **API RESTful** via HttpClient.
- Utilização de **Observables** para requisições assíncronas.
- Projeto gerado e mantido com **Angular CLI**.
- Pronto para expansão: autenticação, paginação, filtros, etc.

## ⚙️ Funcionalidades

- **Cadastro** de novos itens/registros.
- **Listagem** de todos os registros cadastrados.
- **Edição** de registros existentes.
- **Exclusão** de registros.
- Interface responsiva e atualização automática após operações.

## 📂 Estrutura do Projeto

- `src/app/`: Código-fonte principal (componentes, serviços, modelos).
- `db.json`: Arquivo usado pelo json-server como banco de dados fake.

## 🔥 Como Rodar o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/BrunoSouzza/angular-crud-starter.git
   cd angular-crud-starter
   ```

2. **Inicie o Backend Fake**
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 9000
   ```

3. **Instale as dependências do Frontend**
   ```bash
   npm install
   # ou
   yarn
   ```

4. **Inicie o Frontend**
   ```bash
   ng serve
   ```
   Acesse em [http://localhost:4200](http://localhost:4200)

## 💡 Observações

- Ideal para quem deseja aprender na prática Angular e integração com APIs REST.
- Fácil de expandir para projetos reais.
- Contribuições são bem-vindas!

---

> Sinta-se à vontade para sugerir melhorias, abrir issues ou enviar PRs!
