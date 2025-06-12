import type { TraderRepository } from "../../database/repositories/traders";
import { TraderEntity } from "../../entities/trader.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import { updateTraderSchema, type UpdateTraderDTO } from "../../dtos/trader.dto";

export const update = (traderRepository: TraderRepository) =>
    async (idTrader: string, data: UpdateTraderDTO): Promise<TraderEntity> => {
        try {
            const parsedData = updateTraderSchema.parse(data);

            const originalTrader = await traderRepository.getTraderByIdRepository(idTrader);
            if (!originalTrader) throw new AppError("Trader not found", StatusCodes.NOT_FOUND);

            const updatedTraderData = {
                ...originalTrader,
                ...parsedData,
            };

            const traderEntity = new TraderEntity(updatedTraderData);

            if (!traderEntity) throw new AppError("Trader not found or update failed", StatusCodes.NOT_FOUND);

            const updatedTrader = await traderRepository.updateTraderRepository(idTrader, traderEntity);
			if (!updatedTrader) throw new AppError("Trader not found or update failed", StatusCodes.NOT_FOUND);
            return updatedTrader;
        } catch (error) {
            throw error;
        }
    };
