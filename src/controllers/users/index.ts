import type { UsersService } from "../../services/users";
import { create } from "./users.create.controller";
import { deleter } from "./users.delete.controller";
import { get } from "./users.get.controller";
import { getById } from "./users.getById.controller";
import { loginUser } from "./users.login.controller";
import { update } from "./users.update.controller";

export const UsersController = (usersService: UsersService) => ({
	loginController: loginUser(usersService),
	createUserController: create(usersService),
	getUsersController: get(usersService),
	getUserByIdController: getById(usersService),
	updateUserController: update(usersService),
	deleteUserController: deleter(usersService),
});
