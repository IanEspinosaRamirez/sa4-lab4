export const config = { runtime: "edge" };

export default function handler() {
  const body = JSON.stringify({
    status: "ok",
    service: process.env.SERVICE_NAME || "sa4-lab4-health",
    time: new Date().toISOString(),
  });
  return new Response(body, {
    status: 200,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
