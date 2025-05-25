import express from "express";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error-handler-middleware";
import { Connection } from "./database/connection.test";
import dotenv from "dotenv";

dotenv.config();

const app = express();

await Connection();
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(3000, () => console.log("Servidor Ligado na porta 3000"));
