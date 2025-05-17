import type { PrismaClient, User } from "@prisma/client";

export const deleter = (model: PrismaClient["user"]) => 
  async (idUser: string): Promise<User> => {
    return model.delete({
      where: { idUser },
    });
  };