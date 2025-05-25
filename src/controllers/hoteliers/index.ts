import type { HoteliersService } from "../../services/hoteliers";

import { create } from "./hotelier.create.controller";
import { deleter } from "./hotelier.delete.controller";
import { get } from "./hotelier.get.controller";
import { getById } from "./hotelier.getById.controller";
import { update } from "./hotelier.update.controller";

export const HotelierController = (hoteliersService: HoteliersService) => ({
    getHoteliersController: get(hoteliersService),
    getHotelierByIdController: getById(hoteliersService),
    createHotelierController: create(hoteliersService),
    updateHotelierController: update(hoteliersService),
    deleteHotelierController: deleter(hoteliersService),
})