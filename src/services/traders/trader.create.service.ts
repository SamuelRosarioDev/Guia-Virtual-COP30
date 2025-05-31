import { StatusCodes } from "http-status-codes";
import type { TraderRepository } from "../../database/repositories/traders";
import type { UsersRepository } from "../../database/repositories/users";
import type { TradersDataDTO } from "../../dtos/trader.dto";
import { TraderEntity } from "../../entities/trader.entity";
import { AppError } from "../../errors/app.error";

export const create = (usersRepository: UsersRepository, traderRepository: TraderRepository) =>
	async ({ address, cpf, storeName, storeType, userId, cnpj, cep }: TradersDataDTO) => {
		
		const foundUser = await usersRepository.getUserByIdRepository(userId);
		//Verifica se o usuário existe
		if (!foundUser) throw new AppError("User not found", StatusCodes.NOT_FOUND);

		//Verifica se o usuário é do tipo TRADER
		if (foundUser.typeUser !== "TRADER") throw new AppError("User does not have the trader type", StatusCodes.FORBIDDEN);

		const foundTrader = await traderRepository.getUserOnTraderByIdRepository(userId);
		//Verifica se o TRADER já existe
		if (foundTrader) throw new AppError("User already has a registered trader", StatusCodes.BAD_REQUEST);

		const traderEntity = new TraderEntity({ address, cpf, storeName, storeType, userId, cep, cnpj });
		const createdTrader = await traderRepository.createTraderRepository(traderEntity);
		return createdTrader;
	};
