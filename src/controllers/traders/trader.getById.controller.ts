import type { Trader } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import type { TradersService } from "../../services/traders";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const getById = (tradersService: TradersService) => 
	async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<Trader>, next: NextFunction) => {
	try {
		const { idTrader } = req.params;
		if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Trader ID is required."});

		const trader = await tradersService.getTraderByIdService(idTrader);

		return res.status(StatusCodes.OK).json({ data: trader, message: "Trader retrieved successfully" });
	} catch (error) {
		next(error);
	}
};
