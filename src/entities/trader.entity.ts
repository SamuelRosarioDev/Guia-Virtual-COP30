import type { StoreType } from "../enums/trader.enum";
import type { TraderProps } from "../types/traderProps.type";

export class TraderEntity {
	public _id?: string;
	public storeName: string;
	public storeType: StoreType;
	public cpf: string;
	public cnpj?: string;
	public address: string;
	public userId: string;

	constructor({ _id, storeName, storeType, cpf, cnpj, address, userId }: TraderProps) {
		this._id = _id;
		this.storeName = storeName;
		this.storeType = storeType;
		this.cpf = cpf;
		this.cnpj = cnpj;
		this.address = address;
		this.userId = userId;
	}

	getFormattedDocument(): string {
		return this.cnpj ?? this.cpf;
	}
}
