import type { HotelierRepository } from "../../database/repositories/hoteliers";
import type { UsersRepository } from "../../database/repositories/users";
import { create } from "./hotelier.create.service";
import { deleter } from "./hotelier.delete.service";
import { get } from "./hotelier.get.service";
import { getById } from "./hotelier.getById.service";
import { update } from "./hotelier.update.service";

export const HoteliersService = (usersRepository: UsersRepository, hotelierRepository: HotelierRepository) => ({
    createHotelierService: create(usersRepository, hotelierRepository),
    deleteHotelierService: deleter(hotelierRepository),
    updateHotelierService: update(hotelierRepository),
    getHotelierService: get(hotelierRepository),
    getHotelierByIdService: getById(hotelierRepository),
});

export type HoteliersService = ReturnType<typeof HoteliersService>;