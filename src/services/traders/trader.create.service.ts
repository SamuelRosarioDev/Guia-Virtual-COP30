import type { CreateTraderDTO } from "../../dtos/trader.dto";
import type { UsersRepository } from "../../database/repositories/users";
import type { TraderRepository } from "../../database/repositories/traders";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import { TraderEntity } from "../../entities/trader.entity";

export const create = (usersRepository: UsersRepository, traderRepository: TraderRepository) =>
    async ({ address, cpf, storeName, storeType, userId, cnpj }: CreateTraderDTO) => {

        //Verifica se o usuário existe
        const foundUser = await usersRepository.getUserByIdRepository(userId);
        if (!foundUser) throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);
       
        //Verifica se o usuário é do tipo TRADER
        if (foundUser.typeUser !== "TRADER") throw new AppError("Usuário não possui o tipo TRADER", StatusCodes.FORBIDDEN);
        
        //Verifica se o TRADER já existe
        const foundTrader = await traderRepository.getUserOnTraderByIdRepository(userId);
        if (foundTrader) throw new AppError("Usuário já possui um trader cadastrado", StatusCodes.BAD_REQUEST);
        

        const traderEntity = new TraderEntity({ address, cpf, storeName, storeType, userId, cnpj });
        const createdTrader = await traderRepository.createTraderRepository(traderEntity);
        return createdTrader;
    }


