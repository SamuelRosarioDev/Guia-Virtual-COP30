import type { Trader } from "@prisma/client";
import type { TraderRepository } from "../../database/repositories/traders";
import { TraderEntity } from "../../entities/trader.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const update =
	(traderRepository: TraderRepository) =>
	async (idTrader: string, data: TraderEntity): Promise<Trader> => {
		const traderEntity = new TraderEntity(data);
		const updatedUser = await traderRepository.updateTraderRepository(idTrader, traderEntity);
		// Verifica se o trader existe
		if (!updatedUser) throw new AppError("Trader not found or update failed", StatusCodes.NOT_FOUND);
		return updatedUser;
	};
