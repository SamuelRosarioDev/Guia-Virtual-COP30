import { type CountryType, UserType } from "../enums/users.enum";
import type { UserProps } from "../types/userProps.type";
import type { HotelierEntity } from "./hotelier.entity";
import type { TraderEntity } from "./trader.entity";

export class UserEntity {
  public idUser?: string;
  public name?: string;
  public email?: string;
  public password?: string;
  public phone?: string;
  public country?: CountryType;
  public typeUser?: UserType;
  public isAdmin?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  public hotelierData?: HotelierEntity;
  public traderData?: TraderEntity;

  constructor(props: Partial<UserProps>) {
    Object.assign(this, props);
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
