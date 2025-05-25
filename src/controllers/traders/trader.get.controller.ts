import type { NextFunction } from "express";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { Trader } from "@prisma/client";
import type { TradersService } from "../../services/traders";
import { StatusCodes } from "http-status-codes";

export const get = (tradersService: TradersService) =>
    async (_req: BodyRequest<Trader>, res: BodyResponse<Trader[]>, next: NextFunction) => {
        try {
            const traders = await tradersService.getTraderService();
            return res.status(StatusCodes.OK).json(traders);
        } catch (error) {
            next(error);
        }
    };
