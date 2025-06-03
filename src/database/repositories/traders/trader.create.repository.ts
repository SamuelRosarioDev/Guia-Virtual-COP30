import type { PrismaClient, Trader } from "@prisma/client";
import type { TraderEntity } from "../../../entities/trader.entity";

export const create = (model: PrismaClient["trader"]) =>
  async (traderEntity: TraderEntity): Promise<Trader> => {
    if (
      !traderEntity.storeName ||
      !traderEntity.storeType ||
      !traderEntity.cpf || 
      !traderEntity.linkMap || 
      !traderEntity.address || 
      !traderEntity.cep || 
      !traderEntity.userId 
    ) { 
      throw new Error("Missing required trader fields");
    }

    return model.create({
      data: {
        storeName: traderEntity.storeName,
        storeType: traderEntity.storeType,
        cpf: traderEntity.cpf,
        cnpj: traderEntity.cnpj || undefined,
        linkMap: traderEntity.linkMap,
        address: traderEntity.address,
        cep: traderEntity.cep,
        userId: traderEntity.userId,
      },
    });
  };
