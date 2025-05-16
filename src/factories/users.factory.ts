import { PrismaClient } from "@prisma/client";
import { UsersRepository } from "../database/repositories/users.repository";
import { UsersService } from "../services/users.service";

const prisma = new PrismaClient();

class UsersFactoryInternal {
	private usersServiceInstance: UsersService | null = null;

	getServiceInstance(): UsersService {
		if (this.usersServiceInstance) {
			return this.usersServiceInstance;
		}

		const repository = new UsersRepository(prisma.user);
		const service = new UsersService(repository);
		this.usersServiceInstance = service;

		return service;
	}
}

export const UsersFactory = new UsersFactoryInternal();
