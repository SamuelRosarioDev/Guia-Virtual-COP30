import type { PrismaClient } from "@prisma/client";
import { create } from "./users.create.repository";
import { getById } from "./users.getById.repository"; 
import { get } from "./users.get.repository";
import { update } from "./users.update.repository"; 
import { deleter } from "./users.delete.repository";

export const createUsersRepository = (model: PrismaClient["user"]) => {
  return {
    createUserRepository: create(model),
    getUserByIdRepository: getById(model),
    getUsersRepository: get(model),
    updateUserRepository: update(model),
    deleteUserRepository: deleter(model),
  };
};

export type UsersRepository = ReturnType<typeof createUsersRepository>;