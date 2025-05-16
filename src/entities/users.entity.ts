import type { Hotelier } from "./hotelier.entity";
import type { Trader } from "./trader.entity";

enum UserType {
	HOTELIER = "HOTELIER",
	TRADER = "TRADER",
	VISITOR = "VISITOR",
}

type UserProps = {
	_id?: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	country: string;
	typeUser: UserType;

	hotelierData?: Hotelier;
	traderData?: Trader;
};

export class User {
	public _id?: string;
	public name: string;
	public email: string;
	public password: string;
	public phone: string;
	public country: string;
	public typeUser: UserType;

	public hotelierData?: Hotelier;
	public traderData?: Trader;

	constructor({
		_id,
		name,
		email,
		password,
		phone,
		country,
		typeUser,
		hotelierData,
		traderData,
	}: UserProps) {
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
		return (
			this.typeUser === UserType.HOTELIER && this.hotelierData !== undefined
		);
	}

	isTrader(): boolean {
		return this.typeUser === UserType.TRADER && this.traderData !== undefined;
	}

	isVisitor(): boolean {
		return this.typeUser === UserType.VISITOR;
	}
}
