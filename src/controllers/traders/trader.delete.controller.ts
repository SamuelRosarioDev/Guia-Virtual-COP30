import type { Trader } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import type { TradersService } from "../../services/traders";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";
import type { TraderEntity } from "../../entities/trader.entity";

export const deleter = (tradersService: TradersService) => 
	async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<TraderEntity>, next: NextFunction) => {
	try {
		const { idTrader } = req.params;
		if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Trader ID is required." });

		const deletedTrader = await tradersService.deleteTraderService(idTrader);

		return res.status(StatusCodes.OK).json({data: deletedTrader, message: "Trader deleted successfully"});
	} catch (error) {
		next(error);
	}
};
