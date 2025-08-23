import cors from "cors";

export const corsMiddleware = cors({
    origin: ["http://localhost:3000"], // whitelist
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you need cookies/auth headers
});
