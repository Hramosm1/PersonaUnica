import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

export class NombresController {
  async create(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { body } = req;
    try {
      const response = await prisma.pU_Nombres.create({ data: body });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  async update(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
      const response = await prisma.pU_Nombres.update({
        data: req.body,
        where: { id: id },
      });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  async delete(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
      const response = await prisma.pU_Nombres.delete({ where: { id: id } });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
}
