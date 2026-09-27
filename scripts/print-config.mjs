const keys = ["PORT", "SERVICE_NAME", "LOG_LEVEL"];
for (const key of keys) {
  const value = process.env[key];
  console.log(`${key}=${value === undefined ? "(unset)" : value}`);
}
