import type { UsersService } from "../../services/users.service";
import { createUser } from "./create.users.controller";
import { getUsers } from "./get.users.controller";
import { getUserById } from "./getById.users.controller";
import { updateUser } from "./update.users.controller";
import { deleteUser } from "./delete.users.controller";

export const UsersController = (usersService: UsersService) => ({
  create: createUser(usersService),
  get: getUsers(usersService),
  getById: getUserById(usersService),
  update: updateUser(usersService),
  delete: deleteUser(usersService),
});
