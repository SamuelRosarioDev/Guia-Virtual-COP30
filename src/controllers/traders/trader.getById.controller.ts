import type { NextFunction } from "express";
import type { TradersService } from "../../services/traders"; 
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { Trader } from "@prisma/client";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import { StatusCodes } from "http-status-codes";

export const getById = (tradersService: TradersService) =>
    async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<Trader | { message: string }>, next: NextFunction) => {
        try {
            const { idTrader } = req.params;
            if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do comerciante é obrigatório." });

            const trader = await tradersService.getTraderByIdService(idTrader);
            if (!trader) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do comerciante não encontrado." });

            return res.status(StatusCodes.OK).json(trader);
        } catch (error) {
            next(error);
        }
    };
