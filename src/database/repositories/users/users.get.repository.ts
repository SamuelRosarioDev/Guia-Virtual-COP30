import type { PrismaClient, User } from "@prisma/client";

export const get = (model: PrismaClient["user"]) =>
    async (): Promise<User[]> => {
        return model.findMany();
    };
