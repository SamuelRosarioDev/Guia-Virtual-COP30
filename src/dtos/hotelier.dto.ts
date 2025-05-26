import { z } from "zod";

const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

export const createHotelierSchema = {
	hotelName: z.string().min(1, "Nome do hotel é obrigatório"),
	totalQuantity: z.number().int().min(1, "Quantidade total deve ser maior que zero"),
	quantityOccupied: z.number().int().min(0, "Ocupados deve ser 0 ou mais"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").min(1, "CNPJ é obrigatório"),
	link: z.string().url("Link inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	cep: z.string().min(1, "CEP é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};
const createHotelierObject = z.object(createHotelierSchema);
export type HoteliersDataDTO = z.infer<typeof createHotelierObject>;

export const idHotelierSchema = { idHotelier: z.string().uuid("ID do hotelier inválido") };
const idHotelierObject = z.object(idHotelierSchema);
export type IdHotelierDTO = z.infer<typeof idHotelierObject>;