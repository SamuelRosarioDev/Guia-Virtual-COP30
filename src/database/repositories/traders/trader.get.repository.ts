import { sql } from "../../../config/sqlTag";
import { TraderEntity } from "../../../entities/trader.entity";
import { pool } from "../../connection";

export const get = () =>
	async (): Promise<TraderEntity[]> => {
		//[SQL]
		const query = sql`SELECT * FROM traders`;
		//[SQL]
		const result = await pool.query(query);

		return result.rows.map(row => new TraderEntity({
			idTrader: row.id_trader,
			storeName: row.store_name,
			storeType: row.store_type,
			cpf: row.cpf,
			cnpj: row.cnpj,
			address: row.address,
			linkMap: row.link_map,
			cep: row.cep,
			userId: row.userId,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		}));
	};
