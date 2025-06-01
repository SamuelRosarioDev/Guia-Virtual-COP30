import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export function authorizeUserOrAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.user) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Usuário não autenticado" });
    return;
  }

  if (req.user.isAdmin) {
    next();
    return;
  }

  const idUserParam = req.params.idUser;
  const idHotelierParam = req.params.idHotelier;
  const idTraderParam = req.params.idTrader;

  if (idUserParam) {
    if (idUserParam !== req.user.idUser) {
      res.status(StatusCodes.FORBIDDEN).json({ message: "Acesso negado: recurso não pertence ao usuário" });
      return;
    }
  } else if (idHotelierParam) {
    if (!req.user.hotelier || idHotelierParam !== req.user.hotelier.idHotelier) {
      res.status(StatusCodes.FORBIDDEN).json({ message: "Acesso negado: recurso não pertence ao usuário" });
      return;
    }
  } else if (idTraderParam) {
    if (!req.user.trader || idTraderParam !== req.user.trader.idTrader) {
      res.status(StatusCodes.FORBIDDEN).json({ message: "Acesso negado: recurso não pertence ao usuário" });
      return;
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do recurso não fornecido na URL" });
    return;
  }

  next();
}
