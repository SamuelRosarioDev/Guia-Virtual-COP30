import type { HotelierProps } from "../types/hotelierProps.type";

export class HotelierEntity {
	public _id?: string;
	public hotelName?: string;
	public totalQuantity?: number;
	public quantityOccupied?: number;
	public cnpj?: string;
	public link?: string;
	public address?: string;
	public linkMap?: string; 
	public cep?: string;
	public userId?: string;

	constructor(props: Partial<HotelierProps>) {
		Object.assign(this, props);
	}

	getAvailableRooms(): number {
		const total = this.totalQuantity ?? 0;
		const occupied = this.quantityOccupied ?? 0;
		return total - occupied;
	}
}
