import type { StoreType } from "../enums/trader.enum";
import type { TraderProps } from "../types/traderProps.type";

export class TraderEntity {
	public idTrader?: string;
	public storeName?: string;
	public storeType?: StoreType;
	public cpf?: string;
	public cnpj?: string;
	public address?: string;
	public linkMap?: string;
	public cep?: string;
	public userId?: string;
	public createdAt?: Date;
	public updatedAt?: Date;

	constructor(props: Partial<TraderProps>) {
		Object.assign(this, props);
	}

	getFormattedDocument(): string {
		if (this.cnpj) return this.cnpj;
		if (this.cpf) return this.cpf;
		throw new Error("No document found");
	}
}
