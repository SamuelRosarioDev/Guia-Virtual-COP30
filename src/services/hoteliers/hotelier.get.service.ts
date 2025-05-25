import type { Hotelier } from "@prisma/client";
import type { HotelierRepository } from "../../database/repositories/hoteliers";

export const get = (hotelierRepository: HotelierRepository) =>
    async (): Promise<Hotelier[]> => {
        const hoteliers = await hotelierRepository.getHotelierRepository();
        return hoteliers;
    };