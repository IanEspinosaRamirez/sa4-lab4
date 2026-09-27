export function healthPayload() {
  return {
    status: "ok",
    service: process.env.SERVICE_NAME || "sa4-lab4-health",
    time: new Date().toISOString(),
  };
}
