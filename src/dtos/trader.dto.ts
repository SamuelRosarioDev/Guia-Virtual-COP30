import { z } from "zod";
import { StoreType } from "../enums/trader.enum";

const regexCPF = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
const regexCNPJ = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;

export const createTraderSchema = {
	storeName: z.string().min(1, "Nome da loja é obrigatório"),
	storeType: z.nativeEnum(StoreType),
	cpf: z.string().regex(regexCPF, "CPF inválido").min(1, "CPF é obrigatório"),
	cnpj: z.string().regex(regexCNPJ, "CNPJ inválido").optional(),
	address: z.string().min(1, "Endereço é obrigatório"),
	cep: z.string().min(1, "CEP é obrigatório"),
	userId: z.string().uuid("ID do usuário inválido"),
};
const createTraderObject = z.object(createTraderSchema);
export type TradersDataDTO = z.infer<typeof createTraderObject>;

export const idTraderSchema = { idTrader: z.string().uuid("ID do trader inválido") };
const idTraderObject = z.object(idTraderSchema);
export type IdTraderDTO = z.infer<typeof idTraderObject>;
