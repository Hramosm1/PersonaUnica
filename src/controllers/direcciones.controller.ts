import { prisma } from "../database";
import { Request, Response } from "express";

export class DireccionesController {
  async create(req: Request, res: Response) {

    const { body } = req;
    try {
      const response = await prisma.pU_Direcciones.create({ data: body });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  async update(req: Request, res: Response) {

    const { body } = req;
    const { id } = req.params;
    try {
      const response = await prisma.pU_Direcciones.update({
        data: body,
        where: { id: id },
      });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  async delete(req: Request, res: Response) {

    const { id } = req.params;
    try {
      const response = await prisma.pU_Direcciones.delete({
        where: { id: id },
      });
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
}
