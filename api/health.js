export default function handler(_req, res) {
  res.status(200).json({
    status: "ok",
    service: process.env.SERVICE_NAME || "sa4-lab4-health",
    time: new Date().toISOString(),
  });
}
