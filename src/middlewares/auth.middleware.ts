import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import type { AuthUser } from "../types/authUser.type";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../utils/jwt.util";

const prisma = new PrismaClient();

export const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token não fornecido" });
      return;
    }

    const decoded = verifyToken(token) as { idUser: string } | null;

    if (!decoded) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token inválido ou expirado" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { idUser: decoded.idUser },
      include: { hotelier: true, trader: true },
    });

    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "Usuário não encontrado" });
      return;
    }

    const authUser: AuthUser = {
      idUser: user.idUser,
      name: user.name,
      email: user.email,
      phone: user.phone,
      country: user.country,
      typeUser: user.typeUser as "Hotelier" | "Trader" | "Visitor",
      isAdmin: user.isAdmin,
      hotelier: user.hotelier
        ? {
            idHotelier: user.hotelier.idHotelier,
            hotelName: user.hotelier.hotelName,
            totalQuantity: user.hotelier.totalQuantity,
            quantityOccupied: user.hotelier.quantityOccupied,
            cnpj: user.hotelier.cnpj,
            link: user.hotelier.link ?? undefined,
            address: user.hotelier.address,
            cep: user.hotelier.cep,
          }
        : undefined,
      trader: user.trader
        ? {
            idTrader: user.trader.idTrader,
            storeName: user.trader.storeName,
            storeType: user.trader.storeType,
            cpf: user.trader.cpf,
            cnpj: user.trader.cnpj ?? undefined,
            address: user.trader.address,
            cep: user.trader.cep,
          }
        : undefined,
    };

    req.user = authUser;
    next();
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Erro no middleware de autenticação" });
  }
};
