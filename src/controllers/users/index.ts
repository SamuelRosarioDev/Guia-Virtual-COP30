import type { UsersService } from "../../services/users";
import { create } from "./users.create.controller";
import { get } from "./users.get.controller";
import { getById } from "./users.getById.controller";
import { update } from "./users.update.controller";
import { deleter } from "./users.delete.controller";

export const UsersController = (usersService: UsersService) => ({
    createUserController: create(usersService),
    getUsersController: get(usersService),
    getUserByIdController: getById(usersService),
    updateUserController: update(usersService),
    deleteUserController: deleter(usersService),
});
