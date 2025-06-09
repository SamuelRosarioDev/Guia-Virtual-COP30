import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import type { UsersRepository } from "../../database/repositories/users";
import { AppError } from "../../errors/app.error";
import { gerarToken } from "../../utils/jwt.util";
import type { LoginProps } from "../../types/loginProps";

export const loginUser = (usersRepository: UsersRepository) =>
  async ({ email, password }: LoginProps) => {
    // Busca só pelo email
    const user = await usersRepository.getUserByLoginRepository(email);

    // Verifica se o usuário existe E tem senha definida
    if (!user || !user.password) {
      throw new AppError("Account does not exist", StatusCodes.NOT_FOUND);
    }

    // Compara a senha informada com a criptografada
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", StatusCodes.UNAUTHORIZED);
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
