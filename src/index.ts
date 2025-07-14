import { AppDataSource } from "./database/data-source";
import ProdutoRoutes from "./routes/produto.routes";
import routeUser from "./routes/usuario.routes";
import routeLogin from "./routes/auth.routes"
import express from "express";
const cors = require('cors')
import 'reflect-metadata';
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Servidor rodando")
})

app.use('/produtos', ProdutoRoutes)

AppDataSource.initialize()
.then(() => {
    const app = express()
    app.use(express.json())
    //cord deve ser implementado antes de qualquer rota
    const origins = ["http://localhost:4000"]
    app.use(cors({
        origin: (origin: string, callback: Function) =>{
            if (!origin) return callback(null, true)

                if (origins.includes(origin)){
                    return callback(null, true)
                } else {
                    return callback(new Error("Origem não permitida"))
                }
        },
        credintials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }))
    app.use('/produtos', ProdutoRoutes)
    app.use('/usuarios', routeUser)
    app.use("/login", routeLogin)
    app.listen(process.env.PORT, () => {
        console.log("servidor produtos na porta", process.env.PORT);
    })
})

.catch((error) => {
    console.error("Busca de dados não está conectando");
})
