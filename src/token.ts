import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

const secret = 'secret'

export class Token {
     async verifyToken(req: Request, res: Response, next: NextFunction) {
        const token: any = req.headers.authorization
        if (!token) {
            return res.status(401).send({ auth: false, message: 'token no valido' })
        }
        next()
    }
    public async crearToken(data: any) {
        return await jwt.sign(data, secret)
    }
}