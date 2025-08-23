import { Request, Response } from "express";

export const login = (req: Request, res: Response): void => {
    try {
        const { username, password } = req.body;
        if (username === "admin" && password === "password123") {
            res.json({ message: "Login successful", token: "fake-jwt-token" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json(error)
    }
};
