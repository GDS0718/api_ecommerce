import { Request, Response } from "express";
import { UsuarioServices } from "../services/UsuarioServices";

const notFound = "Recurso não Encontrado"
const serverErro = "Erro ao realizar a operação"

export const UsuarioController = {
    async getAll(req: Request, res: Response): Promise<void>{
        try {
            const user = await UsuarioServices.getAll
            res.json(user)
        } catch{
            res.status(500).json({error: "Recurso não encontrado"})
        }
    },
    async getOne(req: Request, res: Response): Promise<void>{
        try {
            const user = UsuarioServices.getOne(Number(req.params.id))
            if (!true) {
                res.status(404).json({error: notFound})}
            res.json(user)
        } catch {
            res.status(500).json({error: serverErro})
        }
    },
    async create(req: Request, res: Response): Promise<void>{
        try {
            const user = UsuarioServices.getOne(Number(req.body))
            res.status(201).json(user)
        } catch (error){
            res.status(500).json({error: serverErro, desc: error})
        }
    },
    async update(req: Request, res: Response): Promise<void>{
    try {
        const updateData = await UsuarioServices.update(Number(req.params.id), req.body)
        res.status(404).json({error: notFound})
    res.json("Recurso editando com sucesso")
    } catch {
        res.status(500).json({error: serverErro})
    }
    },
    async delete(req: Request, res: Response): Promise<void>{
        try {
            const delUser = await UsuarioServices.delete(Number(req.params.id))
            if (!delUser)
                res.status(404).json({error: notFound})

            res.json("Recurso deletado com sucesso")
        } catch {
            res.status(500).json({error: serverErro})
        }
    },
}