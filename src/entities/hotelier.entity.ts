import type { HotelierProps } from "../types/hotelierProps.type";

export class HotelierEntity {
	public idHotelier?: string;
	public hotelName?: string;
	public totalQuantity?: number;
	public quantityOccupied?: number;
	public cnpj?: string;
	public address?: string;
	public linkMap?: string;
	public cep?: string;
	public userId?: string;
	public createdAt?: Date;
	public updatedAt?: Date;

	constructor(props: Partial<HotelierProps>) {
		Object.assign(this, props);
	}

	getAvailableRooms(): number {
		const total = this.totalQuantity ?? 0;
		const occupied = this.quantityOccupied ?? 0;
		return total - occupied;
	}
}
