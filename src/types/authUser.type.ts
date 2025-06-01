export interface AuthUser {
  idUser: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  typeUser: "HOTELIER" | "TRADER" | "VISITOR";
  isAdmin: boolean;
  hotelier?: {
    idHotelier: string;
    hotelName: string;
    totalQuantity: number;
    quantityOccupied: number;
    cnpj: string;
    link?: string;
    address: string;
    cep: string;
  };
  trader?: {
    idTrader: string;
    storeName: string;
    storeType: string;
    cpf: string;
    cnpj?: string;
    address: string;
    cep: string;
  };
}
