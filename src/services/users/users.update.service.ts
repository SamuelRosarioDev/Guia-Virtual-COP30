import type { User } from "@prisma/client";
import type { UsersRepository } from "../../database/repositories/users";
import { UserEntity } from "../../entities/users.entity";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";

export const update =
	(usersRepository: UsersRepository) =>
	async (idUser: string, data: UserEntity): Promise<User> => {
		const userEntity = new UserEntity(data);
		
		const updatedUser = await usersRepository.updateUserRepository(idUser, userEntity);
		if (!updatedUser) throw new AppError("User not found or update failed", StatusCodes.NOT_FOUND);
		
		return updatedUser;
	};
