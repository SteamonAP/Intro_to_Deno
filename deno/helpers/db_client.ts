import { MongoClient, Database } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

let db: Database;

export const connect = async () => {
  const client = new MongoClient();
  await client.connect("mongodb+srv://amoghpitale7:Steamonap%40123@cluster0.rmnqcy0.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0&authMechanism=SCRAM-SHA-1");
  db = client.database("todo-app");
  console.log("✅ Connected to MongoDB Atlas successfully!");
};

export const getDb = () => {
  return db;
};
