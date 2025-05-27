import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import type { UsersDataDTO } from "../../dtos/users.dto";
import { UserEntity } from "../../entities/users.entity";
import { AppError } from "../../errors/app.error";
dotenv.config();

export const create =
	(usersRepository: UsersRepository) =>
	async ({ name, email, password, phone, country, typeUser, isAdmin }: UsersDataDTO): Promise<User> => {
		const foundUser = await usersRepository.getUserByIdRepository(email);
		if (foundUser) throw new AppError("Usuário já existe", StatusCodes.BAD_REQUEST);
		// BCRYPT HASHING
		const saltRounds = Number.parseInt(process.env.SALT_ROUNDS || "10", 10);
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const userEntity = new UserEntity({ name, email, password: hashedPassword, phone, country, typeUser, isAdmin });
		const createdUser = await usersRepository.createUserRepository(userEntity);
		return createdUser;
	};
