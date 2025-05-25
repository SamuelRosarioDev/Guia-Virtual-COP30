import type { PrismaClient, Trader } from "@prisma/client";
import type { TraderEntity } from "../../../entities/trader.entity";

export const update = (model: PrismaClient["trader"]) =>
    async (idTrader: string, traderEntity: TraderEntity): Promise<Trader> => {
        return model.update({
            where: { idTrader },
            data: {
                storeName: traderEntity.storeName,
                storeType: traderEntity.storeType,
                cpf: traderEntity.cpf,
                cnpj: traderEntity.cnpj,
                address: traderEntity.address
            },
        });
    };