import { sql } from "../../../config/sqlTag";
import { UserEntity } from "../../../entities/users.entity";
import { pool } from "../../connection";

export const getUserByLogin = () =>
	async (email: string): Promise<UserEntity | null> => {
		//[SQL]
		const query = sql`SELECT * FROM users WHERE email = $1`;
		//[SQL]
		const values = [email];
		const result = await pool.query(query, values);

		if (result.rowCount === 0) return null;

		const row = result.rows[0];
		return new UserEntity({
			idUser: row.id_user,
			name: row.name,
			email: row.email,
			password: row.password,
			phone: row.phone,
			country: row.country,
			typeUser: row.type_user,
			isAdmin: row.is_admin,
			createdAt: row.createdAt,
			updatedAt: row.updatedAt,
		});
	};
