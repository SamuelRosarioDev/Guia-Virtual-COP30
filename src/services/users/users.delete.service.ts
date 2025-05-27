import type { User } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";

export const deleter =
	(usersRepository: UsersRepository) =>
	async (idUser: string): Promise<User> => {
		const user = await usersRepository.getUserByIdRepository(idUser);
		if (!user) throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);

		const deletedUser = await usersRepository.deleteUserRepository(idUser);
		return deletedUser;
	};
