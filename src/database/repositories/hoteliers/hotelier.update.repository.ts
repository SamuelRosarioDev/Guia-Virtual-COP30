import type { Hotelier, PrismaClient } from "@prisma/client";

export const update =
	(model: PrismaClient["hotelier"]) =>
	async (idHotelier: string, hotelierEntity: Partial<Hotelier>): Promise<Hotelier> => {
		return model.update({
			where: { idHotelier },
			data: {
				hotelName: hotelierEntity.hotelName,
				totalQuantity: hotelierEntity.totalQuantity,
				quantityOccupied: hotelierEntity.quantityOccupied,
				cnpj: hotelierEntity.cnpj,
				link: hotelierEntity.link,
				address: hotelierEntity.address,
			},
		});
	};
