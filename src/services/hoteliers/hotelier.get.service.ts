import type { HotelierRepository } from "../../database/repositories/hoteliers";
import type { HotelierEntity } from "../../entities/hotelier.entity";

export const get = (hotelierRepository: HotelierRepository) => async (): Promise<HotelierEntity[]> => {
	const hoteliers = await hotelierRepository.getHotelierRepository();
	return hoteliers;
};
