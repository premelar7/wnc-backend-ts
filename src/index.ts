import express from "express";
import { corsMiddleware } from "./middlewares/cors.middleware";
import authRoutes from "./routes/auth.routes";
import { rateLimitMiddleware } from "./middlewares/rateLimit.middleware";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(corsMiddleware);
app.use(rateLimitMiddleware);
app.use(express.json());

app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
    res.send(`Running in ${process.env.NODE_ENV} mode`);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
