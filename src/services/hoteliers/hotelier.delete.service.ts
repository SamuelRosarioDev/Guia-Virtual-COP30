import type { Hotelier } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { AppError } from "../../errors/app.error";

export const deleter =
	(hotelierRepository: HotelierRepository) =>
	async (idHotelier: string): Promise<Hotelier> => {
		const hotelier = await hotelierRepository.getHotelierByIdRepository(idHotelier);
		if (!hotelier) throw new AppError("Hoteleiro não encontrado", StatusCodes.NOT_FOUND);

		const deletedHotelier = await hotelierRepository.deleteHotelierRepository(idHotelier);
		return deletedHotelier;
	};
