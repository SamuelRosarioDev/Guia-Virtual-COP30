import type { UserEntity } from "../../entities/users.entity";
import type { PrismaClient, User } from "@prisma/client";
import type { UserType } from "../../enums/users.enum";

export class UsersRepository {
  constructor(private model: PrismaClient["user"]) {}

  async create(userEntity: UserEntity): Promise<User> {
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

  async findById(idUser: string): Promise<User | null> {
    return this.model.findUnique({
      where: { idUser },
    });
  }

  async index(): Promise<User[]> {
    return this.model.findMany();
  }
  
  async update(idUser: string, userEntity: UserEntity): Promise<User> {
    return this.model.update({
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
  }
  async delete(idUser: string): Promise<User> {
    return this.model.delete({
      where: { idUser },
    });
  }
}
