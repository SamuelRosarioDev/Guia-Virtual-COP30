import type { StoreType } from "../enums/trader.enum";

export type TraderProps = {
	idTrader?: string;
	storeName: string;
	storeType: StoreType;
	cpf: string;
	cnpj?: string;
	address: string;
	cep: string;
	linkMap: string;
	userId: string;
};
