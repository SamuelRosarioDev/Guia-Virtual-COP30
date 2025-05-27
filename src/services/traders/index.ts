import type { TraderRepository } from "../../database/repositories/traders";
import type { UsersRepository } from "../../database/repositories/users";
import { create } from "./trader.create.service";
import { deleter } from "./trader.delete.service";
import { get } from "./trader.get.service";
import { getById } from "./trader.getById.service";
import { update } from "./trader.update.service";

export const TradersService = (usersRepository: UsersRepository, traderRepository: TraderRepository) => ({
	createTraderService: create(usersRepository, traderRepository),
	deleteTraderService: deleter(traderRepository),
	updateTraderService: update(traderRepository),
	getTraderService: get(traderRepository),
	getTraderByIdService: getById(traderRepository),
});

export type TradersService = ReturnType<typeof TradersService>;
