import type { NextFunction, Request, Response } from "express";
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

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
	const token = req.cookies.token;

	if (!token) {
		res.status(401).json({ message: "Token não fornecido" });
		return;
	}

	const decoded = verifyToken(token) as Payload | null;

	if (!decoded) {
		res.status(401).json({ message: "Token inválido ou expirado" });
		return;
	}

	req.user = decoded;
	next();
}
