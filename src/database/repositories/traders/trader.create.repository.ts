import type { TraderEntity } from "../../../entities/trader.entity";
import type { PrismaClient, Trader } from "@prisma/client";

export const create = (model: PrismaClient["trader"]) =>
    async (traderEntity: TraderEntity): Promise<Trader> => {
        return model.create({
            data: {
                storeName: traderEntity.storeName,
                storeType: traderEntity.storeType,
                cpf: traderEntity.cpf,
                cnpj: traderEntity.cnpj,
                address: traderEntity.address,
                userId: traderEntity.userId,
            },
        });
    };
