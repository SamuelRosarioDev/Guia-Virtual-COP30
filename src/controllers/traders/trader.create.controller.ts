import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { TradersDataDTO } from "../../dtos/trader.dto";
import type { TradersService } from "../../services/traders";
import type { BodyRequest, BodyResponse } from "../../types/request.type";
import type { TraderEntity } from "../../entities/trader.entity";

export const create = (tradersService: TradersService) => 
	async (req: BodyRequest<TradersDataDTO>, res: BodyResponse<TraderEntity>, next: NextFunction) => {
	try {
		const traderData = req.body;
		const createdTrader = await tradersService.createTraderService(traderData);
		return res.status(StatusCodes.CREATED).json({data: createdTrader, message: "Trader created successfully"});
	} catch (error) {
		next(error);
	}
};
