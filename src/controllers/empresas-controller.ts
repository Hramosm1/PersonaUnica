import { prisma } from "../database";
import { Request, Response } from "express";
import { getFilterOfEmpresas } from "../core/util";
import { Page } from "../interfaces/interfaces-perfiles";
import { resultEmpresas } from "../interfaces/empresas.interface";
export class EmpresasController {
  public async GetAll(req: Request, res: Response): Promise<void> {
    try {
      const { take, pageNumber, skip, where } = getFilterOfEmpresas(req.params)
      const data = await prisma.pU_Perfil.findMany({
        select: {
          id: true,
          razonSocial: true,
          PU_Nombres: { select: { nombre: true }, take: 1 }
        },
        skip,
        take,
        where
      })
      const totalElements = await prisma.pU_Perfil.count({ where })
      const pageData: Page = { pageNumber, take, totalElements, totalPages: Math.ceil(totalElements / take) }
      res.send({ data, pageData });
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
