import { StatusCodes } from "http-status-codes";
import type { HotelierRepository } from "../../database/repositories/hoteliers";
import type { UsersRepository } from "../../database/repositories/users";
import type { HoteliersDataDTO } from "../../dtos/hotelier.dto";
import { HotelierEntity } from "../../entities/hotelier.entity";
import { AppError } from "../../errors/app.error";

export const create =
	(usersRepository: UsersRepository, hotelierRepository: HotelierRepository) =>
	async ({ address, cnpj, hotelName, totalQuantity, quantityOccupied, userId, cep, linkMap }: HoteliersDataDTO) => {
		const foundUser = await usersRepository.getUserByIdRepository(userId);
		if (!foundUser) throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);

		if (foundUser.typeUser !== "HOTELIER") throw new AppError("Usuário não possui o tipo HOTELIER", StatusCodes.FORBIDDEN);

		const foundHotelier = await hotelierRepository.getUserOnHotelierByIdRepository(userId);
		if (foundHotelier) throw new AppError("Usuário já possui um hotelier cadastrado", StatusCodes.BAD_REQUEST);

		const hotelierEntity = new HotelierEntity({ hotelName, cnpj, address, totalQuantity, quantityOccupied, userId, cep, linkMap });
		const createdHotelier = await hotelierRepository.createHotelierRepository(hotelierEntity);
		return createdHotelier;
	};
