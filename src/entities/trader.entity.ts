type TraderProps = {
	id?: string;
	storeName: string;
	storeType: string;
	cpf: string;
	cnpj?: string;
	address: string;
	userId: string;
};

export class TraderEntity {
	public id?: string;
	public storeName: string;
	public storeType: string;
	public cpf: string;
	public cnpj?: string;
	public address: string;
	public userId: string;

	constructor({
		id,
		storeName,
		storeType,
		cpf,
		cnpj,
		address,
		userId,
	}: TraderProps) {
		this.id = id;
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
