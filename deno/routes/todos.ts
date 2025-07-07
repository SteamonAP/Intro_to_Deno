import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { getDb } from "../helpers/db_client.ts";

const router = new Router();

// interface TodoSchema {
//   id?: Bson.ObjectId;
//   text: string;
// }
interface Todo {
  id?: string;
  text: string;
}

// Get all todos
router.get("/todos", async (ctx) => {
  const todosCollection = getDb().collection("todos");
  const todos = await todosCollection.find().toArray();
  console.log("Fetched todos:", todos);

  const transformedTodos = todos.map((todo: any) => ({
    id: todo._id.toString(),
    text: todo.text,
  }));

  ctx.response.body = { todos: transformedTodos };
});

// Create new todo
router.post("/todos", async (ctx) => {
  const body = ctx.request.body();
  const data = await body.value;

  const newTodo = { text: data.text };
  const insertId = await getDb().collection("todos").insertOne(newTodo);

  ctx.response.body = {
    message: "Created Todo!",
    todo: {
      id: insertId.toString(),
      text: data.text,
    },
  };
});

// Update todo by ID
router.put("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;
  const body = ctx.request.body();
  const data = await body.value;

  const result = await getDb().collection("todos").updateOne(
    { _id: new Bson.ObjectId(tid) },
    { $set: { text: data.text } },
  );

  if (result.modifiedCount === 0) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }

  ctx.response.body = { message: "Updated Todo!" };
});

// Delete todo by ID
router.delete("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;

  const result = await getDb().collection("todos").deleteOne({
    _id: new Bson.ObjectId(tid),
  });

  if (result === 0) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }

  ctx.response.body = { message: "Deleted Todo!" };
});

export default router;
