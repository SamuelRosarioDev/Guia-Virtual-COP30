import { create } from "./users.create.repository";
import { remove } from "./users.delete.repository";
import { get } from "./users.get.repository";
import { getById } from "./users.getById.repository";
import { getUserByLogin } from "./users.login.repository";
import { update } from "./users.update.repository";

export const createUsersRepository= () => {
	return {
		getUserByLoginRepository: getUserByLogin(),
		createUserRepository: create(),
		getUserByIdRepository: getById(),
		getUsersRepository: get(),
		updateUserRepository: update(),
		removeUserRepository: remove(),
	};
};

export type UsersRepository = ReturnType<typeof createUsersRepository>;
