import type { Trader } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { TraderRepository } from "../../database/repositories/traders";
import { AppError } from "../../errors/app.error";

export const deleter =
	(traderRepository: TraderRepository) =>
	async (idTrader: string): Promise<Trader> => {
		const trader = await traderRepository.getTraderByIdRepository(idTrader);
		if (!trader) throw new AppError("Comerciante não encontrado", StatusCodes.NOT_FOUND);

		const deletedTrader = await traderRepository.deleteTraderRepository(idTrader);
		return deletedTrader;
	};
