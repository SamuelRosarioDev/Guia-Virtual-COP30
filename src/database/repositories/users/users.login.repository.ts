import type { PrismaClient, User } from "@prisma/client";

export const getUserByEmail = (model: PrismaClient["user"]) =>
    async (email: string): Promise<User | null> => {
        return model.findUnique({
            where: { email }
        });
    };
