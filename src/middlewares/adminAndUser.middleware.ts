import type { NextFunction, Request, Response } from "express";

export function authorizeUserOrAdmin(req: Request, res: Response, next: NextFunction): void {
	if (!req.user) {
		res.status(401).json({ message: "Usuário não autenticado" });
		return;
	}

	if (req.user.isAdmin) {
		next();
		return;
	}

	const resourceId = req.params.idUser || req.params.idTrader || req.params.idHotelier;

	if (!resourceId) {
		res.status(400).json({ message: "ID do recurso não fornecido na URL" });
		return;
	}

	if (req.params.idUser && req.params.idUser !== req.user.idUser) {
		res.status(403).json({ message: "Acesso negado: recurso não pertence ao usuário" });
		return;
	}

	next();
}
