import { PrismaClient } from "@prisma/client";
import { createTradersRepository } from "../database/repositories/traders";
import { createUsersRepository } from "../database/repositories/users";
import { TradersService } from "../services/traders";

const prisma = new PrismaClient();

class TradersFactoryInternal {
	private tradersServiceInstance: TradersService | null = null;

	getServiceInstance() {
		if (this.tradersServiceInstance) {
			return this.tradersServiceInstance;
		}

		const usersRepository = createUsersRepository(prisma.user);
		const tradersRepository = createTradersRepository(prisma.trader);
		const service = TradersService(usersRepository, tradersRepository);
		this.tradersServiceInstance = service;

		return service;
	}
}

export const TradersFactory = new TradersFactoryInternal();
