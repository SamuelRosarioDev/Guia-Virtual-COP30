import type { PrismaClient, User } from "@prisma/client";

export const getById = (model: PrismaClient["user"]) =>
    async (idUser: string): Promise<User | null> => {
        return model.findUnique({
            where: { idUser },
        });
    };
