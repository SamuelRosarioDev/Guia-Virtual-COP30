import { PrismaClient } from "@prisma/client";
import { createUsersRepository } from "../database/repositories/users";
import { UsersService } from "../services/users";

const prisma = new PrismaClient();

class UsersFactoryInternal {
	private usersServiceInstance: UsersService | null = null;

	getServiceInstance(): UsersService {
		if (this.usersServiceInstance) {
			return this.usersServiceInstance;
		}

		const repository = createUsersRepository(prisma.user);
		const service = UsersService(repository);
		this.usersServiceInstance = service;

		return service;
	}
}

export const UsersFactory = new UsersFactoryInternal();
