const text = 'This test should be written in file';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt',data).then(() => {
    console.log('File data uploaded!');
});