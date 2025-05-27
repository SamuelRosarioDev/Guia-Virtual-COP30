import type { Hotelier, PrismaClient } from "@prisma/client";

export const getById =
	(model: PrismaClient["hotelier"]) =>
	async (idHotelier: string): Promise<Hotelier | null> => {
		return model.findUnique({
			where: { idHotelier },
		});
	};

export const getUserOnHotelierById =
	(model: PrismaClient["hotelier"]) =>
	async (userId: string): Promise<Hotelier | null> => {
		return model.findUnique({
			where: { userId },
		});
	};
