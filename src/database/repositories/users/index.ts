import type { PrismaClient } from "@prisma/client";
import { create } from "./users.create.repository";
import { deleter } from "./users.delete.repository";
import { get } from "./users.get.repository";
import { getById } from "./users.getById.repository";
import { getUserByLogin } from "./users.login.repository";
import { update } from "./users.update.repository";

export const createUsersRepository = (model: PrismaClient["user"]) => {
	return {
		getUserByLoginRepository: getUserByLogin(model),
		createUserRepository: create(model),
		getUserByIdRepository: getById(model),
		getUsersRepository: get(model),
		updateUserRepository: update(model),
		deleteUserRepository: deleter(model),
	};
};

export type UsersRepository = ReturnType<typeof createUsersRepository>;
