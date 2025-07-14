"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const data_source_1 = require("./database/data-source");
const produto_routes_1 = __importDefault(require("./routes/produto.routes"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Servidor rodando");
});
app.use('/produtos', produto_routes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/produtos', produto_routes_1.default);
    app.listen(process.env.API_PORT, () => {
        console.log("s3ervidor produtos na porat", process.env.AP);
    });
});
app.listen(process.env.API_PORT, () => {
    console.log("Servifor rodando na porta", process.env.API_PORT);
});
