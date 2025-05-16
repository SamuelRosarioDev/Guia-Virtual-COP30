import type { UserEntity } from "../../entities/users.entity";
import type { PrismaClient, Prisma } from "@prisma/client";
import type { UserType } from "../../enums/users.enum";

export class UsersRepository {
  constructor(private model: PrismaClient["user"]) {}

  async create(userEntity: UserEntity): Promise<PrismaClient["user"]> {
    return this.model.create({
      data: {
        name: userEntity.name,
        email: userEntity.email,
        password: userEntity.password,
        phone: userEntity.phone,
        country: userEntity.country,
        typeUser: userEntity.typeUser,
      },
    });
  }

  async findByTypeUser(typeUser: UserType): Promise<PrismaClient["user"]> {
    return this.model.findMany({
      where: { typeUser },
    });
  }

  async findById(idUser: string): Promise<PrismaClient["user"] | null> {
    return this.model.findUnique({
      where: { idUser },
    });
  }

  async index(): Promise<PrismaClient["user"]> {
    return this.model.findMany();
  }
}
