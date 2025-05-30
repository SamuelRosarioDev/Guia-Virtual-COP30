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
			try {
				// Verify password length before any other operation
				if (password.length < 6) {
					throw new AppError("Password must be at least 6 characters long", StatusCodes.BAD_REQUEST);
				}

				const foundUser = await usersRepository.getUserByEmailRepository(email);
				if (foundUser) {
					throw new AppError("User already exists", StatusCodes.BAD_REQUEST);
				}

				// BCRYPT HASHING
				const saltRounds = Number.parseInt(process.env.SALT_ROUNDS || "10", 10);
				const hashedPassword = await bcrypt.hash(password, saltRounds);

				const userEntity = new UserEntity({
					name,
					email,
					password: hashedPassword,
					phone,
					country,
					typeUser,
					isAdmin,
				});

				const createdUser = await usersRepository.createUserRepository(userEntity);
				return createdUser;

			} catch (error) {
				if (error instanceof AppError) {
					throw error; // already handled, pass through
				}

				throw new AppError("Error creating user", StatusCodes.INTERNAL_SERVER_ERROR);
			}
		};