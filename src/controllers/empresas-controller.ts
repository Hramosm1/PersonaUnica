import { prisma } from "../database";
import { Request, Response } from "express";
export class EmpresasController {
  public async GetAll(req: Request, res: Response): Promise<void> {

    try {
      const result = await prisma.$queryRawUnsafe(
        "SELECT p.id, p.razonSocial, (SELECT TOP 1 nombre FROM PU_Nombres WHERE idPerfil = p.id) AS nombre FROM PU_Perfil as p WHERE tipo = 2"
      );
      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
