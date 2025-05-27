import type { Hotelier, PrismaClient } from "@prisma/client";
import type { HotelierEntity } from "../../../entities/hotelier.entity";

export const create =
	(model: PrismaClient["hotelier"]) =>
	async (hotelierEntity: HotelierEntity): Promise<Hotelier> => {
		return model.create({
			data: {
				hotelName: hotelierEntity.hotelName,
				totalQuantity: hotelierEntity.totalQuantity,
				quantityOccupied: hotelierEntity.quantityOccupied,
				cnpj: hotelierEntity.cnpj,
				link: hotelierEntity.link,
				address: hotelierEntity.address,
				cep: hotelierEntity.cep,
				userId: hotelierEntity.userId,
			},
		});
	};
