import { type RequestHandler, Router, type Request, type Response } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

export const authRoute = Router();

authRoute.get(
    "/me",
    authMiddleware,
    ((req: Request, res: Response) => {
        if (!req.user) {
            return res.status(401).json({ message: "Usuário não autenticado" });
        }

        return res.status(200).json({
            idUser: req.user.idUser,
            name: req.user.name,
            email: req.user.email,
            typeUser: req.user.typeUser,
            isAdmin: req.user.isAdmin,
        });
    }) as unknown as RequestHandler
);
