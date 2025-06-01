import type { PrismaClient, User } from "@prisma/client";
import type { UserEntity } from "../../../entities/users.entity";

export const update =
    (model: PrismaClient["user"]) =>
    async (idUser: string, userEntity: UserEntity): Promise<User> => {
        const updateData: Partial<User> = {};

        if (userEntity.name) updateData.name = userEntity.name;
        if (userEntity.email) updateData.email = userEntity.email;
        if (userEntity.password) updateData.password = userEntity.password;
        if (userEntity.phone) updateData.phone = userEntity.phone;
        if (userEntity.country) updateData.country = userEntity.country;
        if (userEntity.typeUser) updateData.typeUser = userEntity.typeUser;

        return model.update({
            where: { idUser },
            data: updateData,
        });
    };
