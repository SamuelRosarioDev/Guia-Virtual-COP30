import { z } from "zod";

const regexCPF = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

// USERS / VISITORS
export const createUserSchema = {
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email").min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	phone: z.string(),
	country: z.string(),
	typeUser: z.enum(["HOTELEIRO", "COMERCIANTE", "VISITANTE"]),
};

const createUserObject = z.object(createUserSchema);
export type CreateUser = z.infer<typeof createUserObject>;

// TRADER
export const createTraderSchema = {
	storeName: z.string().min(1, "Nome da loja é obrigatório"),
	storeType: z.string().min(1, "Tipo de loja é obrigatório"),
	cpf: z.string().regex(regexCPF, "CPF inválido"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};
const createTraderObject = z.object(createTraderSchema);
export type TraderData = z.infer<typeof createTraderObject>;

// HOTELIER
export const createHotelierSchema = {
	hotelName: z.string().min(1, "Nome do hotel é obrigatório"),
	totalQuantity: z
		.number()
		.int()
		.min(1, "Quantidade total deve ser maior que zero"),
	quantityOccupied: z.number().int().min(0, "Ocupados deve ser 0 ou mais"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido"),
	link: z.string().url("Link inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};

const createHotelierObject = z.object(createHotelierSchema);
export type HotelierData = z.infer<typeof createHotelierObject>;
