import type { TraderRepository } from "../../database/repositories/traders";
import type { TraderEntity } from "../../entities/trader.entity";

export const get = (traderRepository: TraderRepository) => 
	async (): Promise<TraderEntity[]> => {
	const traders = await traderRepository.getTraderRepository();
	return traders;
};
