# Intro to Deno – Full Stack Todo App

A simple full-stack Todo app using **Deno** (Oak, MongoDB) for the backend and **React** for the frontend.

## Features

- Add, edit, delete todos
- MongoDB Atlas for persistent storage
- CORS-enabled API for frontend-backend communication
- Hot-reload backend with Deno’s `--watch` flag (like nodemon)

## Getting Started

### Prerequisites

- [Deno](https://deno.com/manual/getting_started/installation)
- [Node.js & npm](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Backend Setup

1. `cd deno`
2. Create a `.env` file with your MongoDB URI:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```
3. Start the backend with hot-reload:
    ```
    deno task dev
    ```
    *(or use `deno run --allow-net --allow-read --allow-env --watch app.ts`)*

### Frontend Setup

1. `cd frontend-app`
2. Install dependencies:
    ```
    npm install
    ```
3. Start the frontend:
    ```
    npm start
    ```
4. Open [http://localhost:3000](http://localhost:3000)

### API Endpoints

- `GET /todos` – List all todos
- `POST /todos` – Add a todo
- `PUT /todos/:todoId` – Edit a todo
- `DELETE /todos/:todoId` – Delete a todo

---

##
