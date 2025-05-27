import { type CountryType, UserType } from "../enums/users.enum";
import type { UserProps } from "../types/userProps.type";
import type { HotelierEntity } from "./hotelier.entity";
import type { TraderEntity } from "./trader.entity";

export class UserEntity {
	public _id?: string;
	public name: string;
	public email: string;
	public password: string;
	public phone: string;
	public country: CountryType;
	public typeUser: UserType;
	public isAdmin?: boolean;

	public hotelierData?: HotelierEntity;
	public traderData?: TraderEntity;

	constructor({ _id, name, email, password, phone, country, typeUser, hotelierData, traderData }: UserProps) {
		this._id = _id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.country = country;
		this.typeUser = typeUser;
		this.hotelierData = hotelierData;
		this.traderData = traderData;
	}

	isHotelier(): boolean {
		return this.typeUser === UserType.HOTELIER && this.hotelierData !== undefined;
	}
	isTrader(): boolean {
		return this.typeUser === UserType.TRADER && this.traderData !== undefined;
	}
	isVisitor(): boolean {
		return this.typeUser === UserType.VISITOR;
	}
}
