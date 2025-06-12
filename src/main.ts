import "./config/env";
import cookieParser from "cookie-parser";
import express from "express";
import { Connection } from "./database/connection";
import { errorHandler } from "./middlewares/error-handler-middleware";
import { routes } from "./routes";
import cors from "cors"


const app = express();

await Connection();
app.use(cors({
    origin: "http://localhost:5173",  
    credentials: true,  // Para permitir o uso dos cookies    
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(errorHandler);
app.listen(3000, () => console.log("Servidor Ligado na porta 3000"));
