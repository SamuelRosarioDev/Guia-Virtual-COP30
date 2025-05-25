import type { NextFunction, Response } from "express";
import type { CreateTraderDTO } from "../../dtos/trader.dto"; 
import type { BodyRequest } from "../../types/request.type";
import { StatusCodes } from "http-status-codes";
import type { TradersService } from "../../services/traders"; 

export const create = (tradersService: TradersService) =>
    async (req: BodyRequest<CreateTraderDTO>, res: Response, next: NextFunction) => {
        try {
            const traderData = req.body;
            const createdTrader = await tradersService.createTraderService(traderData);
            return res.status(StatusCodes.CREATED).json(createdTrader);
        } catch (error) {
            next(error);
        }
    };
