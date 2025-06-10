import { StatusCodes } from "http-status-codes";
import type { TraderRepository } from "../../database/repositories/traders";
import { AppError } from "../../errors/app.error";
import type { TraderEntity } from "../../entities/trader.entity";

export const remove =
	(traderRepository: TraderRepository) =>
	async (idTrader: string): Promise<TraderEntity> => {
		const trader = await traderRepository.getTraderByIdRepository(idTrader);
		// Verifica se o trader existe
		if (!trader) throw new AppError("Trader not found", StatusCodes.NOT_FOUND);

		const deletedTrader = await traderRepository.deleteTraderRepository(idTrader);
		return deletedTrader!;
	};
