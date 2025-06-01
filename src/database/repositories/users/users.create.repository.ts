import type { PrismaClient, User } from "@prisma/client";
import type { UserEntity } from "../../../entities/users.entity";

export const create = (model: PrismaClient["user"]) =>
  async (userEntity: UserEntity): Promise<User> => {
    if (
      !userEntity.name ||
      !userEntity.email ||
      !userEntity.password ||
      !userEntity.phone ||
      !userEntity.country ||
      !userEntity.typeUser
    ) {
      throw new Error("Missing required user fields");
    }

    return model.create({
      data: {
        name: userEntity.name,
        email: userEntity.email,
        password: userEntity.password,
        phone: userEntity.phone,
        country: userEntity.country,
        typeUser: userEntity.typeUser,
        isAdmin: userEntity.isAdmin
      },
    });
  };
