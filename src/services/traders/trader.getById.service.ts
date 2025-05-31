import type { Trader } from "@prisma/client";
import type { TraderRepository } from "../../database/repositories/traders";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const getById =
	(tradersRepository: TraderRepository) =>
	async (idTrader: string): Promise<Trader> => {
		const trader = await tradersRepository.getTraderByIdRepository(idTrader);
		// Verifica se o trader existe
		if (!trader) throw new AppError("Trader not found", StatusCodes.NOT_FOUND);
		return trader;
	};
