import { UserType } from "../enums/users.enum";

export interface AuthUser {
  idUser: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  typeUser: UserType;
  isAdmin: boolean;
  hotelier?: {
    idHotelier: string;
    hotelName: string;
    totalQuantity: number;
    quantityOccupied: number;
    cnpj: string;
    address: string;
    linkMap: string;
    cep: string;
  };
  trader?: {
    idTrader: string;
    storeName: string;
    storeType: string;
    cpf: string;
    cnpj?: string;
    linkMap: string;
    address: string;
    cep: string;
  };
}
