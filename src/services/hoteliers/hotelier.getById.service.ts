import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import type { HotelierEntity } from "../../entities/hotelier.entity";

export const getById =
	(hotelierRepository: HotelierRepository) =>
	async (idHotelier: string): Promise<HotelierEntity> => {
		const hotelier = await hotelierRepository.getHotelierByIdRepository(idHotelier);
		// Verifica se o hotelier existe
		if (!hotelier) throw new AppError("Hotelier not found", StatusCodes.NOT_FOUND);
		return hotelier;
	};
