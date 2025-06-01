import type { PrismaClient, User } from "@prisma/client";

export const getUserByLogin = (model: PrismaClient["user"]) =>
	async (email: string): Promise<User | null> => {
		return model.findUnique({
			where: { email },
		});
	};
