import type { PrismaClient } from "@prisma/client";
import { getById, getUserOnHotelierById } from "./hotelier.getById.repository";
import { get } from "./hotelier.get.repository";
import { create } from "./hotelier.create.repository";
import { deleter } from "./hotelier.delete.repository";
import { update } from "./hotelier.update.repository";

export const createHoteliersRepository = (model: PrismaClient["hotelier"]) => {
    return {
        createHotelierRepository: create(model),
        getHotelierByIdRepository: getById(model),
        getUserOnHotelierByIdRepository: getUserOnHotelierById(model),
        deleteHotelierRepository: deleter(model),
        updateHotelierRepository: update(model),
        getHotelierRepository: get(model),
    };
};

export type HotelierRepository = ReturnType<typeof createHoteliersRepository>;