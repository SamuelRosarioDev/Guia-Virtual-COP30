import type { HotelierEntity } from "../entities/hotelier.entity";
import type { TraderEntity } from "../entities/trader.entity";
import type { UserType } from "../enums/users.enum";

export type UserProps = {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    typeUser: UserType;

    hotelierData?: HotelierEntity;
    traderData?: TraderEntity;
};
