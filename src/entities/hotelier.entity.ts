type HotelierProps = {
	id?: string;
	hotelName: string;
	totalQuantity: number;
	quantityOccupied: number;
	cnpj: string;
	link?: string;
	address: string;
	userId: string;
};

export class Hotelier {
	public id?: string;
	public hotelName: string;
	public totalQuantity: number;
	public quantityOccupied: number;
	public cnpj: string;
	public link?: string;
	public address: string;
	public userId: string;

	constructor({
		id,
		hotelName,
		totalQuantity,
		cnpj,
		link,
		address,
		userId,
	}: HotelierProps) {
		this.id = id;
		this.hotelName = hotelName;
		this.totalQuantity = totalQuantity;
		this.quantityOccupied = 0;
		this.cnpj = cnpj;
		this.link = link;
		this.address = address;
		this.userId = userId;
	}

	getAvailableRooms(): number {
		return this.totalQuantity - this.quantityOccupied;
	}
}
