import { z } from "zod";

const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

export const createHotelierSchema = z.object({
	hotelName: z.string().min(1, "Nome do hotel é obrigatório"),
	totalQuantity: z.number().int().min(1, "Quantidade total deve ser maior que zero"),
	quantityOccupied: z.number().int().min(0, "Ocupados deve ser 0 ou mais"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").min(1, "CNPJ é obrigatório"),
	address: z.string().min(1, "Endereço é obrigatório"),
	linkMap: z.string().min(1, "Link do mapa é obrigatório"),
	cep: z.string().min(1, "CEP é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
	createdAt: z.date().default(() => new Date()),
	updatedAt: z.date().default(() => new Date()),
});
export type HoteliersDataDTO = z.infer<typeof createHotelierSchema>;

export const idHotelierSchema = z.object({ idHotelier: z.string().uuid("ID do hotelier inválido") });
export type IdHotelierDTO = z.infer<typeof idHotelierSchema>;

export const updateHotelierSchema = z.object({
	hotelName: z.string().min(1, "Nome do hotel é obrigatório"),
	totalQuantity: z.number().int().min(1, "Quantidade total deve ser maior que zero"),
	quantityOccupied: z.number().int().min(0, "Ocupados deve ser 0 ou mais"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").min(1, "CNPJ é obrigatório"),
	address: z.string().min(1, "Endereço é obrigatório"),
	linkMap: z.string().min(1, "Link do mapa é obrigatório"),
	cep: z.string().min(1, "CEP é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
	updatedAt: z.date().default(() => new Date()),
});

export type UpdateHotelierDTO = z.infer<typeof updateHotelierSchema>
