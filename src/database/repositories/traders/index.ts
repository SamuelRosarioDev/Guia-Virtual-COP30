import { create } from "./trader.create.repository";
import { remove } from "./trader.delete.repository";
import { get } from "./trader.get.repository";
import { getById, getUserOnTraderById } from "./trader.getById.repository";
import { update } from "./trader.update.repository";

export const createTradersRepository = () => {
	return {
		createTraderRepository: create(),
		getTraderByIdRepository: getById(),
		deleteTraderRepository: remove(),
		getUserOnTraderByIdRepository: getUserOnTraderById(),
		updateTraderRepository: update(),
		getTraderRepository: get(),
	};
};

export type TraderRepository = ReturnType<typeof createTradersRepository>;
