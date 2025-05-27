import type { PrismaClient, Trader } from "@prisma/client";
import type { TraderEntity } from "../../../entities/trader.entity";

export const create =
	(model: PrismaClient["trader"]) =>
	async (traderEntity: TraderEntity): Promise<Trader> => {
		return model.create({
			data: {
				storeName: traderEntity.storeName,
				storeType: traderEntity.storeType,
				cpf: traderEntity.cpf,
				cnpj: traderEntity.cnpj,
				address: traderEntity.address,
				cep: traderEntity.cep,
				userId: traderEntity.userId,
			},
		});
	};
