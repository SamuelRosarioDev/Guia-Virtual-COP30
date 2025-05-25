import type { UserEntity } from "../../../entities/users.entity";
import type { PrismaClient, User } from "@prisma/client";

export const create = (model: PrismaClient["user"]) =>
    async (userEntity: UserEntity): Promise<User> => {
        return model.create({
            data: {
                name: userEntity.name,
                email: userEntity.email,
                password: userEntity.password,
                phone: userEntity.phone,
                country: userEntity.country,
                typeUser: userEntity.typeUser,
            },
        });
    };
