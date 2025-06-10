import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import {updateHotelierSchema, type UpdateHotelierDTO } from "../../dtos/hotelier.dto";
import { HotelierEntity } from "../../entities/hotelier.entity";

export const update = (hotelierRepository: HotelierRepository) =>
	async (idHotelier: string, data: UpdateHotelierDTO): Promise<HotelierEntity> => {
		try {
			const parsedData = updateHotelierSchema.parse(data);

			const originalHotelier = await hotelierRepository.getHotelierByIdRepository(idHotelier)
            if (!originalHotelier) throw new AppError("Hotelier not found", StatusCodes.NOT_FOUND);
			
			const updateHotelierData = {
				...originalHotelier,
				...parsedData,
			}
			
			const hotelierEntity = new HotelierEntity(updateHotelierData)

			if (!hotelierEntity) throw new AppError("Hotelier not found or update failed", StatusCodes.NOT_FOUND);
            
			const updatedHotelier = await hotelierRepository.updateHotelierRepository(idHotelier, hotelierEntity);
			if (!updatedHotelier) throw new AppError("Hotelier not found or update failed", StatusCodes.NOT_FOUND);
			return updatedHotelier;
		} catch (error) {
            throw error;
		}

	};
