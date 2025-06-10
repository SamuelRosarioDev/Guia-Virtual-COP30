import { pool } from "../../connection";
import { sql } from "../../../config/sqlTag";
import { HotelierEntity } from "../../../entities/hotelier.entity";

export const update = () =>
	async (idHotelier: string, traderEntity: HotelierEntity): Promise<HotelierEntity | null> => {
		//[SQL]
		const query = sql`
                UPDATE traders SET
                    hotel_name = COALESCE($2, hotel_name),
                    total_quantity = COALESCE($3, total_quantity),
                    quantity_occupied = COALESCE($4, quantity_occupied),
                    cnpj = COALESCE($5, cnpj),
                    address = COALESCE($6, address),
                    link_map = COALESCE($7, link_map),
                    cep = COALESCE($8, cep),
                    "updatedAt" = NOW()
                WHERE id_trader = $1
                RETURNING id_hotelier, hotel_name, total_quantity, quantity_occupied, cnpj, link_map, address, cep, "createdAt", "updatedAt";
            `;
		//[SQL]

		const values = [
			idHotelier,
			traderEntity.hotelName ?? null,
			traderEntity.totalQuantity ?? null,
			traderEntity.quantityOccupied ?? null,
			traderEntity.cnpj ?? null,
			traderEntity.address ?? null,
			traderEntity.linkMap ?? null,
			traderEntity.cep ?? null,
			traderEntity.updatedAt ?? null,
		];

		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];

		return new HotelierEntity({
			idHotelier: row.id_trader,
			hotelName: row.hotel_name,
			totalQuantity: row.total_quantity,
			quantityOccupied: row.quantity_occupied,
			cnpj: row.cnpj,
			address: row.address,
			linkMap: row.link_map,
			cep: row.cep,
			userId: row.userId,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		});
	};
