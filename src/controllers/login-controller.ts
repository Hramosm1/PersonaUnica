import { Request, Response } from "express";
import { Token } from "../token";
import { PrismaClient } from "@prisma/client";
export class LoginController {
  public async login(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const _Token = new Token();
    const { username, password } = req.body;
    try {
      const result: any = await prisma.$queryRawUnsafe(
        `SELECT idCobrador, estado, CoNombre as nombre, CoApellido as apellido FROM IC_Cobrador WHERE Usuario = '${username}' AND Password = CAST('${password}' AS binary)`
      );
      if (result.length > 0) {
        const user = result[0];
        const token = await _Token.crearToken(user);
        res.send({ token: token, ...user });
      } else {
        res.send({ token: null });
      }
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message, info: req.body });
    }
  }
}
