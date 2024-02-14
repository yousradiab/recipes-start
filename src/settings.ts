const isProduction = import.meta.env.MODE === "production";

const URL = isProduction ? import.meta.env.VITE_API_BASE_URL : "http://localhost:8000";

const MODE = isProduction ? "Production" : "Development";
console.info(MODE + " API URL: " + URL);
// console.info("ENV", import.meta.env);
export const API_URL = URL;

