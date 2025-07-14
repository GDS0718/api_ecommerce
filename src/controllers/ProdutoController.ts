import { Request, Response } from "express"
import { ProdutoService } from "../services/ProdutoService"

export const ProdutoController = {
    async listar(req: Request, res: Response): Promise<void>{
        try{
            const produtos = await ProdutoService.listar()
            res.json(produtos)
        }catch{
            res.status(300).json({erro: "Erro ao listar produtos"})
        }
    },

    criar:async (req: Request, res: Response): Promise<void> =>{
        try{
            const produto = await ProdutoService.criar(req.body)
            res.status(201).json(produto)
        }catch{
            res.status(500).json({erro: "Erro ao criar o recurso"})
        }
    },

    async buscar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const produto = await ProdutoService.buscarPorId(id)
        if(!produto) res.status(404).json({erro: "Produto não encontrado"})
            res.status(200).json(produto)
    },

    async atualizar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const atualizado = await ProdutoService.atualizar(id, req.body)
        if(!atualizado) res.status(404).json({erro: "Produto nãõ encontrado"})
        
        res.status(200).json(atualizado)
    },

    async deletar(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id)
        const removido = await ProdutoService.deletar(id)
        if(!removido) res.status(404).json({erro: "Produto não encontrado"})
        
        res.status(200).json(removido)
    },
}