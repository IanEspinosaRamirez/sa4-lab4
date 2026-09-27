import http from "node:http";
import { healthPayload } from "./health.mjs";

const port = Number(process.env.PORT);
if (!Number.isInteger(port) || port <= 0) {
  console.error("PORT must be a positive integer in the environment");
  process.exit(1);
}

const service = process.env.SERVICE_NAME || "sa4-lab4-health";

function log(message) {
  console.log(`${new Date().toISOString()} ${message}`);
}

const server = http.createServer((req, res) => {
  const url = req.url?.split("?")[0] ?? "/";
  log(`${req.method} ${url}`);

  if (url === "/health" || url === "/health/") {
    const body = JSON.stringify(healthPayload());
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(body);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(port, () => {
  log(`${service} listening on ${port}`);
});

function shutdown(signal) {
  log(`graceful shutdown on ${signal}`);
  server.close(() => {
    log("http server closed");
    process.exit(0);
  });
  setTimeout(() => {
    log("shutdown timed out");
    process.exit(1);
  }, 5000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
