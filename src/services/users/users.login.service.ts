import bcrypt from "bcryptjs";
import { AppError } from "../../errors/app.error";
import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import { gerarToken } from "../../utils/jwt.util";

type LoginParams = {
  email: string;
  password: string;
};

export const loginUser = (usersRepository: UsersRepository) =>
  async ({ email, password }: LoginParams) => {
    const user = await usersRepository.getUserByEmailRepository(email);
    if (!user) {
      throw new AppError("Usuário não encontrado", StatusCodes.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError("Credenciais inválidas", StatusCodes.UNAUTHORIZED);
    }

    return {
      _id: user.idUser,
      name: user.name,
      email: user.email,
      token: gerarToken
    };
  };
