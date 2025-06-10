import { create } from "./hotelier.create.repository";
import { remove } from "./hotelier.delete.repository";
import { get } from "./hotelier.get.repository";
import { getById, getUserOnHotelierById } from "./hotelier.getById.repository";
import { update } from "./hotelier.update.repository";

export const createHoteliersRepository = () => {
	return {
		createHotelierRepository: create(),
		getHotelierByIdRepository: getById(),
		getUserOnHotelierByIdRepository: getUserOnHotelierById(),
		deleteHotelierRepository: remove(),
		updateHotelierRepository: update(),
		getHotelierRepository: get(),
	};
};

export type HotelierRepository = ReturnType<typeof createHoteliersRepository>;
