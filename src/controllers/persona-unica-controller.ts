import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

export class PersonaUnicaController {
  public async getOne(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
      const result = await prisma.pU_Perfil.findUnique({
        select: {
          genero: true,
          fecha: true,
          primerApellido: true,
          segundoApellido: true,
          PU_Nombres: true,
          PU_Contactos: true,
          PU_Correos: true,
          PU_Direcciones: true,
          PU_Documentos: true,
          PU_Telefonos: true,
          PU_ReferenciasWeb: true,
          PU_Empleos_PU_Empleos_empresaToPU_Perfil: true,
          personaUnica: true,
        },
        where: { id: id },
      });

      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getAll(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const result = await prisma.pU_Perfil.findMany({
        select: {
          PU_Nombres: true,
          PU_Documentos: true,
          fecha: true,
          primerApellido: true,
          segundoApellido: true,
          razonSocial: true,
        },
      });
      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async postData(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const {
      nombres,
      correos,
      empleos,
      documentos,
      telefonos,
      direcciones,
      contactos,
      referenciasWeb,
    } = req.body;
    if (documentos.length > 0) {
      req.body.personaUnica = true;
    }
    try {
      const { id } = await prisma.pU_Perfil.create({
        data: {
          primerApellido: req.body.segundoApellido,
          segundoApellido: req.body.segundoApellido,
          genero: req.body.genero,
          tipo: req.body.tipo,
          razonSocial: req.body.razonSocial,
          fecha: req.body.fecha,
          observaciones: req.body.observaciones,
          personaUnica: req.body.personaUnica,
          nombreEjecutivo: req.body.nombreEjecutivo,
        },
      });

      for await (const i of nombres) {
        prisma.pU_Nombres.create({ data: { idPerfil: id, ...nombres[i] } });
      }
      for await (const i of correos) {
        prisma.pU_Correos.create({ data: { idPerfil: id, ...correos[i] } });
      }
      for await (const i of empleos) {
        prisma.pU_Empleos.create({ data: { idPerfil: id, ...empleos[i] } });
      }
      for await (const i of documentos) {
        prisma.pU_Documentos.create({
          data: { idPerfil: id, ...documentos[i] },
        });
      }
      for await (const i of telefonos) {
        prisma.pU_Telefonos.create({ data: { idPerfil: id, ...telefonos[i] } });
      }
      for await (const i of direcciones) {
        prisma.pU_Direcciones.create({
          data: { idPerfil: id, ...direcciones[i] },
        });
      }
      for await (const i of contactos) {
        prisma.pU_Contactos.create({ data: { idPerfil: id, ...contactos[i] } });
      }
      for await (const i of referenciasWeb) {
        prisma.pU_ReferenciasWeb.create({
          data: { idPerfil: id, ...referenciasWeb[i] },
        });
      }
      res.send({ error: false, mensaje: "respuesta ingresada" });
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
