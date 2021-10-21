import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class TiposController {
  /**
   * getGeneros
   */
  public async getGeneros(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_Generos.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoDocumento(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_Documentos.findMany();

      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoPersona(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_TiposPersona.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTIpoContacto(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_TiposContacto.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoTelefono(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_TiposTelefono.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoOrigen(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_TiposOrigen.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoPaginaWeb(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const response = await prisma.pU_TiposPaginaWeb.findMany();
      res.send(response);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
}
