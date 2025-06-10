import { sql } from "../../../config/sqlTag";
import { TraderEntity } from "../../../entities/trader.entity";
import { pool } from "../../connection";

export const getById = () =>
	async (idTrader: string): Promise<TraderEntity | null> => {
		//[SQL]
		const query = sql`SELECT * FROM traders WHERE id_trader = $1`;
		//[SQL]
		const values = [idTrader];
		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];
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
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		});
	};


export const getUserOnTraderById = () =>
  async (userId: string): Promise<TraderEntity | null> => {
    const query = sql`SELECT * FROM traders WHERE user_id = $1`;
    const values = [userId];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) return null;

    const row = result.rows[0];
    return new TraderEntity({
      idTrader: row.id_trader,
      storeName: row.store_name,
      storeType: row.store_type,
      cpf: row.cpf,
      cnpj: row.cnpj,
      address: row.address,
      linkMap: row.link_map,
      cep: row.cep,
      userId: row.user_id,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    });
  };