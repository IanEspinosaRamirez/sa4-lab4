const port = process.env.PORT || "3000";
const url = `http://127.0.0.1:${port}/health`;
const res = await fetch(url);
const text = await res.text();
console.log(`${res.status} ${url}`);
console.log(text);
if (!res.ok) process.exit(1);
