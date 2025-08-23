import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const login = async (req: Request, res: Response) => {
    try {
        // const { username, password } = req.body;
        const users = await prisma.user.findMany({
            orderBy: { user_id: "desc" },
        });
        res.json(users);
        // if (username === "admin" && password === "password123") {
        //     res.json({ message: "Login successful", token: "fake-jwt-token" });
        // } else {
        //     res.status(401).json({ message: "Invalid credentials" });
        // }
    } catch (error) {
        res.status(500).json(error)
    }
};
