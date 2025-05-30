import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import { gerarToken } from "../../utils/jwt.util";
import type { LoginProps } from "../../types/loginProps";

export const loginUser = (usersRepository: UsersRepository) =>
	async ({ email, password }: LoginProps) => {
		const user = await usersRepository.getUserByEmailRepository(email);
		if (!user) {
			throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			throw new AppError("Credenciais inválidas", StatusCodes.UNAUTHORIZED);
		}

		const token = gerarToken({
			idUser: user.idUser,
			email: user.email,
			name: user.name,
			typeUser: user.typeUser,
		});

		return {
			token,
			_id: user.idUser,
			name: user.name,
			email: user.email,
			typeUser: user.typeUser,
		};
	};
