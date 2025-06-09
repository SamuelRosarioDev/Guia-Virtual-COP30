import { z } from "zod";
import { StoreType } from "../enums/trader.enum";

const regexCPF = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

export const createTraderSchema = z.object({
	storeName: z.string().min(1, "Nome da loja é obrigatório"),
	storeType: z.nativeEnum(StoreType),
	cpf: z.string().regex(regexCPF, "CPF inválido").min(1, "CPF é obrigatório"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	linkMap: z.string().min(1, "Link do mapa é obrigatório"),
	cep: z.string().min(1, "CEP é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
});
export type TradersDataDTO = z.infer<typeof createTraderSchema>;

export const idTraderSchema = z.object({ idTrader: z.string().uuid("ID do trader inválido") });
export type IdTraderDTO = z.infer<typeof idTraderSchema>;
