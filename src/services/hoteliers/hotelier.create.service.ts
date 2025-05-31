import { StatusCodes } from "http-status-codes";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import type { UsersRepository } from "../../database/repositories/users";
import type { HoteliersDataDTO } from "../../dtos/hotelier.dto";
import { HotelierEntity } from "../../entities/hotelier.entity";
import { AppError } from "../../errors/app.error";

export const create =
	(usersRepository: UsersRepository, hotelierRepository: HotelierRepository) =>
	async ({ address, cnpj, hotelName, link, totalQuantity, quantityOccupied, userId, cep }: HoteliersDataDTO) => {
		const foundUser = await usersRepository.getUserByIdRepository(userId);
		//Verifica se o usuário existe
		if (!foundUser) throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);

		//Verifica se o usuário é do tipo HOTELIER
		if (foundUser.typeUser !== "HOTELIER") throw new AppError("Usuário não possui o tipo HOTELIER", StatusCodes.FORBIDDEN);

		const foundHotelier = await hotelierRepository.getUserOnHotelierByIdRepository(userId);
		//Verifica se o HOTELIER já existe
		if (foundHotelier) throw new AppError("Usuário já possui um hotelier cadastrado", StatusCodes.BAD_REQUEST);

		const hotelierEntity = new HotelierEntity({ hotelName, cnpj, address, link, totalQuantity, quantityOccupied, userId, cep });
		const createdHotelier = await hotelierRepository.createHotelierRepository(hotelierEntity);
		return createdHotelier;
	};
