import { sql } from "../../../config/sqlTag";
import { TraderEntity } from "../../../entities/trader.entity";
import { pool } from "../../connection";

export const remove = () =>
	async (idTrader: string): Promise<TraderEntity | null> => {
		const query = sql`
			DELETE FROM traders
			WHERE id_trader = $1
			RETURNING id_trader, store_name, store_type, cpf, cnpj, link_map, address, cep, "createdAt", "updatedAt"
		`

		const result = await pool.query(query, [idTrader]);
		if (result.rowCount === 0) return null;
		const row = result.rows[0]

		return new TraderEntity({
			idTrader: row.id_trader,
			storeName: row.store_name,
			storeType: row.store_type,
			cpf: row.cpf,
			cnpj: row.cnpj,
			address: row.address,
			linkMap: row.link_map,
			cep: row.cep,
			userId: row.userId,
		})
	};
