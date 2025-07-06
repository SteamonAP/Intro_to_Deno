// const text = 'This test should be written in file';

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// Deno.writeFile('message.txt',data).then(() => {
//     console.log('File data uploaded!');
// });

// import { serve } from "https://deno.land/std/http/server.ts";

// serve((req) => {
//     return new Response("Hello bhai log\n")
// }, { port: 3000 });

import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello world\n";
});

await app.listen({ port: 8000 });
