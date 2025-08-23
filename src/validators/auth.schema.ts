import { z } from "zod";

export const loginSchema = z.object({
    body: z.object({
        email: z.email("Must be a valid email"),
        password: z.string().min(1, "Password is required"),
    }),
});
