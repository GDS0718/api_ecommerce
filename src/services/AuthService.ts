import { DataSource } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario"
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const repo = AppDataSource.getRepository(Usuario)

export const AuthService = {

    async auth(usuario: string, password: string) {

        const user = await repo.findOneBy({ email: usuario })

        if (user) {
            const passwordCompare = await bcrypt.compare(password, user.password)

            if (!passwordCompare) {
                throw new Error("Dados de login incorretos")
            }
            //criar um token jwt
            const token =jwt.sign(
                {
                    sub: user.id,
                    email: user.email,
                    nome: user.nome
                },
                process.env.JWT_SECRET,
                { espiresIn: process.env.JWT_EXPIRE || '1h'}
            )

            //retornar os dados do usuario com o token
            return {
                user: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                },
                token
            }
        }
    
    }
}

