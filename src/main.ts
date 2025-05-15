import express from "express";
const app = express();

app.use(express.json());

app.get("/", (_req, res) =>{
    res.json({
        message: "Hello World"
    })
})

app.listen(3000,()=>{
    console.log("Servidor Ligado na porta 3000");
})