import type { PrismaClient, User } from "@prisma/client";
import type { UserEntity } from "../../../entities/users.entity";

export const update =
	(model: PrismaClient["user"]) =>
	async (idUser: string, userEntity: UserEntity): Promise<User> => {
		return model.update({
			where: { idUser },
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
