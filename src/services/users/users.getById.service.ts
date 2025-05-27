import type { User } from "@prisma/client";
import type { UsersRepository } from "../../database/repositories/users";

export const getById =
	(usersRepository: UsersRepository) =>
	async (idUser: string): Promise<User | null> => {
		const user = await usersRepository.getUserByIdRepository(idUser);
		return user;
	};
