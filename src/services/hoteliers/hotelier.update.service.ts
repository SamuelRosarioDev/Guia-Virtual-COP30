import type { Hotelier } from "@prisma/client";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { HotelierEntity } from "../../entities/hotelier.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const update =
	(hotelierRepository: HotelierRepository) =>
	async (idHotelier: string, data: HotelierEntity): Promise<Hotelier> => {
		const hotelierEntity = new HotelierEntity(data);
		const updatedHotelier = await hotelierRepository.updateHotelierRepository(idHotelier, hotelierEntity);
		// Verifica se o hotelier existe
		if (!updatedHotelier) throw new AppError("Hotelier not found or update failed", StatusCodes.NOT_FOUND);
		return updatedHotelier;
	};
