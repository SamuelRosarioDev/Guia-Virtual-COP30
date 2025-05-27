import type { PrismaClient, Trader } from "@prisma/client";

export const getById =
	(model: PrismaClient["trader"]) =>
	async (idTrader: string): Promise<Trader | null> => {
		return model.findUnique({
			where: { idTrader },
		});
	};

export const getUserOnTraderById =
	(model: PrismaClient["trader"]) =>
	async (userId: string): Promise<Trader | null> => {
		return model.findUnique({
			where: { userId },
		});
	};
