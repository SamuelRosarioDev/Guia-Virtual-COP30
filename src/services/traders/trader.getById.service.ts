import type { Trader } from "@prisma/client";
import type { TraderRepository } from "../../database/repositories/traders";

export const getById =
	(tradersRepository: TraderRepository) =>
	async (idTrader: string): Promise<Trader | null> => {
		const trader = await tradersRepository.getTraderByIdRepository(idTrader);
		return trader;
	};
