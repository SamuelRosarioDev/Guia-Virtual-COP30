import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.util";

interface Payload {
  idUser: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: Payload;
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const decoded = verifyToken(token) as Payload | null;
  if (!decoded) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }

  req.user = decoded;
  next();
}
