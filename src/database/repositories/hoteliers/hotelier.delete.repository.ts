import type { Hotelier, PrismaClient } from "@prisma/client";

export const deleter =
	(model: PrismaClient["hotelier"]) =>
	async (idHotelier: string): Promise<Hotelier> => {
		return model.delete({
			where: { idHotelier },
		});
	};
