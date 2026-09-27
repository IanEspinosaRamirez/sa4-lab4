function payload() {
  return {
    status: "ok",
    service: process.env.SERVICE_NAME || "sa4-lab4-health",
    time: new Date().toISOString(),
  };
}

export function GET() {
  return Response.json(payload());
}

export default function handler(_req, res) {
  if (res && typeof res.status === "function") {
    res.status(200).json(payload());
    return;
  }
  return Response.json(payload());
}
