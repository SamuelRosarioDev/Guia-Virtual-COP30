import type { HotelierProps } from '../types/hotelierProps.type';

export class HotelierEntity {
	public _id?: string;
	public hotelName: string;
	public totalQuantity: number;
	public quantityOccupied: number;
	public cnpj: string;
	public link?: string;
	public address: string;
	public userId: string;

	constructor({ _id, hotelName, totalQuantity, cnpj, link, address, userId }: HotelierProps) {
		this._id = _id;
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
