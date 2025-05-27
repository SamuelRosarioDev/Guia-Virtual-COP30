import type { UsersRepository } from "../../database/repositories/users";
import { create } from "./users.create.service";
import { get } from "./users.get.service";
import { getById } from "./users.getById.service";
import { update } from "./users.update.service";
import { deleter } from "./users.delete.service";
import { loginUser } from "./users.login.service";

export const UsersService = (usersRepository: UsersRepository) => ({
  loginService: loginUser(usersRepository),
  createUserService: create(usersRepository),
  getUsersService: get(usersRepository),
  getUserByIdService: getById(usersRepository),
  updateUserService: update(usersRepository),
  deleteUserService: deleter(usersRepository),
});

export type UsersService = ReturnType<typeof UsersService>;
