import { z } from "zod";
import { UserType } from "../enums/users.enum";

const regexCPF = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

// USERS / VISITORS
export const createUserSchema = {
	name: z.string().min(1, "Nome é obrigatório"),
	email: z.string().email("Email invalido").min(1, "Email é obrigatório"),
	password: z.string().min(6, "Password deve ter no mínimo 6 caracteres"),
	phone: z.string(),
	country: z.string(),
	typeUser: z.nativeEnum(UserType),
};
const createUserObject = z.object(createUserSchema);
export type CreateUsersDTO = z.infer<typeof createUserObject>;

export const idUserSchema = ({
  idUser: z.string().uuid("ID do usuário inválido"),
});

// TRADER
export const createTraderSchema = {
	storeName: z.string().min(1, "Nome da loja é obrigatório"),
	storeType: z.string().min(1, "Tipo de loja é obrigatório"),
	cpf: z.string().regex(regexCPF, "CPF inválido").min(1, "CPF é obrigatório"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};
const createTraderObject = z.object(createTraderSchema);
export type TraderDataDTO = z.infer<typeof createTraderObject>;

// HOTELIER
export const createHotelierSchema = {
	hotelName: z.string().min(1, "Nome do hotel é obrigatório"),
	totalQuantity: z.number().int().min(1, "Quantidade total deve ser maior que zero"),
	quantityOccupied: z.number().int().min(0, "Ocupados deve ser 0 ou mais"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").min(1, "CNPJ é obrigatório"),
	link: z.string().url("Link inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};
const createHotelierObject = z.object(createHotelierSchema);
export type HotelierDataDTO = z.infer<typeof createHotelierObject>;
