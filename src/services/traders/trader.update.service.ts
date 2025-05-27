import type { Trader } from "@prisma/client";
import type { TraderRepository } from "../../database/repositories/traders";
import { TraderEntity } from "../../entities/trader.entity";

export const update =
	(traderRepository: TraderRepository) =>
	async (idTrader: string, data: TraderEntity): Promise<Trader> => {
		const traderEntity = new TraderEntity(data);
		const updatedUser = await traderRepository.updateTraderRepository(idTrader, traderEntity);
		return updatedUser;
	};
