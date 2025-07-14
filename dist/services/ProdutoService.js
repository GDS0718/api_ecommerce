"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const data_source_1 = require("../database/data-source");
const Produtos_1 = require("../entities/Produtos");
const repo = data_source_1.AppDataSource.getRepository(Produtos_1.Produto);
exports.ProdutoService = {
    async criar(data) {
        const produto = repo.create(data);
        await repo.save(produto);
        console.log(produto);
        return produto;
    },
    async listar() {
        return await repo.find();
    },
    async buscarPorId(id) {
        return await repo.findOneBy({ id });
    },
    async atualizar(id, data) {
        const produto = await repo.findOneBy({ id });
        if (!produto)
            return null;
        repo.merge(produto, data);
        return await repo.save(produto);
    },
    async deletar(id) {
        const produto = await repo.findOneBy({ id });
        if (!produto)
            return null;
        await repo.remove(produto);
        return produto;
    }
};
