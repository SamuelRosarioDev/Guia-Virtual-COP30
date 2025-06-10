import { sql } from "../../../config/sqlTag";
import { HotelierEntity } from "../../../entities/hotelier.entity";
import { pool } from "../../connection";

export const getById = () =>
	async (idTrader: string): Promise<HotelierEntity | null> => {
		//[SQL]
		const query = sql`SELECT * FROM hoteliers WHERE id_hotelier = $1;`;
		//[SQL]
		const values = [idTrader];
		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];
		return new HotelierEntity({
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
		});
	};


export const getUserOnHotelierById = () =>
	async (userId: string): Promise<HotelierEntity | null> => {
		const query = sql`SELECT * FROM traders WHERE user_id = $1`;
		const values = [userId];

		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];
		return new HotelierEntity({
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
		});
	};