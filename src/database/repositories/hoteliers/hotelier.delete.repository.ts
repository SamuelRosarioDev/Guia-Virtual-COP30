import type { PrismaClient, Hotelier } from "@prisma/client";

export const deleter = (model: PrismaClient["hotelier"]) =>
    async (idHotelier: string): Promise<Hotelier> => {
        return model.delete({
            where: { idHotelier },
        });
    };