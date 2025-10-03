# Angular CRUD Starter Kit

> Base project for CRUD (Create, Read, Update, Delete) applications using Angular. Perfect for kickstarting projects that require data manipulation through REST APIs, with a modern architecture and development best practices.

## 🚀 Technologies Used

- **[Angular](https://angular.io/)**: SPA framework for building modern web interfaces.
- **[Angular CLI](https://github.com/angular/angular-cli)**: Official tool for scaffolding and managing Angular projects.
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript superset adopted by Angular.
- **[json-server](https://github.com/typicode/json-server)**: Simulates a RESTful API for development and testing.
- **RxJS**: Reactive programming library for asynchronous data handling.
- **HTML5/CSS3**: Interface structure and styling.
- **Node.js & npm/yarn**: Dependency management and script execution.

## 🧩 Patterns & Best Practices

- Organized into **components** and **services**.
- Clear separation of responsibilities (components, services, models).
- Consumption of **RESTful APIs** via HttpClient.
- Use of **Observables** for asynchronous requests.
- Project generated and maintained with **Angular CLI**.
- Ready for expansion: authentication, pagination, filters, etc.

## ⚙️ Features

- **Create** new items/records.
- **List** all existing records.
- **Edit** records.
- **Delete** records.
- Responsive interface with automatic updates after operations.

## 📂 Project Structure

- `src/app/`: Main source code (components, services, models).
- `db.json`: File used by json-server as a mock database.

## 🔥 How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/BrunoSouzza/angular-crud-starter.git
   cd angular-crud-starter
   ```
2. **Start the Fake Backend**
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 9000
   ```

3. **Install Frontend dependencies**
   ```bash
   npm install
   # or
   yarn
   ```
4. **Start the Frontend**

   ```bash
   ng serve
   ```

Access it at http://localhost:4200
