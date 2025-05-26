import type { Hotelier } from "@prisma/client";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import { HotelierEntity } from "../../entities/hotelier.entity";

export const update = (hotelierRepository: HotelierRepository) =>
    async (idHotelier: string, data: HotelierEntity): Promise<Hotelier> => {
        const hotelierEntity = new HotelierEntity(data);
        const updatedHotelier = await hotelierRepository.updateHotelierRepository(idHotelier, hotelierEntity);
        return updatedHotelier;
    }