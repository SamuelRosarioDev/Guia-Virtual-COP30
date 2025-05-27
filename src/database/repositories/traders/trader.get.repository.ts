import type { PrismaClient, Trader } from "@prisma/client";

export const get = (model: PrismaClient["trader"]) => async (): Promise<Trader[]> => {
	return model.findMany();
};
