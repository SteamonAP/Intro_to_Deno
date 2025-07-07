import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { connect } from "./helpers/db_client.ts";
import todosRoutes from "./routes/todos.ts";

await connect();

const app = new Application();

app.use(
  oakCors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(async (ctx, next) => {
  console.log("Middleware");
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });
