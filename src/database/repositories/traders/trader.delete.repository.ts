import type { PrismaClient, Trader } from "@prisma/client";

export const deleter =
	(model: PrismaClient["trader"]) =>
	async (idTrader: string): Promise<Trader> => {
		return model.delete({
			where: { idTrader },
		});
	};
