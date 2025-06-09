import { pool } from "../../connection";
import { UserEntity } from "../../../entities/users.entity";
import { sql } from "../../../config/sqlTag";

export const update =
    () =>
        async (idUser: string, userEntity: UserEntity): Promise<UserEntity | null> => {
            //[SQL]
            const query = sql`
                UPDATE users SET
                    name = COALESCE($2, name),
                    email = COALESCE($3, email),
                    password = COALESCE($4, password),
                    phone = COALESCE($5, phone),
                    country = COALESCE($6, country),
                    type_user = COALESCE($7, type_user),
                    is_admin = COALESCE($8, is_admin),
                    "updatedAt" = NOW()
                WHERE id_user = $1
                RETURNING id_user, name, email, password, phone, country, type_user, is_admin, "createdAt", "updatedAt";
            `;
            //[SQL]

            const values = [
                idUser,
                userEntity.name ?? null,
                userEntity.email ?? null,
                userEntity.password ?? null,
                userEntity.phone ?? null,
                userEntity.country ?? null,
                userEntity.typeUser ?? null,
                userEntity.isAdmin ?? null,
            ];

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
