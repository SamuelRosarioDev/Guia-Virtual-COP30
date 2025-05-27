import type { PrismaClient } from "@prisma/client";
import { create } from "./trader.create.repository";
import { deleter } from "./trader.delete.repository";
import { get } from "./trader.get.repository";
import { getById, getUserOnTraderById } from "./trader.getById.repository";
import { update } from "./trader.update.repository";

export const createTradersRepository = (model: PrismaClient["trader"]) => {
	return {
		createTraderRepository: create(model),
		getTraderByIdRepository: getById(model),
		getUserOnTraderByIdRepository: getUserOnTraderById(model),
		deleteTraderRepository: deleter(model),
		updateTraderRepository: update(model),
		getTraderRepository: get(model),
	};
};

export type TraderRepository = ReturnType<typeof createTradersRepository>;
