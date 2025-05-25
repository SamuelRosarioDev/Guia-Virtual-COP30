import type { Hotelier } from "@prisma/client";
import type { HotelierRepository } from "../../database/repositories/hoteliers";

export const getById = (hotelierRepository: HotelierRepository) =>
    async (idHotelier: string): Promise<Hotelier | null> => {
        const hotelier = await hotelierRepository.getHotelierByIdRepository(idHotelier);
        return hotelier;
    };