import type { NextFunction } from "express";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { Trader } from "@prisma/client";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import type { TradersService } from "../../services/traders";
import type { TraderEntity } from "../../entities/trader.entity";
import { StatusCodes } from "http-status-codes";

export const update = (tradersService: TradersService) =>
    async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<Trader | { message: string }>, next: NextFunction) => {
        try {
            const { idTrader } = req.params;
            const traderData: TraderEntity = req.body;

            if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do comerciante é obrigatório." });

            const updateTrader = await tradersService.updateTraderService(idTrader, traderData);
            if (!updateTrader) return res.status(StatusCodes.NOT_FOUND).json({ message: "Comerciante não encontrado." });

            return res.status(StatusCodes.OK).json(updateTrader);
        } catch (error) {
            next(error);
        }
    };
