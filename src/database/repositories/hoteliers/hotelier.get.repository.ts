import type { Hotelier, PrismaClient } from "@prisma/client";

export const get = (model: PrismaClient["hotelier"]) => async (): Promise<Hotelier[]> => {
	return model.findMany();
};
