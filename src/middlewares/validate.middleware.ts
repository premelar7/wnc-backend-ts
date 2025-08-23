import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";

export const validate =
    (schema: ZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });
                next();
            } catch (e: any) {
                const err = JSON.parse(e.message)[0];
                return res.status(422).json({
                    status: 'error',
                    code: err.code,
                    errors: {
                        field: err.path.join("."),
                        message: err.message,
                    }
                })
            }
        }
