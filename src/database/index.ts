// test{Connection.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	try {
		await prisma.$connect();
		console.log("✅ Conectado ao SQL Server com sucesso!");
	} catch (error) {
		console.error("❌ Erro ao conectar com o banco de dados:", error);
	} finally {
		await prisma.$disconnect();
	}
}

main();
