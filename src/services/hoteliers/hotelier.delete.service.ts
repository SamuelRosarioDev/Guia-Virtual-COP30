import { StatusCodes } from "http-status-codes";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { AppError } from "../../errors/app.error";
import type { HotelierEntity } from "../../entities/hotelier.entity";

export const remove =
	(hotelierRepository: HotelierRepository) =>
	async (idHotelier: string): Promise<HotelierEntity> => {
		const hotelier = await hotelierRepository.getHotelierByIdRepository(idHotelier);
		// Verifica se o hotelier existe
		if (!hotelier) throw new AppError("Hotelier not found", StatusCodes.NOT_FOUND);

		const deletedHotelier = await hotelierRepository.deleteHotelierRepository(idHotelier);
		return deletedHotelier!;
	};
