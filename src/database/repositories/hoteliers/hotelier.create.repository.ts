import type { Hotelier, PrismaClient } from "@prisma/client";
import type { HotelierEntity } from "../../../entities/hotelier.entity";

export const create =
	(model: PrismaClient["hotelier"]) =>
		async (hotelierEntity: HotelierEntity): Promise<Hotelier> => {
			if (
				!hotelierEntity.hotelName ||
				hotelierEntity.totalQuantity === undefined ||
				hotelierEntity.quantityOccupied === undefined ||
				!hotelierEntity.cnpj ||
				!hotelierEntity.linkMap ||
				!hotelierEntity.address ||
				!hotelierEntity.cep ||
				!hotelierEntity.userId
			) {
				throw new Error("Missing required hotelier fields");
			}

			return model.create({
				data: {
					hotelName: hotelierEntity.hotelName,
					totalQuantity: hotelierEntity.totalQuantity,
					quantityOccupied: hotelierEntity.quantityOccupied,
					cnpj: hotelierEntity.cnpj,
					linkMap: hotelierEntity.linkMap,
					address: hotelierEntity.address,
					cep: hotelierEntity.cep,
					userId: hotelierEntity.userId,
				},
			});
		};
