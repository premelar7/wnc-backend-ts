import Redis from "ioredis";

const redis = new Redis({
    host: process.env.REDIS_HOST || "redis",
    port: Number(process.env.REDIS_PORT) || 6379,
    username: process.env.REDIS_USER,   // "myuser"
    password: process.env.REDIS_PASSWORD, // "supersecret"
});


redis.on("connect", () => {
    console.log("✅ Redis connected");
});

redis.on("error", (err) => {
    console.error("❌ Redis error:", err);
});

export default redis;