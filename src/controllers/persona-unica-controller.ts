import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

export class PersonaUnicaController {
  public async getOne(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { id } = req.params;
    try {
      const perfil: object[] = await prisma.$queryRawUnsafe(
        `SELECT genero, fecha, primerApellido, segundoApellido, personaUnica, razonSocial, observaciones FROM PU_Perfil WHERE id = '${id}'`
      );
      const nombres = await prisma.$queryRawUnsafe(
        `SELECT id, nombre FROM PU_Nombres WHERE idPerfil = '${id}'`
      );
      const contactos = await prisma.$queryRawUnsafe(
        `SELECT c.id, c.nombreCompleto, o.tipoOrigen AS origenInformacion, t.tipoContacto FROM PU_Contactos AS c INNER JOIN PU_TiposOrigen AS o ON c.origenInformacion = o.id INNER JOIN PU_TiposContacto AS t ON c.tipoContacto = t.id WHERE idPerfil = '${id}'`
      );
      const correos = await prisma.$queryRawUnsafe(
        `SELECT c.id, c.correo, t.tipoOrigen AS origenInformacion FROM PU_Correos AS c INNER JOIN PU_TiposOrigen AS t ON c.origenInformacion = t.id WHERE idPerfil = '${id}'`
      );
      const direcciones = await prisma.$queryRawUnsafe(
        `SELECT d.id, d.departamento, d.municipio, d.zona, d.colonia, d.direccion, d.referencia, o.tipoOrigen AS origenInformacion FROM PU_Direcciones AS d INNER JOIN PU_TiposOrigen AS o ON d.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const documentos = await prisma.$queryRawUnsafe(
        `SELECT d.id, d.documento, t.tipoDocumento AS tipo FROM PU_Documentos AS d INNER JOIN PU_TiposDocumento AS t ON d.tipo = t.id WHERE idPerfil = '${id}'`
      );
      const telefonos = await prisma.$queryRawUnsafe(
        `SELECT t.id, t.codigoPais, t.telefono, tt.tipoTelefono AS tipoTelefono, o.tipoOrigen AS origenInformacion FROM PU_Telefonos AS t INNER JOIN PU_TiposTelefono AS tt ON t.tipoTelefono = tt.id INNER JOIN PU_TiposOrigen AS o ON t.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const referenciasWeb = await prisma.$queryRawUnsafe(
        `SELECT r.id, r.link, tp.tipoPaginaWeb AS tipo, o.tipoOrigen AS origenInformacion FROM PU_ReferenciasWeb AS r INNER JOIN PU_TiposPaginaWeb AS tp ON r.tipo = tp.id INNER JOIN PU_TiposOrigen AS o ON r.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const empleos = await prisma.$queryRawUnsafe(
        `SELECT e.id, p.razonSocial AS empresa, e.puesto, e.fechaInicio, e.fechaFin, o.tipoOrigen AS origenInformacion FROM PU_Empleos AS e INNER JOIN PU_TiposOrigen AS o ON e.origenInformacion = o.id INNER JOIN PU_Perfil AS p ON e.empresa = p.id WHERE idPerfil = '${id}'`
      );

      const result = {
        id: id,
        nombres: nombres,
        contactos: contactos,
        correos: correos,
        direcciones: direcciones,
        documentos: documentos,
        telefonos: telefonos,
        referenciasWeb: referenciasWeb,
        empleos: empleos,
        ...perfil[0],
      };
      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getAll(req: Request, res: Response) {
    const prisma = new PrismaClient();
    try {
      const result: any[] = await prisma.$queryRawUnsafe(
        "SELECT p.id, p.primerApellido, p.segundoApellido, p.fecha, p.razonSocial, (SELECT TOP 1 documento FROM PU_Documentos WHERE idPerfil = p.id) AS documento, t.tipoPersona FROM PU_Perfil as p INNER JOIN PU_TiposPersona AS t ON p.tipo = t.id "
      );
      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async updatePerfil(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const { id } = req.params;
    let bod = req.body;
    const dat = new Date(req.body.fecha).toLocaleDateString();
    bod.fecha = dat;
    const {
      primerApellido,
      segundoApellido,
      fecha,
      genero,
      observaciones,
      razonSocial,
    } = bod;
    try {
      const result = await prisma.$queryRawUnsafe(
        `UPDATE PU_Perfil SET primerApellido='${primerApellido}', segundoApellido='${segundoApellido}',fecha=convert(datetime, '${fecha}', 104)+1,genero=${genero},observaciones='${observaciones}',razonSocial='${razonSocial}' WHERE id ='${id}'`
      );
      res.send({ error: false, mensaje: result });
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async postData(req: Request, res: Response) {
    const prisma = new PrismaClient();
    let existe = false;
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
      for (let i = 0; i < documentos.length; i++) {
        const documento = documentos[i];
        if (
          (await prisma.pU_Documentos.count({
            where: { documento: documento.documento, tipo: documento.tipo },
          })) > 0
        ) {
          existe = true;
          break;
        }
      }
    }
    if (existe) {
      res.send({
        error: true,
        mensaje: "ya existe un perfil con ese documento",
      });
    } else {
      const date = req.body.fecha == "" ? null : req.body.fecha;
      try {
        const { id } = await prisma.pU_Perfil.create({
          data: {
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            genero: req.body.genero,
            tipo: req.body.tipo,
            razonSocial: req.body.razonSocial,
            fecha: date,
            observaciones: req.body.observaciones,
            personaUnica: req.body.personaUnica,
            nombreEjecutivo: req.body.nombreEjecutivo,
          },
        });
        for (let i = 0; i < nombres.length; i++) {
          const data = nombres[i];
          await prisma.pU_Nombres.create({
            data: { idPerfil: id, nombre: data },
          });
        }
        for (let i = 0; i < correos.length; i++) {
          const data = correos[i];
          await prisma.pU_Correos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < empleos.length; i++) {
          const data = empleos[i];
          await prisma.pU_Empleos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < documentos.length; i++) {
          const data = documentos[i];
          await prisma.pU_Documentos.create({
            data: { idPerfil: id, ...data },
          });
        }
        for (let i = 0; i < telefonos.length; i++) {
          const data = telefonos[i];
          await prisma.pU_Telefonos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < direcciones.length; i++) {
          const data = direcciones[i];
          await prisma.pU_Direcciones.create({
            data: { idPerfil: id, ...data },
          });
        }
        for (let i = 0; i < contactos.length; i++) {
          const data = contactos[i];
          await prisma.pU_Contactos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < referenciasWeb.length; i++) {
          const data = referenciasWeb[i];
          await prisma.pU_ReferenciasWeb.create({
            data: { idPerfil: id, ...data },
          });
        }
        res.send({ error: false, mensaje: "respuesta ingresada" });
      } catch (error: any) {
        res.send({ error: true, mensaje: error.message });
      }
    }
  }
}
