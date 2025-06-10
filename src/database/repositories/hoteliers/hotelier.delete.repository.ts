import { sql } from "../../../config/sqlTag";
import { HotelierEntity } from "../../../entities/hotelier.entity";
import { pool } from "../../connection";

export const remove = () =>
	async (idHotelier: string): Promise<HotelierEntity | null> => {
		const query = sql`
			DELETE FROM hoteliers
			WHERE id_hotelier = $1
			RETURNING id_hotelier, hotel_name, total_quantity, quantity_occupied, cnpj, link_map, address, cep, "createdAt", "updatedAt";
		`

		const result = await pool.query(query, [idHotelier]);
		if (result.rowCount === 0) return null;
		const row = result.rows[0]

		return new HotelierEntity({
			hotelName: row.hotel_name,
			totalQuantity: row.total_quantity,
			quantityOccupied: row.quantity_occupied,
			cnpj: row.cnpj,
			linkMap: row.link_map,
			address: row.address,
			cep: row.cep,
			userId: row.userId,
		})
	};
