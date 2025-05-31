import type { User } from "@prisma/client";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const getById = (usersRepository: UsersRepository) =>
	async (idUser: string): Promise<User> => {
		const user = await usersRepository.getUserByIdRepository(idUser);
		// Verifica se o usuário existe
		if (!user) throw new AppError("User not found", StatusCodes.NOT_FOUND);
			
		return user;
	};
