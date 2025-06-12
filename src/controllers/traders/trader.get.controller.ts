import type { Trader } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { TradersService } from "../../services/traders";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { TraderEntity } from "../../entities/trader.entity";

export const get = (tradersService: TradersService) => 
	async (_req: BodyRequest<TraderEntity>, res: BodyResponse<TraderEntity[]>, next: NextFunction) => {
	try {
		const traders = await tradersService.getTraderService();
		return res.status(StatusCodes.OK).json({ data: traders, message: "Traders retrieved successfully" });
	} catch (error) {
		next(error);
	}
};
