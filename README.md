![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 📝 Todo API

A simple RESTful Todo API built with **Express.js**, **TypeScript**, and **Swagger** documentation.

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) todos
- In-memory storage (for simplicity)
- Status-based task management (created, inprogress, completed)
- API documentation with Swagger UI

## 🏗️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Swagger UI
- REST API design

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/nooretk/todo-app.git

# Navigate to the project folder
cd todo-app

# Install dependencies
npm install
```

---

## ⚙️ Scripts

```bash
# Start the development server
npm run dev

# The server should now be running at http://localhost:3000.
```

---

## 📡 API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/todos`     | Get all todos             |
| GET    | `/todos/:id` | Get a specific todo by ID |
| POST   | `/todos`     | Create a new todo         |
| PATCH  | `/todos/:id` | Update a todo's status    |
| DELETE | `/todos/:id` | Delete a todo by ID       |

---

## 🧪 Example Todo Object

```json
{
  "id": 1,
  "text": "Learn TypeScript",
  "createdAt": "2025-08-06T12:00:00.000Z",
  "status": "created"
}
```

---

## 📚 API Documentation

Swagger UI is available at:

👉 [http://localhost:3000/docs](http://localhost:3000/docs)

It provides a live playground to test the endpoints.

---

## 📁 Project Structure

```
src/
├── routes/
│   └── api.routes.ts
├── types/
│   └── todo.types.ts
├── swagger.json
└── app.ts
```

---

## 📌 Notes

- This API uses in-memory storage for simplicity.
- For production, you should use a proper database like MongoDB or PostgreSQL.
- Add authentication for securing endpoints in the future.

---

## 🧑‍💻 Author

- [Noureddin Etkaidek](https://github.com/nooretk)

---

## 🪪 License

This project is licensed under the [MIT License](./LICENSE).
