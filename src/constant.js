const isProd = process.env.NODE_ENV === "production";

export const API = isProd
    ? "https://hvpvc-backend.vercel.app/v1/admin"
    : "http://localhost:5000/v1/admin";

export const BASE_URL = isProd
    ? "https://hvpvc-backend.vercel.app/"
    : "http://localhost:5000/";
