import type { HotelierEntity } from "../entities/hotelier.entity";
import type { TraderEntity } from "../entities/trader.entity";
import type { UserType } from "../enums/users.enum";
import type { CountryType } from "../enums/users.enum";

export type UserProps = {
	idUser?: string;
	name: string;
	email: string;
	password: string;
	phone: string;
	country: CountryType;
	typeUser: UserType;
	isAdmin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;

	hotelierData?: HotelierEntity;
	traderData?: TraderEntity;
};
