import { pool } from "../../connection";
import { UserEntity } from "../../../entities/users.entity";
import type { QueryResult } from "pg";
import { sql } from "../../../config/sqlTag";

export const create = () =>
    async ({ idUser, name, email, password, phone, country, typeUser, isAdmin, createdAt, updatedAt }: UserEntity): Promise<UserEntity> => {

        //[SQL]
        const query = sql`
            INSERT INTO users (id_user, name, email, password, phone, country, type_user, is_admin, "createdAt", "updatedAt")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING id_user, name, email, password, phone, country, type_user, is_admin, "createdAt", "updatedAt";
        `;
        //[SQL]

        const values = [idUser, name, email, password, phone, country, typeUser, isAdmin, createdAt, updatedAt];

        const result: QueryResult = await pool.query(query, values);
        const insertedRow = result.rows[0];

        return new UserEntity({
            idUser: insertedRow.id_user,
            name: insertedRow.name,
            email: insertedRow.email,
            password: insertedRow.password,
            phone: insertedRow.phone,
            country: insertedRow.country,
            typeUser: insertedRow.type_user,
            isAdmin: insertedRow.is_admin,
            createdAt: insertedRow.createdAt,
            updatedAt: insertedRow.updatedAt
        });
    };
