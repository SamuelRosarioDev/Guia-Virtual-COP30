import type { StoreType } from "../enums/trader.enum";

export type TraderProps = {
	_id?: string;
	storeName: string;
	storeType: StoreType;
	cpf: string;
	cnpj?: string;
	address: string;
	cep: string;
	userId: string;
};
