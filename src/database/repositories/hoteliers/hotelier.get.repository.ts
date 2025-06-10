import { sql } from "../../../config/sqlTag";
import { HotelierEntity } from "../../../entities/hotelier.entity";
import { pool } from "../../connection";

export const get = () =>
	async (): Promise<HotelierEntity[]> => {
		//[SQL]
		const query = sql`SELECT * FROM hoteliers;`;
		//[SQL]
		const result = await pool.query(query);

		return result.rows.map(row => new HotelierEntity({
			idHotelier: row.id_hotelier,
			hotelName: row.hotel_name,
			totalQuantity: row.total_quantity,
			quantityOccupied: row.quantity_occupied,
			cnpj: row.cnpj,
			linkMap: row.link_map,
			address: row.address,
			cep: row.cep,
			userId: row.userId,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		}));
	};
