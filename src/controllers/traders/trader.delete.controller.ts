import type { Trader } from "@prisma/client";
import type { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import type { IdTraderDTO } from "../../dtos/trader.dto";
import type { TradersService } from "../../services/traders";
import type { BodyResponse, ParamsRequest } from "../../types/request.type";

export const deleter = (tradersService: TradersService) => async (req: ParamsRequest<IdTraderDTO>, res: BodyResponse<Trader | { message: string }>, next: NextFunction) => {
	try {
		const { idTrader } = req.params;
		if (!idTrader) return res.status(StatusCodes.BAD_REQUEST).json({ message: "ID do comerciante é obrigatório." });

		const deletedTrader = await tradersService.deleteTraderService(idTrader);
		if (!deletedTrader) return res.status(StatusCodes.NOT_FOUND).json({ message: "ID do comerciante não encontrado." });

		return res.status(StatusCodes.OK).json(deletedTrader);
	} catch (error) {
		next(error);
	}
};
