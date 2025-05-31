import type { Trader } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import type { TraderEntity } from "../../entities/trader.entity";
import type { TradersService } from "../../services/traders";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const update = (tradersService: TradersService) => async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<Trader | { message: string }>, next: NextFunction) => {
	try {
		const { idTrader } = req.params;
		const traderData: TraderEntity = req.body;

		if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Trader ID is required." });

		const updateTrader = await tradersService.updateTraderService(idTrader, traderData);

		return res.status(StatusCodes.OK).json({ data: updateTrader, message: "Trader updated successfully" });
	} catch (error) {
		next(error);
	}
};
