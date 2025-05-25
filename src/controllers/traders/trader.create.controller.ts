import type { NextFunction } from "express";
import type { TradersDataDTO } from "../../dtos/trader.dto"; 
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { TradersService } from "../../services/traders"; 
import type { Trader } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

export const create = (tradersService: TradersService) =>
    async (req: BodyRequest<TradersDataDTO>, res: BodyResponse<Trader>, next: NextFunction) => {
        try {
            const traderData = req.body;
            const createdTrader = await tradersService.createTraderService(traderData);
            return res.status(StatusCodes.CREATED).json(createdTrader);
        } catch (error) {
            next(error);
        }
    };
