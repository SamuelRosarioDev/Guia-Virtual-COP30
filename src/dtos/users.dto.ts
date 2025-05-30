import { z } from "zod";
import { UserType } from "../enums/users.enum";
import { CountryType } from "../enums/users.enum";

export const createUserSchema = {
	name: z.string().min(1, "Nome é obrigatório"),
	email: z.string().email("Email invalido").min(1, "Email é obrigatório"),
	password: z.string().min(6, "Password deve ter no mínimo 6 caracteres"),
	phone: z.string(),
	country: z.nativeEnum(CountryType),
	isAdmin: z.boolean().default(false),
	typeUser: z.nativeEnum(UserType),
};
const createUserObject = z.object(createUserSchema);
export type UsersDataDTO = z.infer<typeof createUserObject>;

export const idUserSchema = {
	idUser: z.string().uuid("ID do usuário inválido"),
};

const idUserObject = z.object(idUserSchema);

export type IdUserDTO = z.infer<typeof idUserObject>;

export const loginSchema = ({
  email: z.string().email(),
  password: z.string().min(6 , "Password deve ter no mínimo 6 caracteres"),
});
