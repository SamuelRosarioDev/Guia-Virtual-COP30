import type { Trader } from "@prisma/client";
import type { TraderRepository } from "../../database/repositories/traders";

export const get = (traderRepository: TraderRepository) => async (): Promise<Trader[]> => {
	const traders = await traderRepository.getTraderRepository();
	return traders;
};
